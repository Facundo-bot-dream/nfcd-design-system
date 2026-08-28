# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Recompilar el design system

Cuando cambien archivos en `componentes/`, `kits-ui/`, `tokens/`, `lineamientos/` o `templates/`, regenerar los tres artefactos derivados **y commitearlos en el mismo gesto**:

```bash
node _compile.js
```

Esto regenera:
- `_ds_bundle.js` — todos los componentes React transpilados, listos para el browser sin bundler
- `_ds_manifest.json` — metadata del DS (tokens, fonts, cards, startingPoints, globalCssPaths, themes)
- `_adherence.oxlintrc.json` — reglas oxlint para validar uso correcto de tokens y props

**No editar esos tres archivos a mano** — se sobreescriben en cada compilación.

`_compile.js` resuelve esbuild probando `require('esbuild')` y varias rutas; la que existe en esta máquina es `~/ATANANAHANNA/Software Administrativo - Milenau/node_modules/esbuild`.

## Arquitectura

```
tokens/          ← fuente de verdad visual (CSS custom properties)
  colors.css         primitivos + alias semánticos + chips (+ familias on-ink/on-wine, surface-desk)
  colors.dark.css    overrides [data-theme="dark"]
  typography.css     familias, escala --font-size-*, pesos, tracking
  spacing.css        escala 4px, radios, bordes, sombras, motion
  fonts.css          @font-face declarations (→ recursos/fonts/)

componentes/     ← primitivos React (JSX, export named)
  core/          Button · Eyebrow · Rule
  content/       Card · Tag · Badge · Accordion · MobileCarousel
  forms/         Field

kits-ui/         ← composiciones React (consumen window.NFCDDesignSystem_*)
  website/       Hero · SiteHeader · SiteFooter · EncuentrosGrid · AboutBlock (+ toggle de tema)
  editorial/     index.html A4 (HTML puro, sin React)

templates/       ← carpetas con .dc.html anotado @template, editables en Claude Design
                   carrusel-ig · a4-ficha · email-nfcd-newsletter · social-poster
                   (nombre en inglés a propósito: lo gobierna Claude Design — no castellanizar)
lineamientos/    ← preview cards HTML (Brand, Colors —incl. tema oscuro—, Type, Spacing, Guidelines)
recursos/        ← logos PNG, fuentes, manchones de pintura Roxana
producciones/    ← piezas terminadas (encuentros-2026, novedades, carrusel-ig-encuentros, emails)
listmonk/        ← css + js de páginas públicas de Listmonk (el js se inyecta verbatim al bundle)
```

## Token architecture

Tres capas en `tokens/colors.css`:
1. **Primitivos** — `--wine-600`, `--ink-900`, `--paper-000`, `--sage-500`
2. **Semánticos** — `--brand`, `--surface-page`, `--text-body`, `--border-soft`, `--text-on-ink-*`, `--text-on-wine-*`, `--surface-desk`
3. **Chip tokens** — `--chip-wine-bg/text/line/solid`, ídem ink y sage, `--chip-on-solid`

Los componentes usan **solo semánticos y chip tokens** — nunca primitivos directos (ley de no-salto). Esto permite que `colors.dark.css` reasigne los alias sin tocar los componentes.

`--img-graphite-blend` controla el `mix-blend-mode` de imágenes grafito (`multiply` en claro, `screen` en oscuro).

**Tema oscuro:** se activa con `data-theme="dark"` en `<html>`. Patrón canónico (localStorage + `prefers-color-scheme`, anti-FOUC) en `PATTERNS.md § Activación del tema oscuro`; implementado en `kits-ui/website/index.html`. Las familias `--text-on-ink-*` / `--text-on-wine-*` y `--surface-ink` NO viran: son paneles fijos.

## Namespace del bundle

```js
window.NFCDDesignSystem_1d3b67.Badge
window.NFCDDesignSystem_1d3b67.Card
// etc.
```

Los kits-ui destructuran desde ese namespace al inicio de cada archivo.
Los componentes se exponen vía `__ds_scope` → `__ds_ns` al final del bundle.
El namespace se conserva entre builds (el compilador relee el manifest previo).

## Workflow

- **Fuente única:** este repo. `scraps/` y `uploads/` están gitignorados (solo disco).
- Editar fuentes → `node _compile.js` → commit — todo en el mismo gesto.
- El push a GitHub **no** actualiza Claude Design: correr `/design-sync` desde Claude Code.
- `support.js` / `ds-base.js` por plantilla: los gestiona Claude Design; hay versiones divergentes entre plantillas — no unificar a mano.
- La carpeta `templates/` conserva su nombre en inglés porque el proyecto de Claude Design la lee por ese path (su manifest apunta a `templates/...`). Renombrarla rompe las plantillas en la nube.
