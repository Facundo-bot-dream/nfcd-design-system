# NFCD — Naturaleza de la Fuerza · Design System

**Naturaleza de la Fuerza en el Cuerpo y la Danza (NFCD)** es un sistema de práctica e investigación que trabaja los eventos del cuerpo, las fuerzas y la danza como campos de acceso al conocimiento — hacia una conciencia planetaria para el desarrollo humano. Dirigido por **Roxana Galand**, con sede en **Campo Arroyo del Medio, Bariloche, Patagonia (Argentina)**.

NFCD produce:

- **PDFs institucionales** — programas de encuentros, fichas de curso, calendarios.
- **Material para redes sociales** — posts, flyers y carruseles en distintos formatos.
- **Material pedagógico** — libros, ebooks, blog.
- **Sitio web** — en HTML.

Este design system le da a todas esas superficies una voz coherente: la imagen de grafito del logo, una paleta austera de tinta sobre papel con un único acento wine, y un sistema de tres tipografías (display manuscrita · serif clásica · mono de máquina).

## Fuentes provistas

- **Base local:** `design system NFCD/` (montada, solo lectura) — incluye **logos** (`nfcd_logos/`) y **fuentes** únicamente (Amatic SC, Book Antiqua, Letter Gothic Std). No se incluyeron pantallas de producto, código del sitio ni guía de marca escrita.
- Todos los logos y fuentes fueron copiados a `recursos/`. No se proveyó fuente en Figma ni GitHub.

> Dado que **no existían diseños de producto previos** que recrear, los UI kits web y editorial se construyeron directamente desde las bases de marca (logo, tipografía, color), no copiados de pantallas anteriores.

---

## FUNDAMENTOS DE CONTENIDO

**Idioma.** El idioma principal es el **español del Río de la Plata / argentino**. El voseo es natural para el trato directo ("contanos", "inscribite"), aunque la mayoría de la copia institucional es descriptiva antes que imperativa.

**Voz.** Poético-ensayística y encarnada, no corporativa. La copia trata al cuerpo como sitio de conocimiento: enuncia ideas como eventos ("La danza no ilustra una idea: *la produce*"). Las frases son pausadas, a menudo con dos puntos o raya que giran el pensamiento. Favorece sustantivos somáticos concretos — *hueso, peso, aliento, gesto, vuelo, fuerza, paisaje* — por sobre abstracciones.

**Persona.** Mayormente tercera persona / impersonal para el texto institucional ("el sistema", "la práctica"); primera persona del plural ("trabajamos", "abrimos") para las invitaciones. Evitar segunda persona de marketing ("vas a amar…"). La directora se nombra: *Roxana Galand*.

**Casing.** Los títulos display y el wordmark van en **MAYÚSCULAS**, con espaciado amplio. Las cejas / labels / metadatos van en **MONO MAYÚSCULAS**, aún más trackeadas. La prosa de cuerpo va en minúsculas con mayúscula inicial. Evitar Title Case.

**Puntuación y ritmo.** Las rayas y los dos puntos marcan el ritmo. El énfasis en mitad de frase se da en *itálica serif* (Letter Gothic italic para mono). Los metadatos usan `·` (punto medio) como separador: "12 · 19 · 26 abril", "Bariloche · Patagonia".

**Emoji.** **Ninguno.** La marca nunca usa emoji. Sin hype de exclamaciones.

**Tono.** Quieto, grave, orgánico, académico-artístico. Pensar en lámina anatómica + estudio de danza + cuaderno de campo patagónico. Ejemplos en uso:

- Ceja: `ENCUENTRO · OTOÑO 2026`
- Título: `EL CUERPO QUE ESCUCHA`
- Copete: "Tres encuentros de práctica somática y danza en contacto con el paisaje del Campo."
- Label: `SEDE · Campo Arroyo del Medio` / `DURACIÓN · 3 encuentros · 12 h`

---

## FUNDAMENTOS VISUALES

**Logo / motivo.** El isologo es un **dibujo a grafito (lápiz) de una caja torácica humana que se transforma en ala de mariposa** — hueso y vuelo, estructura y metamorfosis. Se renderiza en **blanco y negro** con sombreado suave sobre fondo blanco. Este dibujo es el activo visual más importante de la marca; toda la imaginería deriva de este registro. Existen tres versiones: v1 vertical (motivo sobre wordmark), v2 horizontal (motivo a la izquierda del wordmark), v3 retrato. Cada una en variante color-sobre-blanco, negro y blanco. El wordmark compone `NATURALEZA DE LA FUERZA / EN EL CUERPO Y LA DANZA` en una familia fina, muy trackeada, en mayúsculas, en wine.

