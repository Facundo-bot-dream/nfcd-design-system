#!/usr/bin/env node
'use strict';

/**
 * Compilador del Design System NFCD.
 *
 *   node _compile.js
 *
 * Regenera, a partir de las fuentes (components/, tokens/, ui_kits/):
 *   - _ds_bundle.js            componentes React transpilados para el browser
 *   - _ds_manifest.json        metadata del DS (tokens, fonts, components, ...)
 *   - _adherence.oxlintrc.json reglas oxlint: solo tokens semánticos, no primitivos
 *
 * No editar esos tres archivos a mano — se sobreescriben en cada corrida.
 * React se asume disponible como global (window.React) en la página que
 * consume el bundle; el bundle en sí no trae ninguna dependencia externa.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const ROOT = __dirname;
const COMPONENTS_DIR = path.join(ROOT, 'components');
const TOKENS_DIR = path.join(ROOT, 'tokens');
const UI_KITS_DIR = path.join(ROOT, 'ui_kits');
const COMPONENT_GROUPS = ['core', 'content', 'forms'];

const BUNDLE_OUT = path.join(ROOT, '_ds_bundle.js');
const MANIFEST_OUT = path.join(ROOT, '_ds_manifest.json');
const OXLINT_OUT = path.join(ROOT, '_adherence.oxlintrc.json');

// ================================================================
// esbuild — resolución robusta del módulo
// ================================================================
// Se intenta la resolución normal primero; si este proyecto no tiene
// su propio node_modules, se cae a la instalación documentada en
// CLAUDE.md (compartida con Milenau) probando un par de profundidades
// relativas razonables.
function loadEsbuild() {
  const candidates = [
    'esbuild',
    path.join(ROOT, '..', 'Software Administrativo - Milenau', 'node_modules', 'esbuild'),
    path.join(ROOT, '..', '..', 'Software Administrativo - Milenau', 'node_modules', 'esbuild'),
    path.join(ROOT, '..', '..', '..', 'Software Administrativo - Milenau', 'node_modules', 'esbuild'),
    path.join(os.homedir(), 'ATANANAHANNA', 'Software Administrativo - Milenau', 'node_modules', 'esbuild'),
  ];
  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch (_) {
      // probar el siguiente candidato
    }
  }
  throw new Error(
    'No se encontró el módulo "esbuild". Instalalo en este proyecto con ' +
      '`npm install esbuild`, o confirmá la ruta compartida documentada en CLAUDE.md.'
  );
}
const esbuild = loadEsbuild();

// ================================================================
// 1) Namespace estable
// ================================================================
// El hash se conserva entre corridas (se relee del manifest previo) para
// que window.NFCDDesignSystem_<hash> no cambie de nombre en cada build.
function resolveNamespace() {
  try {
    const prev = JSON.parse(fs.readFileSync(MANIFEST_OUT, 'utf8'));
    if (prev.namespace && /^NFCDDesignSystem_[0-9a-f]{6}$/.test(prev.namespace)) {
      return prev.namespace;
    }
  } catch (_) {
    // sin manifest previo o corrupto: se genera uno nuevo
  }
  return `NFCDDesignSystem_${crypto.randomBytes(4).toString('hex').slice(0, 6)}`;
}

// ================================================================
// 2) Descubrimiento de componentes
// ================================================================
function findComponentFiles() {
  const files = [];
  for (const group of COMPONENT_GROUPS) {
    const dir = path.join(COMPONENTS_DIR, group);
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      if (/\.(jsx|tsx)$/.test(entry)) files.push(path.join(dir, entry));
    }
  }
  return files.sort();
}

// Heurística liviana (regex) para nombrar los exports en el manifest.
// El bundle real no depende de esto: usa el análisis de exports genuino
// de esbuild vía `globalName`, así que un export atípico que esta regex
// no detecte igual queda expuesto correctamente en tiempo de ejecución.
function extractExportNames(source) {
  const names = new Set();
  const patterns = [
    /export\s+function\s+([A-Za-z_$][\w$]*)/g,
    /export\s+const\s+([A-Za-z_$][\w$]*)/g,
    /export\s+class\s+([A-Za-z_$][\w$]*)/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(source))) names.add(m[1]);
  }
  const braced = source.match(/export\s*{([^}]+)}/);
  if (braced) {
    for (const part of braced[1].split(',')) {
      const name = part.split(/\s+as\s+/).pop().trim();
      if (name) names.add(name);
    }
  }
  return [...names];
}

function relPath(absPath) {
  return path.relative(ROOT, absPath).split(path.sep).join('/');
}

// ================================================================
// 3) Transpilación por componente (aislada, browser, sin deps)
// ================================================================
// React se resuelve a un global (window.React) en vez de empaquetarse:
// el bundle final no trae React ni ninguna otra dependencia de npm.
const reactGlobalPlugin = {
  name: 'react-global',
  setup(build) {
    build.onResolve({ filter: /^react(-dom)?$/ }, (args) => ({
      path: args.path,
      namespace: 'react-global',
    }));
    build.onLoad({ filter: /.*/, namespace: 'react-global' }, () => ({
      contents: 'module.exports = window.React;',
      loader: 'js',
    }));
  },
};

