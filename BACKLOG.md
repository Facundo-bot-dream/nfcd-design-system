# BACKLOG — Design System NFCD

> Lo que está pendiente. Una sola lista. Si no está acá, no existe como pendiente.
> Actualizado: 2026-08-02 (saneamiento integral: legibilidad + escala tipográfica + reorganización)

---

## 🔴 LO GRANDE

**1 · Sincronizar Claude Design (la nube) con el estado actual.**
El disco quedó saneado el 2026-08-02 (tema oscuro usable, escala adoptada, carpetas en español). El **proyecto de Claude Design quedó viejo** — cuando vas a *generar* una pieza, usa lo anterior.
- Se hace con `/design-sync` **real** desde **Claude Code** (requiere `/design-login` antes).
- ⚠️ El sync saltea `plantillas/` — pedir explícitamente que la incluya.
- Dirección: EMPUJAR local → Design. Nunca dejar que baje y pise lo local.
- ⚠️ Tras el renombre de carpetas (componentes/, plantillas/, lineamientos/, recursos/, kits-ui/), verificar que Design no conserve las carpetas viejas duplicadas.

---

## 🟡 PENDIENTES DE PRODUCCIÓN

**2 · Website móvil.** El kit website es solo escritorio (grid de 3 columnas, paddings fijos). Falta la variante responsive/móvil para completar la matriz móvil/escritorio × claro/oscuro del panel (hoy: escritorio claro ✓, escritorio oscuro ✓, móvil solo como patrones y MobileCarousel).

**3 · Plantillas que faltan en el picker de Design.** Empaquetar como `.dc.html` + `ds-base.js` + `support.js` + `.thumbnail`:
- `flyer-ig` (1080×1350, pieza única)
- `web-pagina` (bloque Gutenberg)
- `web-carrusel` (slider WordPress)

---

## 🟢 OBRA GRANDE (cuando haya energía, sobre piso firme)

**3 · Fuentes — licencia (necesita tu dato).** Confirmar si la licencia de **Book Antiqua** (Monotype/Microsoft) y **Letter Gothic Std** (Adobe) es *desktop* o *web*. Hoy `tokens/fonts.css` las sirve por `@font-face` auto-hospedado — uso que la licencia desktop NO cubre. Riesgo en sitio público.
→ Solución recomendada: **doble pista**. Marca licenciada para PDF/print; OFL para web/email (sustitutos serif: EB Garamond / Gelasio / Spectral · mono: IBM Plex Mono / Roboto Mono). Amatic SC ya es OFL.

**4 · Regla no-salto en el linter.** El oxlint ya corre en `error`, pero falta la regla que prohíba primitivos directos (`--ink-*`, `--wine-*`…) en componentes. Los componentes ya cumplen (auditado 2026-08-02); falta el gate automático.

**5 · Unificar las paletas paralelas.** `listmonk/listmonk_public_pages_nfcd.css` (tokens `--nf-*`) y los emails (hex crudo) duplican la paleta con 2 divergencias reales (`--nf-ink-soft`, `--nf-border`). Idea: generar el bloque `--nf-*` y una tabla hex-para-email desde `tokens/colors.css` en `_compile.js`.

**6 · Fase WordPress.** `theme.json` como gobierno de tokens, CPT + ACF para encuentros/novedades/cursos, carruseles con CSS scroll-snap. (Pipeline v1 embed ya probado — ver `conocimiento/pipeline-wordpress-embed.md`.)

**7 · DTCG (opcional, NO urgente).** Migrar el árbol de tokens al estándar DTCG 2025.10. Decisión, no obligación.

**8 · Copia obsoleta en ATANANAHANNA.** `~/ATANANAHANNA/Projects · Durga Bartolina/Desyn System NFCD/DS-NFCD-GitHub/` quedó congelada al 2026-06-25 y contradice la fuente única. Decidir si se borra (vive dentro del repo ATANANAHANNA, no de este).

---

## ⚫ CERRADO / RESUELTO

- **Saneamiento 2026-08-02** (rama `saneamiento-2026-08`): contraste AA en claro y oscuro, tema oscuro activable (anti-FOUC + toggle), ley de no-salto aplicada, escala `--font-size-*` adoptada en componentes, clasificador del manifest corregido, reorganización en español kebab-case, root limpio, duplicados borrados, docs sincronizadas.
- **Carrusel IG horizontal** — aplicado al `.dc.html`.
- **CLAUDE.md commiteado** — y reescrito 2026-08-02.
- **Limpieza de `conocimiento/`** — el DS alternativo se borró.
- **Manifest** — `themes` registra el oscuro; `--text-*` de color ya son `kind:"color"`.
- **a4-ficha empaquetada** · **social-poster empaquetada y documentada en SKILL.md**.
- **Reestructura `foundations/work/index`** — decidido NO (2026-06-25): rompía la hipérbola.

---

## REGLAS

- **Aplicar-y-commitear en el mismo gesto.**
- **Una sola mano por tarea.** Chat = pensar · Design = diseñar/ver · Code = tocar disco y sincronizar.
- **Una sola fuente de verdad.** Este repo. Sin copias paralelas.

*(Pendientes de toda la asociación, fuera del design system → `ATANANAHANNA/BACKLOG/`.)*
