# Pipeline v1 — Página web editada en Design, exportada a WordPress (bloque HTML)

> Documentado a partir de "La médula participante de lo vivo" (07/2026). Primer caso reproducible de este flujo — usarlo de referencia para el próximo evento.

## Objetivo

Publicar una página de evento en WordPress vía bloque **HTML personalizado** de Gutenberg: rápido, sin pelear con la tipografía del theme, ancho completo con márgenes normales.

## El flujo (en orden)

1. **Construir la página como Design Component** (`.dc.html`) en `templates/`, nunca como HTML plano suelto. HTML plano no es editable con clics en el visor de Design — el DC sí. El DC es el archivo de trabajo; se edita ahí toda la sesión.
2. **Iterar el diseño** dentro del DC: contenido, jerarquía, animaciones, ajustes de detalle — todo con clics/edición inline, sin regenerar desde cero.
3. **Exportar a plano cuando está listo**: pedirle a Design "generá el export HTML standalone para WordPress" → un solo archivo con HTML + `<style>` + `<script>` combinados (nada de CSS/JS separados, nada de archivos en Medios).
4. **Pegar en WordPress**: Gutenberg → bloque "HTML personalizado" → pegar el archivo completo.
5. Cambios posteriores: **editar el DC**, no el export. El export es un artefacto derivado — se regenera desde el DC cada vez que hace falta, nunca se edita a mano.

**Regla clave:** el DC vive en Design y es la fuente. El HTML plano para WordPress es un export de un solo uso por versión — si hay que cambiar algo, se cambia en el DC y se re-exporta, igual que con los otros templates del pipeline (carrusel, email, A4).

## Mapeo de fuentes (child theme WordPress)

El child theme carga las fuentes de marca con nombres `font-family` **distintos a los tokens del DS**, y cada peso/estilo es una familia separada — no una sola familia con variantes de `font-weight`:

- `--font-serif` → `'Book Antiqua'` (soporta 400 y 700 bajo el mismo nombre)
- `--font-display` bold → `'AMATICSC-BOLD'` / regular → `'AMATICSC-REGULAR'`
- `--font-mono` regular → `'LetterGothicStd'`, bold → `'LetterGothicStd-Bold'`, itálica → `'LetterGothicStd-Slanted'`, bold itálica → `'LetterGothicStd-BoldSlanted'`

Para cualquier export a este WordPress: mapear tokens del DS a estos nombres literales, nunca aplicar `font-weight` sobre una sola familia.

## Técnica: ancho completo dentro del theme

```css
.full-bleed {
  position: relative;
  left: 50%;
  margin-left: -50vw;
  width: 100vw;
}
```

Rompe el contenedor angosto del theme de WordPress. Columnas internas centradas (max-width + margin auto) hacen de margen visual dentro de la franja full-bleed. Requiere que la página en WP use plantilla "ancho completo / sin sidebar" — si no, el contenedor del theme igual limita.

**Scoping:** todo el CSS del export va bajo un `id` único del contenedor (ej. `#nfcd-medula-2026`), para no filtrar estilos al resto del sitio.

## Aprendizajes de animación (aplican a cualquier DC, no solo este)

**`scale()` y overlays de pantalla completa pueden solaparse con texto vecino durante la transición.** Cualquier efecto de entrada que use `transform: scale()` crece en todas direcciones desde su origen — si hay texto cerca, lo tapa a mitad de camino aunque el estado final no se superponga.

- Si el elemento **convive con texto cercano** todo el tiempo → animar solo `opacity`, nunca `scale`.
- Si el elemento **tiene espacio vacío disponible** → sí usar `transform: scale()`, pero fijar `transform-origin` hacia ese espacio vacío (nunca hacia el título/texto vecino) y frenar la escala máxima (ej. 1.4–1.6x, no 2x+) para que quede dentro del espacio real disponible.

**Efecto máquina de escribir sin recálculo de layout:** no revelar caracter por caracter mediante inserción progresiva en el DOM (fuerza recalcular centrado/salto de línea en cada frame). En cambio: renderizar todo el texto de una vez, letra por letra en `<span>`, y animar solo `opacity` por span con delay escalonado. El layout se calcula una sola vez al montar; nunca cambia a mitad de animación.

**Gotcha flex + spans por letra:** si el contenedor de texto usa `display:flex` y tiene muchos `<span>` de una letra como hijos directos, cada span se vuelve un ítem de flex y los espacios en blanco entre palabras se colapsan. Si hace falta centrar con flex, envolver todo el texto en un único hijo (span/div) que sea el ítem de flex, y que el flujo de texto normal (con sus espacios) viva adentro de ese hijo.

## Contenido / jerarquía visual (specific de este caso, como ejemplo del patrón)

- Título de sesión animado → caja con fondo rosa (color de marca), no solo texto suelto.
- Párrafo destacado (cita/autora) → borde rosa sin relleno, texto en negro — contraste de "cita enmarcada" sin ser un bloque de color sólido.

## Próximo paso pendiente

Sumar este flujo como superficie oficial del pipeline (`prompts/README.md` lista 6 superficies; "web-página" hoy dice "Cowork" — evaluar si pasa a Design + este export, dado que este caso ya lo probó de punta a punta).