async function compileComponent(absPath) {
  const result = await esbuild.build({
    entryPoints: [absPath],
    bundle: true,
    write: false,
    format: 'iife',
    globalName: '__mod',
    platform: 'browser',
    target: ['es2019'],
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    plugins: [reactGlobalPlugin],
    logLevel: 'silent',
  });
  return result.outputFiles[0].text;
}

// ================================================================
// 4) Armado de _ds_bundle.js
// ================================================================
// Cada componente vive en su propio try/catch: un componente roto queda
// registrado en __errors sin tirar abajo el resto del bundle.
async function buildBundle(namespace, componentFiles) {
  const manifestComponents = [];
  const chunks = [];

  for (const absPath of componentFiles) {
    const rel = relPath(absPath);
    const source = fs.readFileSync(absPath, 'utf8');
    const exportNames = extractExportNames(source);
    const displayName = exportNames[0] || path.basename(absPath).replace(/\.(jsx|tsx)$/, '');

    let compiled;
    let error = null;
    try {
      compiled = await compileComponent(absPath);
    } catch (err) {
      error = String((err && err.message) || err);
      console.error(`  ⚠️  ${rel}: ${error}`);
    }

    if (error) {
      chunks.push(
        `// ${rel}\n` +
          `__ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: ${JSON.stringify(error)} });`
      );
    } else {
      chunks.push(
        `// ${rel}\n` +
          `try { (() => {\n${compiled}\nObject.assign(__ds_scope, __mod);\n})(); } ` +
          `catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: String((e && e.message) || e) }); }`
      );
      manifestComponents.push({ name: displayName, file: rel, exports: exportNames });
    }
  }

  const exposedNames = [...new Set(manifestComponents.flatMap((c) => (c.exports.length ? c.exports : [c.name])))];
  const exposeLines = exposedNames.map((name) => `__ds_ns.${name} = __ds_scope.${name};`).join('\n');

  const bundle =
    `/* @nfcd-ds-bundle namespace=${namespace} generated=${new Date().toISOString()} */\n` +
    `/* No editar a mano — regenerar con \`node _compile.js\`. */\n` +
    `(() => {\n` +
    `const __ds_ns = (window.${namespace} = window.${namespace} || {});\n` +
    `const __ds_scope = {};\n` +
    `__ds_ns.__errors = __ds_ns.__errors || [];\n\n` +
    chunks.join('\n\n') +
    `\n\n${exposeLines}\n` +
    `})();\n`;

  fs.writeFileSync(BUNDLE_OUT, bundle);
  console.log(`✓ ${relPath(BUNDLE_OUT)} (${manifestComponents.length} componentes)`);
  return manifestComponents;
}

// ================================================================
// 5) Tokens CSS + fuentes → _ds_manifest.json
// ================================================================
// Extrae declaraciones `--token: valor;` de un archivo CSS. Heurística
// simple por regex — suficiente porque los archivos de tokens del DS
// son planos (custom properties dentro de bloques :root).
function extractTokens(cssPath) {
  if (!fs.existsSync(cssPath)) return [];
  const css = fs.readFileSync(cssPath, 'utf8');
  const tokens = [];
  const re = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(css))) {
    tokens.push({ name: m[1].trim(), value: m[2].trim() });
  }
  return tokens;
}