**Color.** Austero y cálido. Un único acento de firma — **wine `#a7274c`** (muestreado del wordmark) — sobre una escala de **grafito-tinta cálido** (near-black `#1a1614`, nunca negro puro) y una escala de **papel cálido** (blanco hueso `#fbf9f5`, no blanco frío). Un **sage-teal** de soporte, harmonizado en oklch (anclaje `#1a9496`), reservado para contextos de *naturaleza* / planeta / agua. El color se usa con economía: la mayoría de las superficies son tinta sobre papel, con wine como única pincelada deliberada. La imaginería es **grafito monocromático** — nunca teñida.

**Tipografía.** Tres familias, cada una con rol claro:

- **Amatic SC** (`--font-display`) — manuscrita, alta, condensada; hace eco con el logo a lápiz. Posters, títulos hero, social expresivo. Siempre mayúsculas, levemente trackeada.
- **Book Antiqua** (`--font-serif`) — serif humanista (linaje Palatino) para **lectura**: libros, ebooks, blog, prosa de programa. Minúsculas con mayúscula inicial, interlineado \~1.55.
- **Letter Gothic Std** (`--font-mono`) — mono de máquina de escribir para **labels, metadatos, epígrafes** y la voz institucional. Mayúsculas, tracking 0.16–0.22em.

**Espaciado y layout.** Escala base de 4px, márgenes de papel generosos. Columna de lectura \~68ch; contenedores máx \~1200px. Los layouts son calmos y en grilla; los documentos se leen como material impreso (mastheads, franjas de meta, pies con regla de tinta).

**Fondos.** Papel cálido; ocasionalmente fondo tinta (`#1a1614`) para footers / paneles inversos. **Sin gradientes.** Las imágenes se apoyan sobre papel vía `mix-blend-mode: multiply` para que el tono a lápiz se funda con el fondo. Sin patrones repetidos ni texturas más allá de los dibujos.

**Esquinas y bordes.** Near-square — radios 0–6px; **las pills (`999px`) son solo para tags**. Los bordes son hairline tinta (`--border-hair/soft`); los quiebres de sección usan una regla de tinta de 1–2px. El separador de firma es un "tick" de 48px (a menudo en wine) que hace eco con la regla bajo el wordmark.

**Sombras / elevación.** Leves y cálidas — "papel levantándose del papel" (`0 2px 8px rgba(26,22,20,.08)`). La mayoría de las superficies son planas con borde hairline; la sombra es excepcional.

**Cards.** Papel cálido (`--surface-card`), borde hairline, esquina near-square, generalmente sin sombra. **Acento top de 3px en wine** opcional para énfasis. Sin cards de borde izquierdo coloreado.

**Hover / press.** Quietos. Los botones sólidos oscurecen el wine (`600→700`); los botones outline **invierten** a fondo tinta; los links se profundizan y ganan subrayado. Sin escala, sin rebote. El press baja un paso más (`→800`). El foco muestra un anillo suave wine (`0 0 0 3px --wine-050`).

**Movimiento.** Lento y orgánico — `--dur-base 240ms`, `--ease-quiet`. Fundidos y desplazamientos leves; **nunca** rebote ni spring. Se evitan los loops decorativos.

**Transparencia / blur.** Mínima. La transparencia aparece solo como alpha del PNG del logo y el blend multiply de la imaginería sobre papel. Sin glassmorphism / backdrop blur.

**Vibe de imaginería.** Grafito monocromático, cálido, hecho a mano, anatómico y botánico. Hueso, aliento, ala, cuerpo, campo patagónico. Nunca brilloso, nunca con color grade, nunca stock photo.

---

## ICONOGRAFÍA

La marca **no incluye set de íconos, fuente de íconos ni sprite SVG** — no había nada de eso en el material fuente, y el lenguaje visual es dibujado, no icónico. Por lo tanto:

