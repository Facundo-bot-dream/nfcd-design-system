---
name: nfcd-design
description: Use this skill to generate well-branded interfaces and assets for NFCD (Naturaleza de la Fuerza en el Cuerpo y la Danza), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- `readme.md` — full brand guide: content fundamentals, visual foundations, iconography, manifest.
- `styles.css` — link this one file to get all fonts + tokens. It `@import`s `tokens/`.
- `tokens/` — colors (wine `#a7274c`, warm ink, warm paper, sage), typography, spacing, fonts.
- `assets/logos/` — the graphite ribcage→butterfly isologo (v1–v3, colour/black/white) + motif renders.
- `assets/fonts/` — Amatic SC (display; open source). Book Antiqua + Letter Gothic Std are licensed — load via system or CSS @font-face in production.
- `assets/brand/marks/` — Roxana's acrylic mark crops (grey-waves, orange-strokes, red-drop, red-swirl, yellow-splash). Use as monochrome graphite overlays only.
- `components/` — React primitives (Button, Eyebrow, Rule, Card, Tag, Badge, Field).
- `ui_kits/website/` — Hero, SiteHeader, SiteFooter, EncuentrosGrid, AboutBlock (React + index.html).
- `ui_kits/editorial/` — A4 editorial layout base (index.html).
- `templates/` — master working files per surface (see below).

## Templates — surfaces disponibles

### Carrusel IG (`templates/carrusel-ig/`)
- **Dimensión canvas:** 1080 × 1350 px por slide
- **Archivo master:** `CarruselIG_encuentros-invierno_2026-07.dc.html` (editable en Claude Design)
- **Versión print:** `CarruselIG_encuentros-invierno-print_2026-07.html` (standalone para Canva/impresión)
- **Export PNG:** solicitar slide a slide como HTML screenshot a 1080×1350. Nombrar: `01-Titulo.png`, `02-Subtitulo.png`, etc.
- **Convención de nombre:** `CarruselIG_[descripcion]_[AAAA-MM].dc.html`

### A4 / Ficha editorial (`templates/a4-ficha/`)
- **Dimensión canvas:** A4 (794 × 1123 px @ 96dpi, o 210 × 297 mm para print)
- **Archivo master:** `A4_encuentro-profundizacion_2026-07.dc.html`
- **Export:** descargar como PDF desde Claude Design (File → Download → PDF)
- **Convención de nombre:** `A4_[descripcion]_[AAAA-MM].dc.html`

### Email / Newsletter Listmonk (`templates/email-listmonk/`)
- **Dos outputs distintos — siempre:**
  - `.dc.html` → template editable en Claude Design (usa Book Antiqua + Letter Gothic reales del DS)
  - `.html` raw → el que va a Listmonk (usa Palatino/Courier como fallback, inline styles, 600px)
- **Diseño:** en Claude Design usando el template `Email NFCD · Newsletter`
- **Export para Listmonk:** pedirle a Design "dame el raw HTML para Listmonk" → pegar en Listmonk con Format = Raw HTML
- **Ancho máximo:** 600 px, inline styles obligatorios, sin web fonts externas
- **Variable baja:** `{{ UnsubscribeURL }}` — preservar siempre
- **Archivo template Design:** `email-nfcd-newsletter/EmailNFCDNewsletter.dc.html`
- **Archivo modelo HTML:** `Email_NFCD_modelo.html`
- **Convención de nombre:** `Email_[descripcion]_[AAAA-MM].html` (raw para Listmonk)

### Post IG suelto (`templates/post-ig-encuentros/`)
- **Dimensión:** 1080 × 1080 px (cuadrado)
- **Archivo:** `PostIgEncuentros.dc.html`

### Web — componentes y páginas (`ui_kits/website/`)
- **Stack:** HTML standalone o React JSX para Gutenberg (WordPress)
- **Ancho máximo contenido:** 1200 px, responsive mobile-first
- **Componentes disponibles:** `Hero.jsx`, `SiteHeader.jsx`, `SiteFooter.jsx`, `EncuentrosGrid.jsx`, `AboutBlock.jsx` + `index.html` como página de referencia
- **Fuentes en web:** cargar Amatic SC vía Google Fonts; Book Antiqua + Letter Gothic via `@font-face` con los archivos de `assets/fonts/`
- **Flujo:**
  1. Diseñar componente o página en Claude Design (`.dc.html`) → ver cómo queda
  2. Pedir a Cowork (este espacio) que genere el HTML/JSX limpio para WordPress
  3. Guardar `.dc.html` en `design/web/` (local), el `.html` o `.jsx` final en `ui_kits/website/`
- **Para WordPress + Gutenberg:** el output es un bloque PHP con `register_block_type` + `style.css` que importa los tokens. Pedir explícitamente "bloque Gutenberg" o "HTML para tema a mano".
- **Convención de nombre:** `web_[descripcion]_[AAAA-MM].dc.html` (archivo Design) / `[ComponentName].jsx` (producción)

### Social poster (`templates/social-poster/`)
- **Dimensión:** 1080 × 1080 px
- **Archivo:** `SocialPoster.dc.html`

## Convención de nombres — siempre aplicar
```
[superficie]_[descripcion-kebab]_[AAAA-MM].[ext]

Ejemplos:
CarruselIG_encuentros-invierno_2026-07.dc.html
A4_ficha-profundizacion_2026-07.dc.html
Email_encuentros-julio_2026-07.html
PostIG_charla-abierta_2026-08.dc.html
```

## Flujo de export PNG (carrusel IG)
1. Abrir el `.dc.html` en Claude Design
2. Por cada slide: solicitar "exportá el slide N como PNG 1080×1350"
3. Claude Design genera la imagen — descargar y nombrar `NN-Titulo.png`
4. Los PNG van a `templates/carrusel-ig/exports/PNG/` (carpeta local, no sube a GitHub)

## Workflow GitHub
- `DS-NFCD-GitHub/` → lo que sube al repo (tokens, components, guidelines, templates master, ui_kits)
- `DS-NFCD-local/` → DS completo con scraps y uploads (solo local)
- `design/` → archivos de trabajo y exports por sesión (solo local)
- Cuando hay cambios listos: copiar archivos modificados a `DS-NFCD-GitHub/` → commit → push en GitHub Desktop

## Non-negotiables
- Tres fuentes, tres roles: Amatic SC = display uppercase; Book Antiqua = cuerpo serif; Letter Gothic Std = mono uppercase tracked para labels.
- Paleta tinta-sobre-papel con **un solo** acento wine `#a7274c`. Imágenes en grafito monocromático. Sin gradientes. Sin emoji.
- Esquinas near-square (pills solo para tags). Bordes hairline. Sombras suaves. Movimiento quieto, sin bounce.
- El wordmark siempre como imagen logo — nunca como texto tipografiado.
- Idioma: español rioplatense (voseo). Voz poético-ensayística, no corporativa.