function extractFonts(cssPath) {
  if (!fs.existsSync(cssPath)) return [];
  const css = fs.readFileSync(cssPath, 'utf8');
  const fonts = [];
  const blockRe = /@font-face\s*{([^}]+)}/g;
  let block;
  while ((block = blockRe.exec(css))) {
    const body = block[1];
    const grab = (prop) => {
      const mm = body.match(new RegExp(prop + '\\s*:\\s*([^;]+);'));
      return mm ? mm[1].trim() : null;
    };
    const family = (grab('font-family') || '').replace(/^["']|["']$/g, '');
    const srcRaw = grab('src') || '';
    const urlMatch = srcRaw.match(/url\((['"]?)(.*?)\1\)/);
    fonts.push({
      family,
      weight: grab('font-weight') || '400',
      style: grab('font-style') || 'normal',
      src: urlMatch ? urlMatch[2] : null,
    });
  }
  return fonts;
}

function buildTokensAndFonts() {
  const tokens = {
    colors: [...extractTokens(path.join(TOKENS_DIR, 'colors.css')), ...extractTokens(path.join(TOKENS_DIR, 'colors.dark.css'))],
    typography: extractTokens(path.join(TOKENS_DIR, 'typography.css')),
    spacing: extractTokens(path.join(TOKENS_DIR, 'spacing.css')),
  };
  const fonts = extractFonts(path.join(TOKENS_DIR, 'fonts.css'));
  return { tokens, fonts };
}

// ================================================================
// 6) startingPoints desde ui_kits/
// ================================================================
function buildStartingPoints() {
  if (!fs.existsSync(UI_KITS_DIR)) return [];
  const points = [];
  for (const entry of fs.readdirSync(UI_KITS_DIR)) {
    const dir = path.join(UI_KITS_DIR, entry);
    if (!fs.statSync(dir).isDirectory()) continue;
    const indexHtml = path.join(dir, 'index.html');
    const readme = path.join(dir, 'README.md');
    let description = '';
    if (fs.existsSync(readme)) {
      const firstLine = fs.readFileSync(readme, 'utf8').split('\n').find((l) => l.trim() && !l.trim().startsWith('#'));
      description = firstLine ? firstLine.trim() : '';
    }
    points.push({
      name: entry,
      path: relPath(fs.existsSync(indexHtml) ? indexHtml : dir),
      description,
    });
  }
  return points;
}

// ================================================================
// 7) globalCssPaths
// ================================================================
function buildGlobalCssPaths() {
  const order = ['fonts.css', 'colors.css', 'colors.dark.css', 'typography.css', 'spacing.css'];
  const paths = order
    .filter((f) => fs.existsSync(path.join(TOKENS_DIR, f)))
    .map((f) => relPath(path.join(TOKENS_DIR, f)));
  const rootStyles = path.join(ROOT, 'styles.css');
  if (fs.existsSync(rootStyles)) paths.push(relPath(rootStyles));
  return paths;
}

// ================================================================
// 8) _adherence.oxlintrc.json
// ================================================================
// Reglas mínimas: solo permiten tokens semánticos (var(--...)) — nada
// de colores hex, valores px sueltos, ni font-family fuera de las
// familias declaradas en tokens/fonts.css.
function buildOxlintConfig(fonts) {
  const families = [...new Set(fonts.map((f) => f.family).filter(Boolean))];
  const familyAlternation = families.map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');

  return {
    plugins: ['react'],
    rules: {
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'Literal[value=/#[0-9a-fA-F]{3,8}\\b/]',
          message: 'Color hex crudo — usar un token de color del design system vía var().',
        },
        {
          selector: 'Literal[value=/\\b\\d+px\\b/]',
          message: 'Valor px crudo — usar un token de spacing del design system vía var().',
        },
        familyAlternation
          ? {
              selector: `Literal[value=/font-family\\s*:\\s*(?!['\\"]?(?:${familyAlternation}))/i]`,
              message: `Fuente fuera del design system. Disponibles: ${families.join(', ')}.`,
            }
          : null,
      ].filter(Boolean),
    },
  };
}

// ================================================================
// main
// ================================================================
async function main() {
  console.log('Compilando Design System NFCD…\n');

  const namespace = resolveNamespace();
  const componentFiles = findComponentFiles();
  if (componentFiles.length === 0) {
    console.warn('⚠️  No se encontraron componentes en components/{core,content,forms}.');
  }

  const manifestComponents = await buildBundle(namespace, componentFiles);
  const { tokens, fonts } = buildTokensAndFonts();
  const startingPoints = buildStartingPoints();
  const globalCssPaths = buildGlobalCssPaths();

  const manifest = {
    namespace,
    generatedAt: new Date().toISOString(),
    components: manifestComponents,
    tokens,
    fonts,
    startingPoints,
    globalCssPaths,
  };
  fs.writeFileSync(MANIFEST_OUT, JSON.stringify(manifest, null, 2));
  console.log(
    `✓ ${relPath(MANIFEST_OUT)} (${tokens.colors.length} colores, ${tokens.typography.length} typography, ` +
      `${tokens.spacing.length} spacing, ${fonts.length} fuentes, ${startingPoints.length} startingPoints)`
  );

  const oxlintConfig = buildOxlintConfig(fonts);
  fs.writeFileSync(OXLINT_OUT, JSON.stringify(oxlintConfig, null, 2));
  console.log(`✓ ${relPath(OXLINT_OUT)}`);

  console.log(`\nNamespace: window.${namespace}`);
}

main()
  .then(() => {
    if (typeof esbuild.stop === 'function') esbuild.stop();
  })
  .catch((err) => {
    console.error('\n✗ Falló la compilación del Design System:', err);
    if (typeof esbuild.stop === 'function') esbuild.stop();
    process.exit(1);
  });
