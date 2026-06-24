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
- `tokens/` — colores (wine `#a7274c`, ink cálido, paper cálido, sage-teal `#1a9496`), tipografía, espaciado, fuentes.
- `assets/logos/` — el isologo grafito costilla→mariposa (v1–v3, color/negro/blanco) + renders del motivo.
- `assets/fonts/` — Amatic SC (display; open source). Book Antiqua + Letter Gothic Std are licensed — load via system or CSS @font-face in production.
- `assets/brand/marks/` — Roxana's acrylic mark crops (grey-waves, orange-strokes, red-drop, red-swirl, yellow-splash). Use as monochrome graphite overlays only.
- `components/` — React primitives (Button, Eyebrow, Rule, Card, Tag, Badge, Field).
- `ui_kits/website/` — Hero, SiteHeader, SiteFooter, EncuentrosGrid, AboutBlock (React + index.html).
- `ui_kits/editorial/` — A4 editorial layout base (index.html).
- `templates/` — master working files per surface (see below).

## Templates — 6 superficies del pipeline

**Principio clave:** todos los templates son `.dc.html` — editables inline en Claude Design.
Para editar: abrir Design → File → Open → seleccionar el `.dc.html` → modificar → re-exportar.

### 01 · Flyer IG (`templates/flyer-ig/`)
- **Dimensión:** 1080 × 1350 px · una sola imagen
- **Uso:** WhatsApp, Stories, difusión rápida
- **Archivo:** `flyer-ig/Flyer_[descripcion]_[AAAA-MM].dc.html`
- **Export:** PNG vía SVG foreignObject + base64 (ver flujo export PNG abajo)
- **Diseño en:** Claude Design

### 02 · Carrusel IG (`templates/carrusel-ig/`)
- **Dimensión:** 1080 × 1350 px · N slides (variable según el proyecto)
- **Vista de trabajo:** slides en FILA HORIZONTAL con scroll lateral (ver conexión de fondos panorámicos)
- **Export PNG:** slide a slide. Nombrar: `01-Titulo.png`, `02-[tema].png`, etc.
- **Archivo master:** `carrusel-ig/CarruselIG_[descripcion]_[AAAA-MM].dc.html`
- **Convención de nombre:** `CarruselIG_[descripcion]_[AAAA-MM].dc.html`

### 03 · Email Newsletter (`templates/email-nfcd-newsletter/`)
- **Dos outputs — siempre:**
  - `.dc.html` → editable en Claude Design (fuentes reales del DS)
  - `.html` raw → el que va a Listmonk (Palatino/Courier fallback, inline styles, 600px)
- **Diseño en:** Claude Design usando el template `Email NFCD · Newsletter`
- **Export para Listmonk:** pedirle a Design "dame el raw HTML para Listmonk" → Format = Raw HTML
- **Variable baja:** `{{ UnsubscribeURL }}` — preservar siempre
- **Archivo template:** `email-nfcd-newsletter/EmailNFCDNewsletter.dc.html`

### 04 · A4 Ficha editorial (`templates/a4-ficha/`)
- **Dimensión:** A4 (794 × 1123 px @ 96dpi / 210 × 297 mm print)
- **Uso:** fichas de curso, programas, documentos institucionales imprimibles
- **Export:** PDF desde Claude Design (File → Download → PDF)
- **Archivo:** `a4-ficha/A4_[descripcion]_[AAAA-MM].dc.html`

### 05 · Web · Página encuentro (`templates/web-pagina/`)
- **Output:** HTML para bloque Gutenberg "HTML personalizado" + CSS separado para tema
- **Responsive:** mobile-first 375 / 768 / 1200 px
- **Clases:** prefijo `.nfcd-` para no pisar estilos del tema
- **Diseño en:** Claude Design para wireframe/look → Cowork para código producción
- **Archivo Design:** `web-pagina/web_[descripcion]_[AAAA-MM].dc.html`

### 06 · Web · Slider home (`templates/web-carrusel/`)
- **Output:** HTML + Swiper.js para el homepage de WordPress
- **Muestra:** encuentros disponibles en carrusel horizontal responsive
- **Sin plugins pesados** — código limpio con tokens del DS
- **Diseño en:** Claude Design → Cowork para código producción

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
