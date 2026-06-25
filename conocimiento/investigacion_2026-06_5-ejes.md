# Investigación — 5 ejes del Design System (junio 2026)

> Investigación profunda sobre cómo otros equipos resuelven lo que estamos armando.
> Hallazgos y recomendaciones. Etiquetas: [Seguro] / [Probable] / [Suposición].

---

## Eje 1 · Fuentes — RIESGO LEGAL [Probable, importante]

**El problema:** licencia *desktop* ≠ licencia *web*. Servir una fuente por `@font-face` auto-hospedado es uso *web*, y la mayoría de las licencias desktop lo **prohíben**.

- **Book Antiqua** (Monotype/Microsoft) y **Letter Gothic Std** (Adobe): si se sirven por `@font-face` en un sitio público, **NO están cubiertas** por licencia desktop. Microsoft y Adobe prohíben el self-hosting.
- **Amatic SC**: licencia **OFL** → uso web permitido, libre.
- **Email**: los clientes (Gmail/Outlook) **no cargan `@font-face`** igual — ahí van fuentes de sistema (Palatino, Courier) como fallback.

**Recomendación — DOBLE PISTA:**
- *Marca licenciada* (Book Antiqua, Letter Gothic) → solo para **PDF / print** (uso desktop, cubierto).
- *OFL libre* → para **web y email**. Sustitutos:
  - Serif (reemplazo Book Antiqua): **EB Garamond**, **Gelasio** (métrica casi idéntica a Book Antiqua), **Spectral**.
  - Mono (reemplazo Letter Gothic): **IBM Plex Mono**, **Roboto Mono**.

→ Pendiente: que Facundo confirme qué licencia tiene realmente. (En BACKLOG #5.)

---

## Eje 2 · Estructura de carpetas [decisión tomada]

La investigación recomendó un **monorepo único** con `foundations/` + `work/` + `index/`.

⚠️ **Decisión NFCD (25/06): NO se hace.** Agrega profundidad de rutas (`../..`) sin ganar simplicidad de uso, justo en un sistema que sufría por confusión de rutas. Rompía la hipérbola (C×S=k). El orden real se logró fijando la **fuente única**, no reestructurando. La recomendación queda registrada pero descartada por contexto.

---

## Eje 3 · DTCG (Design Tokens Community Group) [opcional]

- [Seguro] DTCG 2025.10 es estándar **estable**.
- Migrar el árbol de tokens a DTCG es **opcional, NO urgente**.
- Beneficio real: mejora la **comprensión de la IA** (vía `$type` y `$description` por token) más que la velocidad de Claude Design.
- Compilador de referencia: **Style Dictionary** (Amazon) — JSON → CSS/iOS/Android.

---

## Eje 4 · Linting [recomendación clara]

- Las reglas de adherencia deben estar en **`error`**, no en `warning` — que sean un *gate* real (CI), no un aviso ignorable.
- El linter actual caza hex/px crudos pero está en `warn` y **no caza el salto de capa** (un componente usando un primitivo en vez de un semántico).
- Pendiente: subir a `error` + agregar **regla no-salto**. (En BACKLOG #6.)

---

## Eje 5 · WordPress soberano [arquitectura recomendada]

**Auto-alojado DENTRO del tema, NO headless.** El más simple y soberano para NFCD.

- **`theme.json`** como **gobierno de tokens**: define la paleta/tipografía y genera variables `--wp--preset--*` automáticamente. Es el equivalente WordPress del árbol de tokens.
- **Block patterns** (plantillas reutilizables) vs **synced patterns** (cambian en todos lados a la vez).
- **CPT + ACF** (Custom Post Types + Advanced Custom Fields) para encuentros / novedades / cursos.
- **ACF Blocks** para componentes editables.
- **Carruseles**: CSS `scroll-snap` (liviano, sin plugins pesados) o Swiper.js si hace falta más control.

→ Fase grande, post-pipeline. (En BACKLOG #7.)

---

## Síntesis — por qué este pipeline es innovador y escalable

Un **brief** (los datos de un encuentro) → **N superficies coherentes** (flyer, carrusel IG, email, A4, web-página, web-slider), todas derivadas del mismo Design System. Cambiás un color en `colors.css` y se propaga a todo.

Lo que la mayoría hace: Canva por pieza, o un diseñador por pieza — perdiendo coherencia. Lo distinto acá:
1. **Un brief → N outputs** sin fricción.
2. El **DS vive en el repo de la IA** (lee tokens CSS reales, no un PDF de marca). Aprende la marca una vez, la aplica siempre.
3. El **`.dc.html`** como capa de edición: un archivo que es a la vez diseño editable y fuente exportable. La mayoría separa "archivo de diseño" (Figma) de "archivo de producción" (código). Acá son el mismo objeto.

Es un **modelo replicable** para cualquier organización cultural/educativa con identidad definida y sin equipo de diseño dedicado.
