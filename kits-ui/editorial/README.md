# Editorial / PDF UI kit — Ficha de curso

A print-ready institutional document: the programme sheet for a single encuentro.
NFCD's core PDF output (programs, course sheets, calendars) follows this layout.

## Files
- `index.html` — a single A4 page (794×1123px ≈ A4 @96dpi) on warm paper. Open this,
  then use **Save as PDF** to export.

## Anatomy
- **Masthead** — horizontal isologo, right-aligned mono document id.
- **Title block** — wine eyebrow, short tick rule, Amatic display title, serif lead.
- **Meta strip** — three boxed mono/serif fields (sede · duración · fechas).
- **Body** — serif prose + a numbered programme; a wine-accented detail sidebar.
- **Footer** — ink rule with mono institutional line.

## Notes
- Written in plain HTML on the design tokens (no React) so it prints reliably and
  needs no bundle. Reuse the token classes for calendars and multi-page programmes.
