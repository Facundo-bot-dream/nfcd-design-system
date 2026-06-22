# NFCD — Naturaleza de la Fuerza · Design System

**Naturaleza de la Fuerza en el Cuerpo y la Danza (NFCD)** is a system of practice and
research that engages the events of the body, forces, and dance as fields of access to
knowledge — toward a planetary consciousness for human development. Directed by **Roxana
Galand**, with its first home in **Campo Arroyo del Medio, Bariloche, Patagonia
(Argentina)**.

NFCD produces:
- **Institutional PDFs** — programmes for encuentros, course sheets (*fichas de curso*), calendars.
- **Social-media material** — posts and posters in various formats.
- **Pedagogical material** — books, ebooks, a blog.
- **Website** — in HTML.

This design system gives those surfaces one coherent voice: the hand-drawn graphite
imagery of the logo, a restrained ink-and-paper palette with a single wine accent, and a
three-typeface system (hand-drawn display · classical serif · typewriter mono).

## Sources provided
- **Local codebase:** `design system NFCD/` (mounted, read-only) — contained brand
  **logos** (`nfcd_logos/`) and **fonts** only (Amatic SC, Book Antiqua, Letter Gothic
  Std). No product screens, website code, or written brand guide were included.
- All logos and fonts have been copied into `assets/`. No Figma or GitHub source was given.

> Because there were **no existing product designs** to recreate, the website and editorial
> UI kits are built directly from the brand foundations (logo, type, colour), not copied
> from prior screens.

---

## CONTENT FUNDAMENTALS

**Language.** Primary language is **Spanish (Río de la Plata / Argentine)**. Voseo is
natural for direct address ("contanos", "inscribite"), though most institutional copy is
descriptive rather than imperative.

**Voice.** Poetic-essayistic and embodied, not corporate. Copy treats the body as a site
of knowledge: it states ideas as events ("La danza no ilustra una idea: *la produce*").
Sentences are unhurried, often with a colon or em-dash turning the thought. It favours
concrete somatic nouns — *hueso, peso, aliento, gesto, vuelo, fuerza, paisaje* — over
abstractions.

**Person.** Mostly third-person / impersonal for institutional text ("el sistema",
"la práctica"); first-person plural ("trabajamos", "abrimos") for invitations. Avoid
second-person marketing ("you'll love…"). The director is named: *Roxana Galand*.

**Casing.** Display titles and the wordmark are **UPPERCASE**, widely letter-spaced.
Eyebrows / labels / metadata are **UPPERCASE mono**, even more tracked. Body prose is
sentence case. Avoid Title Case.

**Punctuation & rhythm.** Em-dashes and colons carry the rhythm. Mid-sentence emphasis is
set in *italic serif* (Letter Gothic italic for mono). Metadata uses ` · ` (middle dot)
as a separator: "12 · 19 · 26 abril", "Bariloche · Patagonia".

**Emoji.** **None.** The brand never uses emoji. No exclamation-heavy hype.

**Vibe.** Quiet, grave, organic, scholarly-artistic. Think anatomical plate + dance studio
+ Patagonian field notebook. Examples in use:
- Eyebrow: `ENCUENTRO · OTOÑO 2026`
- Title: `EL CUERPO QUE ESCUCHA`
- Lead: "Tres encuentros de práctica somática y danza en contacto con el paisaje del Campo."
- Label: `SEDE · Campo Arroyo del Medio` / `DURACIÓN · 3 encuentros · 12 h`

---

## VISUAL FOUNDATIONS

**Logo / motif.** The isologo is a **graphite (pencil) drawing of a human ribcage that
transforms into a butterfly wing** — bone and flight, structure and metamorphosis. It is
rendered in **black & white** with soft smudged shading on a white ground. This drawing is
the brand's single most important visual asset; all imagery derives from this register.
Three lockups exist: v1 vertical (mark above wordmark), v2 horizontal (mark left of
wordmark), v3 portrait. Each in colour-on-white, black, and white variants. The wordmark
sets `NATURALEZA DE LA FUERZA / EN EL CUERPO Y LA DANZA` in a thin, very wide-tracked
uppercase, in the brand wine.

**Colour.** Restrained and warm. One signature accent — **wine `#a7274c`** (sampled from
the wordmark) — over a **warm graphite ink** scale (near-black `#1a1614`, never pure
black) and a **warm paper** scale (bone white `#fbf9f5`, not stark white). A muted
**sage** is available, harmonised in oklch, reserved for *naturaleza* / planetary
contexts. Colour is used sparingly: most surfaces are ink on paper, with wine as a single
deliberate stroke. Imagery is **monochrome graphite** — never tinted.

**Type.** Three provided typefaces, each with a clear role:
- **Amatic SC** (`--font-display`) — hand-drawn, tall, condensed; echoes the pencil logo.
  Posters, hero titles, expressive social. Always uppercase, lightly tracked.
- **Book Antiqua** (`--font-serif`) — humanist Palatino-lineage serif for **reading**:
  books, ebooks, blog, programme prose. Sentence case, line-height ~1.55.
- **Letter Gothic Std** (`--font-mono`) — typewriter monospace for **labels, metadata,
  captions** and the institutional voice. Uppercase, tracked 0.16–0.22em.

**Spacing & layout.** 4px base scale, generous paper margins. Reading column ~68ch;
containers max ~1200px. Layouts are calm and grid-based; documents read like printed
matter (mastheads, meta strips, footers with an ink rule).

**Backgrounds.** Warm paper, occasionally an ink (`#1a1614`) ground for footers / inverse
panels. **No gradients.** Imagery sits on paper via `mix-blend-mode: multiply` so the
pencil tone melts into the ground. No repeating patterns or textures beyond the drawings.

