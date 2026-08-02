#!/usr/bin/env node
'use strict';

/**
 * Compilador del Design System NFCD.
 *
 *   node _compile.js
 *
 * Regenera, a partir de las fuentes (components/, tokens/, ui_kits/,
 * guidelines/, templates/):
 *   - _ds_bundle.js            componentes React transpilados para el browser
 *   - _ds_manifest.json        metadata del DS en el schema que consume
 *                              Claude Design (cards, templates, startingPoints,
 *                              tokens con kind, fonts, brandFonts, themes)
 *   - _adherence.oxlintrc.json reglas oxlint: tokens semánticos + validación
 *                              de props por componente (derivada de los .d.ts)
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
const GUIDELINES_DIR = path.join(ROOT, 'guidelines');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const COMPONENT_GROUPS = ['core', 'content', 'forms'];

const BUNDLE_OUT = path.join(ROOT, '_ds_bundle.js');
const MANIFEST_OUT = path.join(ROOT, '_ds_manifest.json');
const OXLINT_OUT = path.join(ROOT, '_adherence.oxlintrc.json');

// ================================================================
// esbuild — resolución robusta del módulo
// ================================================================
// Resolución normal primero; si este proyecto no tiene node_modules
// propio, se cae a la instalación compartida documentada en CLAUDE.md.
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

// ---------- helpers generales ----------
const relPath = (abs) => path.relative(ROOT, abs).split(path.sep).join('/');
const exists = (p) => fs.existsSync(p);
const read = (p) => fs.readFileSync(p, 'utf8');
const shortHash = (text) => crypto.createHash('sha256').update(text).digest('hex').slice(0, 12);

// Parsea atributos key="value" de una anotación (@dsCard, @template, @startingPoint)
function parseAttrs(line) {
  const attrs = {};
  const re = /([\w-]+)="([^"]*)"/g;
  let m;
  while ((m = re.exec(line))) attrs[m[1]] = m[2];
  return attrs;
}

// ================================================================
// 1) Namespace estable
// ================================================================
// El hash se conserva entre corridas (releyendo el manifest previo) para
// que window.NFCDDesignSystem_<hash> no cambie de nombre en cada build.
function resolveNamespace() {
  try {
    const prev = JSON.parse(read(MANIFEST_OUT));
    if (prev.namespace && /^NFCDDesignSystem_[0-9a-f]{6}$/.test(prev.namespace)) {
      return prev.namespace;
    }
  } catch (_) {
    // sin manifest previo o corrupto: se genera uno nuevo
  }
  return `NFCDDesignSystem_${crypto.randomBytes(4).toString('hex').slice(0, 6)}`;
}

// ================================================================
// 2) Descubrimiento de fuentes del bundle
// ================================================================
// Tres clases de fuente, cada una con su tratamiento:
//   component — components/{core,content,forms}: exporta al namespace
//   uikit     — ui_kits/website/*.jsx: composiciones, se cuelgan de window.<Nombre>
//   verbatim  — listmonk_public_es.js: JS plano, se incluye tal cual
function findBundleSources() {
  const sources = [];
  for (const group of COMPONENT_GROUPS) {
    const dir = path.join(COMPONENTS_DIR, group);
    if (!exists(dir)) continue;
    for (const entry of fs.readdirSync(dir).sort()) {
      if (/\.(jsx|tsx)$/.test(entry)) sources.push({ kind: 'component', abs: path.join(dir, entry) });
    }
  }
  const listmonk = path.join(ROOT, 'listmonk_public_es.js');
  if (exists(listmonk)) sources.push({ kind: 'verbatim', abs: listmonk });
  const websiteDir = path.join(UI_KITS_DIR, 'website');
  if (exists(websiteDir)) {
    for (const entry of fs.readdirSync(websiteDir).sort()) {
      if (/\.jsx$/.test(entry)) sources.push({ kind: 'uikit', abs: path.join(websiteDir, entry) });
    }
  }
  // Orden estable por path (components < listmonk < ui_kits, como el bundle histórico)
  return sources.sort((a, b) => relPath(a.abs).localeCompare(relPath(b.abs)));
}

// Nombres exportados de un componente (heurística por regex — el manifest y
// las líneas de exposición la usan; los exports reales los resuelve esbuild).
function extractExportNames(source) {
  const names = new Set();
  for (const re of [
    /export\s+function\s+([A-Za-z_$][\w$]*)/g,
    /export\s+const\s+([A-Za-z_$][\w$]*)/g,
    /export\s+class\s+([A-Za-z_$][\w$]*)/g,
  ]) {
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

// ================================================================
// 3) Transpilación
// ================================================================
// React no se empaqueta: se resuelve a window.React vía plugin, así el
// bundle no arrastra ninguna dependencia de npm.
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

// Componentes: build aislado con exports capturados en __mod
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

// ui_kits: transform simple (sin imports; destructuran del namespace) +
// exposición de sus funciones top-level en window, como espera index.html
async function compileUiKit(absPath, source) {
  const result = await esbuild.transform(source, {
    loader: 'jsx',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    target: 'es2019',
  });
  const fnNames = [...source.matchAll(/^function\s+([A-Za-z_$][\w$]*)/gm)].map((m) => m[1]);
  const expose = fnNames.map((n) => `window.${n} = ${n};`).join('\n');
  return result.code + (expose ? `\n${expose}` : '');
}

// ================================================================
// 4) Armado de _ds_bundle.js
// ================================================================
// Cada fuente vive en su propio try/catch: una rota queda registrada en
// __errors sin tirar abajo el resto del bundle. Las exposiciones al
// namespace se emiten después de los components y antes de los ui_kits,
// para que el destructuring de los ui_kits encuentre los componentes.
async function buildBundle(namespace, sources) {
  const manifestComponents = [];
  const sourceHashes = {};
  const componentChunks = [];
  const trailingChunks = [];

  const wrapChunk = (rel, code) =>
    `// ${rel}\n` +
    `try { (() => {\n${code}\n})(); } ` +
    `catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: String((e && e.message) || e) }); }`;

  for (const { kind, abs } of sources) {
    const rel = relPath(abs);
    const source = read(abs);
    sourceHashes[rel] = shortHash(source);
    try {
      if (kind === 'component') {
        const compiled = await compileComponent(abs);
        const exportNames = extractExportNames(source);
        const name = exportNames[0] || path.basename(abs).replace(/\.(jsx|tsx)$/, '');
        componentChunks.push(wrapChunk(rel, `${compiled}\nObject.assign(__ds_scope, __mod);`));
        manifestComponents.push({ name, sourcePath: rel, exports: exportNames });
      } else if (kind === 'uikit') {
        trailingChunks.push(wrapChunk(rel, await compileUiKit(abs, source)));
      } else {
        trailingChunks.push(wrapChunk(rel, source));
      }
    } catch (err) {
      const error = String((err && err.message) || err);
      console.error(`  ⚠️  ${rel}: ${error}`);
      componentChunks.push(
        `// ${rel}\n__ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: ${JSON.stringify(error)} });`
      );
    }
  }

  const exposedNames = [...new Set(manifestComponents.flatMap((c) => (c.exports.length ? c.exports : [c.name])))];
  const exposeLines = exposedNames.map((n) => `__ds_ns.${n} = __ds_scope.${n};`).join('\n\n');

  const header = {
    format: 4,
    namespace,
    components: manifestComponents.map(({ name, sourcePath }) => ({ name, sourcePath })),
    sourceHashes,
    inlinedExternals: [],
    unexposedExports: [],
  };

  const bundle =
    `/* @ds-bundle: ${JSON.stringify(header)} */\n\n` +
    `(() => {\n\n` +
    `const __ds_ns = (window.${namespace} = window.${namespace} || {});\n\n` +
    `const __ds_scope = {};\n\n` +
    `(__ds_ns.__errors = __ds_ns.__errors || []);\n\n` +
    componentChunks.join('\n\n') +
    `\n\n${exposeLines}\n\n` +
    trailingChunks.join('\n\n') +
    `\n\n})();\n`;

  fs.writeFileSync(BUNDLE_OUT, bundle);
  console.log(`✓ ${relPath(BUNDLE_OUT)} (${manifestComponents.length} componentes + ${trailingChunks.length} extra)`);
  return manifestComponents;
}

// ================================================================
// 5) Tokens CSS — con kind, definedIn y scope
// ================================================================
// Clasificación heurística calibrada contra el corpus real de tokens:
// el nombre manda (shadow/radius/motion), después el archivo. Los --text-*
// de colors.css son COLORES; los tamaños viven en typography.css.
function classifyToken(name, fileName) {
  if (/shadow/.test(name)) return { kind: 'shadow' };
  if (/radius/.test(name)) return { kind: 'radius' };
  if (/--(ease|dur)-|blend/.test(name)) return { kind: 'other', annotation: 'other' };
  if (fileName === 'typography.css') return { kind: 'font' };
  if (fileName === 'spacing.css') return { kind: 'spacing' };
  return { kind: 'color' };
}

// Extrae tokens recorriendo bloques selector { ... } para capturar el
// scope real (p.ej. :root[data-theme="dark"] en colors.dark.css).
function extractTokens(fileName) {
  const abs = path.join(TOKENS_DIR, fileName);
  if (!exists(abs)) return [];
  const css = read(abs).replace(/\/\*[\s\S]*?\*\//g, '');
  const tokens = [];
  const blockRe = /([^{}]+)\{([^{}]*)\}/g;
  let block;
  while ((block = blockRe.exec(css))) {
    const selector = block[1].trim().split('\n').pop().trim();
    const declRe = /(--[\w-]+)\s*:\s*([^;]+);/g;
    let m;
    while ((m = declRe.exec(block[2]))) {
      const token = {
        name: m[1].trim(),
        value: m[2].trim().replace(/\s+/g, ' '),
        ...classifyToken(m[1].trim(), fileName),
        definedIn: `tokens/${fileName}`,
      };
      if (selector !== ':root') token.scope = selector;
      // annotation al final para respetar el orden de claves del schema
      if (token.annotation) {
        const { annotation, ...rest } = token;
        tokens.push({ ...rest, annotation });
      } else {
        tokens.push(token);
      }
    }
  }
  return tokens;
}

function buildThemes(tokens) {
  const scopes = [...new Set(tokens.filter((t) => t.scope).map((t) => t.scope))];
  return scopes.map((selector) => ({
    selector,
    label: /data-theme="dark"/.test(selector) ? 'Root Dark' : selector,
  }));
}

// ================================================================
// 6) Fuentes (@font-face) y brandFonts
// ================================================================
function extractFonts() {
  const cssPath = path.join(TOKENS_DIR, 'fonts.css');
  if (!exists(cssPath)) return [];
  const css = read(cssPath);
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
    const files = [...(grab('src') || '').matchAll(/url\((['"]?)(.*?)\1\)/g)]
      .map((u) => relPath(path.resolve(TOKENS_DIR, u[2])));
    fonts.push({
      family,
      weight: grab('font-weight') || '400',
      style: grab('font-style') || 'normal',
      cssPath: 'tokens/fonts.css',
      files,
    });
  }
  return fonts;
}

// brandFonts: qué token de typography referencia a cada familia declarada
function buildBrandFonts(fonts, typographyTokens) {
  const families = [...new Set(fonts.map((f) => f.family).filter(Boolean))];
  return families.map((family) => ({
    family,
    status: 'ok',
    tokens: typographyTokens.filter((t) => t.value.includes(family)).map((t) => t.name),
    path: 'tokens/fonts.css',
  }));
}

// ================================================================
// 7) Cards, startingPoints y templates — desde anotaciones fuente
// ================================================================
// cards: <!-- @dsCard group="..." viewport="..." name="..." subtitle="..." -->
function buildCards() {
  const searchDirs = [
    path.join(ROOT, 'assets', 'brand'),
    GUIDELINES_DIR,
    ...COMPONENT_GROUPS.map((g) => path.join(COMPONENTS_DIR, g)),
    ...(exists(UI_KITS_DIR)
      ? fs.readdirSync(UI_KITS_DIR).map((e) => path.join(UI_KITS_DIR, e)).filter((p) => fs.statSync(p).isDirectory())
      : []),
  ];
  const cards = [];
  for (const dir of searchDirs) {
    if (!exists(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      if (!/\.html$/.test(entry)) continue;
      const abs = path.join(dir, entry);
      const m = read(abs).match(/@dsCard\s+([^\n]*?)-->/);
      if (!m) continue;
      const a = parseAttrs(m[1]);
      cards.push({
        path: relPath(abs),
        group: a.group || '',
        viewport: a.viewport || '',
        subtitle: a.subtitle || '',
        name: a.name || entry,
      });
    }
  }
  return cards.sort((x, y) => x.group.localeCompare(y.group) || x.path.localeCompare(y.path));
}

// startingPoints: @startingPoint en .d.ts (componentes) e index.html (ui_kits)
function buildStartingPoints(dtsInfoByName) {
  const points = [];
  for (const [name, info] of Object.entries(dtsInfoByName)) {
    if (!info.startingPoint) continue;
    points.push({
      name,
      path: info.jsxPath,
      previewPath: info.previewPath,
      kind: 'component',
      section: info.startingPoint.section || '',
      subtitle: info.startingPoint.subtitle || '',
      viewport: info.startingPoint.viewport || '',
    });
  }
  if (exists(UI_KITS_DIR)) {
    for (const entry of fs.readdirSync(UI_KITS_DIR).sort()) {
      const indexHtml = path.join(UI_KITS_DIR, entry, 'index.html');
      if (!exists(indexHtml)) continue;
      const m = read(indexHtml).match(/@startingPoint\s+([^\n]*?)-->/);
      if (!m) continue;
      const a = parseAttrs(m[1]);
      points.push({
        name: entry,
        path: relPath(indexHtml),
        previewPath: relPath(indexHtml),
        kind: 'screen',
        section: a.section || '',
        subtitle: a.subtitle || '',
        viewport: a.viewport || '',
      });
    }
  }
  return points.sort((x, y) => x.path.localeCompare(y.path));
}

// templates: carpetas en templates/ con un .dc.html anotado con @template
function buildTemplates() {
  if (!exists(TEMPLATES_DIR)) return [];
  const templates = [];
  const scan = (dcAbs, folderAbs) => {
    const m = read(dcAbs).match(/@template\s+([^\n]*?)-->/);
    if (!m) return;
    const a = parseAttrs(m[1]);
    const thumb = path.join(folderAbs, '.thumbnail');
    const entry = {
      name: a.name || path.basename(dcAbs),
      description: (a.description || '').slice(0, 200),
      folder: relPath(folderAbs),
      entryPath: relPath(dcAbs),
    };
    if (exists(thumb)) entry.thumbnail = { path: relPath(thumb), kind: 'captured' };
    templates.push(entry);
  };
  for (const entry of fs.readdirSync(TEMPLATES_DIR)) {
    const abs = path.join(TEMPLATES_DIR, entry);
    if (fs.statSync(abs).isDirectory()) {
      for (const f of fs.readdirSync(abs)) {
        if (/\.dc\.html$/.test(f)) scan(path.join(abs, f), abs);
      }
    } else if (/\.dc\.html$/.test(entry)) {
      scan(abs, TEMPLATES_DIR);
    }
  }
  return templates.sort((x, y) => x.name.localeCompare(y.name));
}

// ================================================================
// 8) Parseo de .d.ts — props y enums para las reglas oxlint
// ================================================================
// Devuelve por componente: props declaradas (en orden), enums de string
// literals, y la anotación @startingPoint si existe.
function parseDts() {
  const byName = {};
  for (const group of COMPONENT_GROUPS) {
    const dir = path.join(COMPONENTS_DIR, group);
    if (!exists(dir)) continue;
    const cardHtml = fs.readdirSync(dir).find((f) => /\.card\.html$/.test(f));
    for (const entry of fs.readdirSync(dir)) {
      if (!/\.d\.ts$/.test(entry)) continue;
      const name = entry.replace(/\.d\.ts$/, '');
      const src = read(path.join(dir, entry));
      const info = {
        jsxPath: relPath(path.join(dir, name + '.jsx')),
        previewPath: cardHtml ? relPath(path.join(dir, cardHtml)) : null,
        props: [],
        enums: {},
        startingPoint: null,
      };
      const sp = src.match(/@startingPoint\s+([^\n*]*)/);
      if (sp) info.startingPoint = parseAttrs(sp[1]);
      const iface = src.match(/export\s+interface\s+\w+Props\s*{([\s\S]*?)^}/m);
      if (iface) {
        const propRe = /^\s*(\w+)\??\s*:\s*([^;]+);/gm;
        let pm;
        while ((pm = propRe.exec(iface[1]))) {
          const [, prop, type] = pm;
          info.props.push(prop);
          // enum solo si el tipo es una unión pura de string literals
          const literals = type.match(/"[^"]+"/g);
          if (literals && type.replace(/"[^"]+"|\s|\|/g, '') === '') {
            info.enums[prop] = literals.map((l) => l.slice(1, -1));
          }
        }
      }
      byName[name] = info;
    }
  }
  return byName;
}

// ================================================================
// 9) _adherence.oxlintrc.json
// ================================================================
function buildOxlintConfig(fonts, allTokens, componentNames, dtsInfoByName, bundleSources) {
  const families = [...new Set(fonts.map((f) => f.family).filter(Boolean))];
  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const familyAlt = families.map(escapeRe).join('|');

  const syntaxRules = [
    'error',
    {
      selector: 'Literal[value=/#[0-9a-fA-F]{3,8}\\b/]',
      message: 'Raw hex color — use a design-system color token via var().',
    },
    {
      selector: 'Literal[value=/\\b\\d+px\\b/]',
      message: 'Raw px value — use a design-system spacing token via var().',
    },
    {
      selector: `Literal[value=/font-family\\s*:\\s*(?!['\\"]?(?:${familyAlt}))/i]`,
      message: `Font not provided by the design system. Available: ${families.join(', ')}.`,
    },
  ];

  // Reglas por componente derivadas del .d.ts: props válidas y valores enum
  for (const name of Object.keys(dtsInfoByName).sort()) {
    const info = dtsInfoByName[name];
    if (!info.props.length) continue;
    const allowed = [...info.props, 'key', 'ref', 'className', 'style', 'children'].join('|');
    syntaxRules.push({
      selector: `JSXOpeningElement[name.name='${name}'] > JSXAttribute > JSXIdentifier[name!=/^(?:${allowed})$/]`,
      message: `<${name}> doesn't accept that prop. Declared props: ${info.props.join(', ')}.`,
    });
    for (const [prop, values] of Object.entries(info.enums)) {
      syntaxRules.push({
        selector: `JSXOpeningElement[name.name='${name}'] > JSXAttribute[name.name='${prop}'] > Literal[value!=/^(?:${values.join('|')})$/]`,
        message: `<${name}> ${prop} must be one of ${values.map((v) => `'${v}'`).join(' | ')}.`,
      });
    }
  }

  // Inventario para tooling externo: tokens únicos con su kind
  const tokenKinds = {};
  const tokenNames = new Set();
  for (const t of allTokens) {
    tokenNames.add(t.name);
    if (!(t.name in tokenKinds)) tokenKinds[t.name] = t.kind;
  }

  const importGroups = [
    ...COMPONENT_GROUPS.map((g) => `components/${g}/**`),
    ...bundleSources.filter((s) => s.kind !== 'component').map((s) => (s.kind === 'uikit' ? null : relPath(s.abs))),
  ].filter(Boolean);
  if (bundleSources.some((s) => s.kind === 'uikit')) importGroups.push('ui_kits/website/**');

  return {
    plugins: ['react', 'import'],
    rules: {
      'react/forbid-elements': ['error', { forbid: [] }],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: importGroups,
              message: "Import design-system components from 'index.js', not component internals.",
            },
          ],
        },
      ],
      'no-restricted-syntax': syntaxRules,
    },
    overrides: [{ files: ['**/index.js'], rules: { 'no-restricted-imports': 'off' } }],
    'x-omelette': {
      components: Object.fromEntries([...componentNames].sort().map((n) => [n, { replaces: [] }])),
      tokens: [...tokenNames].sort(),
      tokenKinds,
      fontFamilies: families,
    },
  };
}