- **La "iconografía" primaria es tipográfica y dibujada.** El motivo de grafito costilla-mariposa y la **regla tick** wine hacen el trabajo simbólico. Los ítems de programa numerados usan numerales mono (`01 · 02 · 03`) en lugar de bullets/íconos.
- **Los separadores** usan el punto medio `·` (U+00B7) en mono — el único "glifo" consistente de la marca.
- **Los emoji nunca se usan.**
- **Si una UI genuinamente necesita íconos de línea** (p. ej. una futura app web), usar un **set de trazo fino, peso único, unión redondeada que coincida con la línea a lápiz** — **[Lucide](https://lucide.dev)** (trazo 1.5–2px) es el sustituto CDN recomendado. ⚠️ *Esto es una sustitución, no un activo de marca — confirmar antes de usarlo.* Mantener los íconos en color tinta y escasos; nunca rellenarlos en wine salvo para un único estado activo.

Los logos están en `recursos/logos/` (PNG). La fuente vectorial editable es `design system NFCD/nfcd_logos/nfcd_brand_logos.ai` (Illustrator, en la carpeta montada — no copiada).

---

## ÍNDICE / MANIFIESTO

**Raíz**

- `styles.css` — entrada global (los consumidores enlazan esto); `@import`a las capas de tokens.
- `README.md` — esta guía.
- `SKILL.md` — wrapper para Claude Code / pipeline de producción.
- `CLAUDE.md` · `PATTERNS.md` · `BACKLOG.md` · `github.md` — operación y estado.
- `_compile.js` → genera `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` (no editar a mano).
- `support.js` · `thumbnail.html` — andamiaje de Claude Design.

**`tokens/`** — fuente de verdad visual: `fonts.css` (3 familias `@font-face`), `colors.css` (wine / ink / paper / sage-teal + alias semánticos + chips), `colors.dark.css` (**tema oscuro**: reasigna solo alias bajo `[data-theme="dark"]`), `typography.css` (familias, escala `--font-size-*`, tracking), `spacing.css` (espaciado, radios, bordes, sombras, movimiento).

**`recursos/`** — `logos/` (isologo v1–v3 en color/negro/blanco + renders del motivo con alpha), `fonts/` (Amatic SC; Book Antiqua y Letter Gothic Std solo en disco, excluidas del repo por licencia), `brand/` (manchones e intervenciones de Roxana).

**`lineamientos/`** — tarjetas especimen mostradas en la pestaña Design System (grupos Brand, Colors —incluye **Tema oscuro**—, Type, Spacing, Components, Guidelines) + demos de chips.

**`componentes/`** (namespace `window.NFCDDesignSystem_1d3b67`)

- `core/` — **Button**, **Eyebrow**, **Rule**
- `content/` — **Card**, **Tag**, **Badge**, **Accordion**, **MobileCarousel**
- `forms/` — **Field**

**`kits-ui/`**

- `website/` — página institucional (header, hero, encuentros, about, footer). Trae el patrón de activación del tema (toggle + `prefers-color-scheme`).
- `editorial/` — ficha de curso / programa A4.

**`plantillas/`** — carpetas con un `.dc.html` anotado `@template` (editables inline en Design)

- `carrusel-ig/` — carrusel 1080×1350 para Instagram (9 piezas).
- `a4-ficha/` — fichas de curso y programas A4.
- `email-nfcd-newsletter/` — newsletter HTML para Listmonk (+ `referencia-listmonk-raw.html`).
- `social-poster/` — poster cuadrado 1080×1080 para anuncios.
- *Pendientes (documentadas en prompts/, aún sin plantilla):* `flyer-ig/`, `web-pagina/`, `web-carrusel/`.

**`producciones/`** — piezas terminadas, fuera de la matriz: `encuentros-2026/`, `novedades/`, `carrusel-ig-encuentros/` (HTML + exports PNG), `emails/`.

**`listmonk/`** — `listmonk_public_pages_nfcd.css` (estilo de marca para páginas de baja/suscripción) y `listmonk_public_es.js` (traducción al español; se inyecta verbatim al bundle).

**`prompts/`** — pipeline de comunicación (1 brief → N superficies). **`conocimiento/`** — saberes destilados del sistema.

**`scraps/`** (descartes) y **`uploads/`** (referencia) — solo disco local, excluidos del repo.

---

## Tema oscuro

El sistema tiene tema claro (default, `:root`) y oscuro (`tokens/colors.dark.css`, activado con `data-theme="dark"` en `<html>`). La ley de no-salto hace que los componentes viren solos. Activación canónica (elección guardada > preferencia del SO): ver **PATTERNS.md § Activación del tema oscuro**. Las piezas de lienzo fijo (carruseles, A4, posters) se exportan siempre en claro.

---

## Convención de nombres — archivos de trabajo

```
[superficie]_[descripción]_[AAAA-MM].dc.html

ig_carrusel-encuentros-invierno_2026-07.dc.html
email_encuentros-profundizacion_2026-07.html
a4_ficha-profundizacion_2026-07.dc.html
flyer_encuentros-invierno_2026-07.dc.html
```

## Archivos del sistema — no mover ni renombrar

`styles.css` · `SKILL.md` · `_ds_bundle.js` · `_ds_manifest.json` · `_adherence.oxlintrc.json` · `support.js` · `listmonk/`

Cada carpeta de `plantillas/` lleva su copia de `support.js` y `ds-base.js` (runtime de Claude Design). Existen dos versiones divergentes de cada uno entre plantillas — los gestiona Claude Design, no unificarlos a mano.

### Sustituciones y aclaraciones

- **Fuentes:** Amatic SC es OFL (abierta). **Book Antiqua** y **Letter Gothic Std** son fuentes comerciales provistas por la marca — incluidas por fidelidad; confirmar licencia de embedding web antes del despliegue público.
- El wordmark usa una familia geométrica fina que **no** es ninguna de las tres fuentes de trabajo; en HTML, usar siempre la **imagen del logo** para el wordmark, nunca tipografiado.
