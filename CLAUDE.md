# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Recompilar el design system

Cuando cambien archivos en `components/`, `ui_kits/` o `tokens/`, regenerar los tres artefactos derivados:

```bash
node _compile.js
```

Esto regenera:
- `_ds_bundle.js` — todos los componentes React transpilados, listos para el browser sin bundler
- `_ds_manifest.json` — metadata del DS (tokens, fonts, cards, startingPoints, globalCssPaths)
- `_adherence.oxlintrc.json` — reglas oxlint para validar uso correcto de tokens y props

**No editar esos tres archivos a mano** — se sobreescriben en cada compilación.

`_compile.js` usa esbuild desde `../../Software Administrativo - Milenau/node_modules/esbuild`.

## Arquitectura

```
tokens/          ← fuente de verdad visual (CSS custom properties)
  colors.css         primitivos + alias semánticos + chips
  colors.dark.css    overrides [data-theme="dark"]
  typography.css     familias, escala, pesos, tracking
  spacing.css        escala 4px, radios, sombras, motion
  fonts.css          @font-face declarations

components/      ← primitivos React (JSX, export named)
  core/          Button · Eyebrow · Rule
  content/       Card · Tag · Badge
  forms/         Field

ui_kits/         ← composiciones React (consumen window.NFCDDesignSystem_*)
  website/       Hero · SiteHeader · SiteFooter · EncuentrosGrid · AboutBlock
  editorial/     index.html A4 (HTML puro, sin React)

templates/       ← archivos .dc.html editables en Claude Design
guidelines/      ← preview cards HTML por grupo (Brand, Colors, Type, Spacing)
assets/          ← logos PNG, fuentes, manchones de pintura Roxana
```

## Token architecture

Tres capas en `tokens/colors.css`:
1. **Primitivos** — `--wine-600`, `--ink-900`, `--paper-000`, `--sage-500`
2. **Semánticos** — `--brand`, `--surface-page`, `--text-body`, `--border-soft`
3. **Chip tokens** — `--chip-wine-bg/text/line/solid`, ídem ink y sage, `--chip-on-solid`

Los componentes usan **solo semánticos y chip tokens** — nunca primitivos directos. Esto permite que `colors.dark.css` reasigne los alias sin tocar los componentes.

`--img-graphite-blend` controla el `mix-blend-mode` de imágenes grafito (`multiply` en claro, `screen` en oscuro).

## Namespace del bundle

```js
window.NFCDDesignSystem_1d3b67.Badge
window.NFCDDesignSystem_1d3b67.Card
// etc.
```

Los ui_kits destructuran desde ese namespace al inicio de cada archivo.
Los componentes se exponen vía `__ds_scope` → `__ds_ns` al final del bundle.

## Workflow GitHub

- Editar fuentes en `DS-NFCD-GitHub/` → `node _compile.js` → commit en GitHub Desktop
- `DS-NFCD-local/` (carpeta hermana, no en repo) contiene scraps y uploads locales
- `design/` (carpeta hermana) contiene exports por sesión, solo local
