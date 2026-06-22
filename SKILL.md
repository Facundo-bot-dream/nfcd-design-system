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
- `assets/fonts/` — Amatic SC (display), Book Antiqua (serif body), Letter Gothic Std (mono labels).
- `components/` — React primitives (Button, Eyebrow, Rule, Card, Tag, Badge, Field).
- `ui_kits/website/` and `ui_kits/editorial/` — full surfaces to copy from.
- `templates/social-poster/` — square social announcement.

## Non-negotiables
- Three fonts, three roles: Amatic SC = uppercase display; Book Antiqua = serif reading; Letter Gothic Std = tracked uppercase mono labels.
- Palette is ink-on-paper with **one** wine accent. Imagery is monochrome graphite. No gradients, no emoji.
- Near-square corners (pills only for tags). Hairline ink borders. Faint shadows. Quiet motion, no bounce.
- For the wordmark, use the logo image — do not set it as type.