**Corners & borders.** Near-square — radii are 0–6px; **pills (`999px`) are reserved for
tags only**. Borders are hairline ink (`--border-hair/soft`); section breaks use a 1–2px
ink rule. The signature divider is a short 48px "tick" (often wine) echoing the rule under
the wordmark.

**Shadows / elevation.** Faint and warm — "paper lifting off paper" (`0 2px 8px rgba(26,
22,20,.08)`). Most surfaces are flat with a hairline border; shadow is rare.

**Cards.** Warm paper (`--surface-card`), hairline border, near-square corner, usually no
shadow. Optional **3px wine top-accent** for emphasis. No coloured-left-border cards.

**Hover / press.** Quiet. Solid buttons darken wine (`600→700`); outline buttons **invert**
to ink ground; links deepen and gain an underline. No scaling, no bounce. Press deepens
one more step (`→800`). Focus shows a soft wine ring (`0 0 0 3px --wine-050`).

**Motion.** Slow and organic — `--dur-base 240ms`, `--ease-quiet`. Fades and gentle
position shifts; **never** bounce or spring. Decorative loops are avoided.

**Transparency / blur.** Minimal. Transparency appears only as logo PNG alpha and the
multiply blend of imagery on paper. No glassmorphism / backdrop blur.

**Imagery vibe.** Monochrome graphite, warm, hand-made, anatomical & botanical. Bone,
breath, wing, body, Patagonian field. Never glossy, never colour-graded, never stock-photo.

---

## ICONOGRAPHY

The brand ships **no icon set, icon font, or SVG sprite** — none was present in the source
material, and the visual language is hand-drawn rather than iconographic. Accordingly:

- **Primary "iconography" is typographic & drawn.** The graphite ribcage-butterfly motif
  and the short wine **tick rule** do the symbolic work. Numbered programme items use mono
  numerals (`01 · 02 · 03`) rather than bullets/icons.
- **Separators** use the middle dot `·` (U+00B7) in mono — the brand's one consistent
  "glyph".
- **Emoji are never used.**
- **If a UI genuinely needs line icons** (e.g. a future web app), use a **thin, single-
  weight, rounded-join stroke set that matches the pencil line** — **[Lucide](https://lucide.dev)**
  (1.5–2px stroke) is the recommended CDN substitute. ⚠️ *This is a substitution, not a
  brand asset — confirm before relying on it.* Keep icons ink-coloured and sparse; never
  fill them with wine except for a single active state.

Logos live in `assets/logos/` (PNG). The editable vector source is
`design system NFCD/nfcd_logos/nfcd_brand_logos.ai` (Illustrator, in the mounted folder —
not copied in).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (consumers link this); `@import`s the token layers.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for download/Claude Code.

**`tokens/`** — `fonts.css` (3 `@font-face` families), `colors.css` (wine / ink / paper /
sage + semantic aliases), `typography.css` (families, scale, tracking), `spacing.css`
(spacing, radii, borders, shadows, motion).

**`assets/`** — `logos/` (isologo v1–v3 in colour/black/white + alpha motif renders),
`fonts/` (Amatic SC, Book Antiqua, Letter Gothic Std).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the
Design System tab.

**`components/`** (namespace `window.NFCDDesignSystem_1d3b67`)
- `core/` — **Button**, **Eyebrow**, **Rule**
- `content/` — **Card**, **Tag**, **Badge**
- `forms/` — **Field**

**`ui_kits/`**
- `website/` — institutional home page (header, hero, encuentros, about, footer).
- `editorial/` — A4 *ficha de curso* / programme PDF.

**`templates/`**
- `carrusel-ig/` — carruseles 1080×1350 para Instagram. Archivos `.dc.html` editables + `exports/PNG/` con imágenes listas para subir.
- `a4-ficha/` — fichas de curso y programas en A4. Archivos `.dc.html` + exports PDF.
- `email-listmonk/` — newsletters HTML para Listmonk (table-based, estilo de marca). Copiar y editar zonas marcadas.
- `post-ig/` — posts sueltos IG (no carrusel).
- `social-poster/` — posters sociales 1080×1080.

**`encuentros-2026/`** — piezas de comunicación Encuentros de Profundización 2026.

**`novedades/`** — templates de novedades institucionales (editorial, email, wordpress, base).

**`scraps/`** — experimentos y descartes. No usar como referencia.

**`uploads/`** — documentos de referencia subidos (PDFs, capturas). Solo lectura.

---

## Convención de nombres — archivos de trabajo

```
[superficie]_[descripción]_[AAAA-MM].dc.html

ig_carrusel-encuentros-invierno_2026-07.dc.html
email_encuentros-profundizacion_2026-07.html
a4_ficha-profundizacion_2026-07.dc.html
```

## Archivos del sistema — no mover ni renombrar

`styles.css` · `SKILL.md` · `_ds_bundle.js` · `_ds_manifest.json` · `_adherence.oxlintrc.json` · `support.js` · `listmonk_public_pages_NFCD.css` · `listmonk_public_es.js`

**Listmonk · páginas públicas** (raíz)
- `listmonk_public_pages_NFCD.css` — estilo de marca para las páginas de baja/suscripción.
- `listmonk_public_es.js` — traducción al español de esas páginas.

### Substitutions & caveats
- **Fonts:** Amatic SC is OFL (open). **Book Antiqua** and **Letter Gothic Std** are
  commercial fonts supplied by the brand — included here for fidelity; confirm web-embedding
  licensing before public deployment.
- The wordmark uses a thin geometric face that is **not** one of the three working fonts;
  in HTML, always use the **logo image** for the wordmark rather than setting it as type.