// ================================================================
// main
// ================================================================
async function main() {
  console.log('Compilando Design System NFCD…\n');

  const namespace = resolveNamespace();
  const sources = findBundleSources();
  if (!sources.some((s) => s.kind === 'component')) {
    console.warn('⚠️  No se encontraron componentes en components/{core,content,forms}.');
  }

  const manifestComponents = await buildBundle(namespace, sources);

  // tokens en orden de carga: colors → dark → typography → spacing
  const tokens = [
    ...extractTokens('colors.css'),
    ...extractTokens('colors.dark.css'),
    ...extractTokens('typography.css'),
    ...extractTokens('spacing.css'),
  ];
  const typographyTokens = tokens.filter((t) => t.definedIn === 'tokens/typography.css');
  const fonts = extractFonts();
  const dtsInfo = parseDts();

  const globalCssPaths = ['tokens/fonts.css', 'tokens/colors.css', 'tokens/colors.dark.css', 'tokens/typography.css', 'tokens/spacing.css']
    .filter((p) => exists(path.join(ROOT, p)));
  if (exists(path.join(ROOT, 'styles.css'))) globalCssPaths.push('styles.css');

  const manifest = {
    namespace,
    components: manifestComponents.map(({ name, sourcePath }) => ({ name, sourcePath })),
    startingPoints: buildStartingPoints(dtsInfo),
    cards: buildCards(),
    templates: buildTemplates(),
    hasThumbnailHtml: exists(path.join(ROOT, 'thumbnail.html')),
    globalCssPaths,
    tokens,
    themes: buildThemes(tokens),
    fonts,
    brandFonts: buildBrandFonts(fonts, typographyTokens),
    source: 'spa',
  };
  fs.writeFileSync(MANIFEST_OUT, JSON.stringify(manifest));
  console.log(
    `✓ ${relPath(MANIFEST_OUT)} (${tokens.length} tokens, ${manifest.cards.length} cards, ` +
      `${manifest.templates.length} templates, ${manifest.startingPoints.length} startingPoints, ${fonts.length} fuentes)`
  );

  const oxlint = buildOxlintConfig(fonts, tokens, manifestComponents.map((c) => c.name), dtsInfo, sources);
  fs.writeFileSync(OXLINT_OUT, JSON.stringify(oxlint, null, 2));
  const perComponent = oxlint.rules['no-restricted-syntax'].length - 4;
  console.log(`✓ ${relPath(OXLINT_OUT)} (${perComponent} reglas por componente)`);

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
