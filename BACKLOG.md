# BACKLOG — Design System NFCD

> Lo que está pendiente. Una sola lista. Si no está acá, no existe como pendiente.
> Actualizado: 2026-06-25 (madrugada)

---

## 🔴 LO GRANDE (lo único que falta para que el trabajo de hoy "se note")

**1 · Sincronizar Claude Design (la nube) con el estado actual.**
Todo el sistema en disco y en GitHub está al día (chips, oscuro, sage teal, castellano, prompts). Pero el **proyecto de Claude Design quedó viejo** — cuando vas a *generar* una pieza, usa lo anterior.
- Se hace con `/design-sync` **real** desde **Claude Code** (no es comando de terminal, no está en la web de Design).
- Requiere autorización: correr `/design-login` antes (cuenta claude.ai, scope design-system).
- ⚠️ El sync de Design **saltea la carpeta `templates/`** — hay que pedirle explícitamente que la incluya.
- Dirección: EMPUJAR local → Design. Nunca dejar que baje y pise lo local (GitHub es la red).

---

## 🟡 PENDIENTES DE PRODUCCIÓN

**2 · Carrusel IG horizontal.** El cambio de mesa vertical → horizontal (`column` → `row`) se *documentó en el prompt* pero **nunca se aplicó al `.dc.html`** ni se commiteó. Aplicarlo al archivo real y commitear en el mismo gesto.

**3 · Templates que faltan en el picker de Design.** Empaquetar como `.dc.html` + `ds-base.js` + `support.js` + `.thumbnail`:
- `flyer-ig` (1080×1350, pieza única)
- `web-carrusel` (slider WordPress)
- `a4-ficha` (verificar empaquetado)

**4 · Commitear el `CLAUDE.md`** (línea de fuente única agregada el 25/06) — queda sin pushear.

---

## 🧹 LIMPIEZA (para Code — un comando)

**Borrar de `conocimiento/`.** Es un sistema de diseño **ALTERNATIVO** (granito/glaciar/brasa, Fraunces/Public Sans) — NO el de producción (tinta/papel/wine, Amatic/Book Antiqua/Letter Gothic). Revisado: **nada de código único rescatable**, los principios (3 niveles + no-salto + patrón de modo oscuro) ya viven en producción.
- Borrar: `tokens.css`, `colors.dark.css`, `DESIGN-SYSTEM.md`, `demo.html`, `files.zip`, `.DS_Store`
- Conservar: `README.md`, `como-funciona-claude-design.md`, `investigacion_2026-06_5-ejes.md`

---

## 🟢 OBRA GRANDE (cuando haya energía, sobre piso firme)

**5 · Fuentes — Pista 1 (legal, necesita tu dato).** Confirmar si la licencia de **Book Antiqua** (Monotype/Microsoft) y **Letter Gothic Std** (Adobe) es *desktop* o *web*. Hoy `fonts.css` las sirve por `@font-face` (auto-hospedado) — uso que la licencia desktop NO cubre. Riesgo en sitio público.
→ Solución recomendada: **doble pista**. Marca licenciada para PDF/print; OFL para web/email (sustitutos serif: EB Garamond / Gelasio / Spectral · mono: IBM Plex Mono / Roboto Mono). Amatic SC ya es OFL, libre.

**6 · Linter a `error`.** Pasar oxlint de `warn` a `error` (gate real) y agregar regla **no-salto** (prohibir primitivos directos en componentes; solo semánticos).

**7 · Fase WordPress.** `theme.json` como gobierno de tokens, CPT + ACF para encuentros/novedades/cursos, carruseles con CSS scroll-snap. (Auto-alojado dentro del tema, no headless.)

**8 · Limpieza cosmética del manifiesto.** `--text-*` de color tag-eados como `kind:"font"`; `--img-graphite-blend` como `"color"`. Y `themes:[]` vacío (el oscuro anda por CSS pero no está registrado como tema formal).

**9 · DTCG (opcional, NO urgente).** Migrar el árbol de tokens al estándar DTCG 2025.10 (mejora la comprensión de la IA vía `$description`/`$type`). Decisión, no obligación.

---

## ⚫ CERRADO / DECIDIDO NO HACER

- **Reestructura `foundations/work/index`.** Decidida **NO** el 25/06: agrega profundidad de rutas (más `../..`) sin ganar simplicidad, justo en el sistema que sufría por confusión de rutas. Rompía la hipérbola. El orden real se logró fijando la **fuente única**, no moviendo carpetas.
- **Carpeta duplicada en `~/Documents/Claude/Projects/`.** Quedó atrás tras la mudanza a ATANANAHANNA. Fuente única fijada en memoria y en `CLAUDE.md`.

---

## REGLAS QUE NACIERON DE LOS ERRORES DE HOY

- **Aplicar-y-commitear en el mismo gesto.** Nunca "lo documento ahora, lo aplico después" — ahí se cayó el carrusel.
- **Una sola mano por tarea.** Chat = pensar · Design = diseñar/ver · Code = tocar disco y sincronizar. No repartir el mismo trabajo en varias manos.
- **Una sola fuente de verdad.** ATANANAHANNA. Sin copias paralelas.

*(Pendientes de toda la asociación, fuera del design system → `ATANANAHANNA/BACKLOG/`.)*
