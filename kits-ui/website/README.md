# Website UI kit — Sitio institucional NFCD

A high-fidelity recreation of the NFCD institutional home page, composed from the
design-system components. The home is the canonical view; it demonstrates the brand
applied to the HTML website surface.

## Files
- `index.html` — assembles the full page and mounts it. Open this.
- `SiteHeader.jsx` — sticky top bar: horizontal isologo + mono nav + wine CTA.
- `Hero.jsx` — eyebrow + Amatic display title + serif lead + the graphite motif.
- `EncuentrosGrid.jsx` — three programme cards (`Card` + `Tag` + `Badge` + `Button`).
- `AboutBlock.jsx` — the practice / Roxana Galand, with the vertical isologo.
- `SiteFooter.jsx` — ink-ground footer: white logo, sede, dirección, boletín.

## Notes
- Components are read from `window.NFCDDesignSystem_1d3b67` (the compiled bundle).
- Each `.jsx` is loaded as a `text/babel` script and exposes itself on `window`
  (no `import`/`export` — Babel-standalone runs them as classic scripts).
- Imagery is the brand's graphite drawings; `mix-blend-mode: multiply` lets the
  pencil sit on warm paper. There were no pre-existing product screens to copy —
  this kit is built directly from the brand foundations.
