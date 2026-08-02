# PATTERNS.md

Patrones de producción aprendidos en la construcción de páginas web y de evento para NFCD. Estos patrones nacieron en contextos reales y están optimizados para navegadores móviles y embebidos.

---

## Carruseles móviles (`MobileCarousel`)

### Técnica base: scroll-snap-type

```css
.mobile-carousel__viewport {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
}

.mobile-carousel__slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
}
```

**Por qué `mandatory`:** asegura que el scroll siempre frene exactamente en un slide completo, sin quedar a mitad de camino.

**Por qué `flex: 0 0 100%` en slides:** el `0 0 100%` obliga al slide a ocupar exactamente el ancho del viewport sin crecer ni encoger, incluso si el contenido interno es más grande.

### Aspect ratio: IG 4:5 responsive

Los slides usan `aspect-ratio: 1080 / 1350` (relación 4:5 de Instagram). En CSS:

```css
.mobile-carousel {
  aspect-ratio: 1080 / 1350;
}
```

Esto mantiene la proporción sin importar el ancho del viewport. En móviles reales (390px), el alto se calcula automáticamente (`390 * 1350 / 1080 ≈ 488px`).

**Nota:** si los slides contienen componentes del DS (como `Card`), envolver en `display: contents` para que las reglas de ancho apunten al hijo:

```html
<div class="mobile-carousel__slide" style="display: contents;">
  <Card><!-- ancho 100% aplica aquí, no al wrapper --></Card>
</div>
```

### Flechas de navegación

Posicionadas superpuestas, pegadas al borde:

```css
.mobile-carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -16px; /* o right: -16px */
}

.mobile-carousel__arrow--prev {
  animation: pulse-invite 1.8s ease-in-out infinite;
}
```

**Pulso de invitación:**

```css
@keyframes pulse-invite {
  0% {
    opacity: 0.6;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
  100% {
    opacity: 0.6;
    transform: translateY(-50%) scale(1);
  }
}
```

Duración ~1.8s. El efecto se repite infinitamente para invitar al usuario a deslizar sin ser agresivo.

### Dots de progreso "latido"

El dot **nunca cambia de tamaño** — se mantiene fijo en 8px siempre. Toda la animación vive en el aura (dos ondas por `::before`/`::after`), nunca en el punto: si el punto también escala, llama demasiado la atención.

```css
.dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(26, 22, 20, 0.3); }
.dot--active { background: var(--brand); position: relative; }

.dot--active::before, .dot--active::after {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--brand);
  animation: ripple-wave 1.6s ease-out infinite;
}
.dot--active::after { animation-delay: .8s; } /* desfasada medio ciclo */

@keyframes ripple-wave {
  0%   { transform: translate(-50%, -50%) scale(1); opacity: .55; }
  100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}
```

El dot activo emite **dos ondas independientes**, mismo keyframe, desfasadas medio ciclo (`animation-delay` = mitad de la duración) — así siempre hay una onda visible, sin solaparse por completo.

**Duración fija — nunca `Math.random()`:** la duración/delay de cada onda es constante en el CSS, nunca recalculada por render con `Math.random()`. Recalcular en cada render hace que la animación se sienta mecánica o se acelere al reiniciar (el navegador reinicia el keyframe desde 0 con cada nuevo valor). Si hay varios carruseles en la página y se quiere evitar que laten en sincro perfecta, fijar un delay distinto por instancia una sola vez (al montar), no por render.

### Scroll-snap fallback: detección por scroll

En navegadores o contextos embebidos donde `scroll-snap` puede no disparar reliablemente, complementar con listener en `scroll`:

```javascript
const handleScroll = () => {
  const slideWidth = container.querySelector('[data-slide]')?.offsetWidth || 0;
  if (slideWidth > 0) {
    const index = Math.round(container.scrollLeft / slideWidth);
    if (index !== currentIndex && index < slideCount) {
      setCurrentIndex(index);
      updateDots(index);
    }
  }
};

container.addEventListener('scroll', handleScroll);
```

**Por qué este fallback:** en iframes o previsualizadores embebidos, a veces `IntersectionObserver` no se dispara, pero el evento `scroll` siempre funciona.

### Tipografía en slides móviles

Las escales de tipografía en slides móviles difieren de los specs de export plano (1080px para Meta/IG):

**En slides móviles (viewport físico del user):**
- Título: ~28px (no 48px como en export)
- Cuerpo: ~18px (no 32px)
- Meta/label: ~14px (no 20px)
- Numeral de sección: ~16px

**Razón:** en una pantalla real (390–412px), un texto de 48px ocupa ~13% del ancho; en un export IG de 1080px el mismo tamaño es legible. En mobile, 28px es legible y proporcional.

```css
@media (max-width: 480px) {
  .slide__title {
    font-size: 28px;
  }
  .slide__body {
    font-size: 18px;
  }
  .slide__meta {
    font-size: 14px;
  }
}
```

---

## Contenido largo → acordeón (`Accordion`)

Cuando una sección combina datos duros (fecha, lugar, precio) con varios párrafos de condiciones o legales, no mezclar todo en un bloque de texto: separar **tarjetas de datos clave arriba** (siempre visibles) + **acordeón colapsable abajo** ("Ver detalles") para el resto.

```css
.accordion__panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--dur-slow) var(--ease-quiet);
}
.accordion__panel--open { max-height: var(--panel-measured-height); }

.accordion__arrow {
  transition: transform var(--dur-base) var(--ease-quiet);
}
.accordion__arrow--open { transform: rotate(180deg); }
```

`max-height` no puede animar a `auto` — hay que medir la altura real del contenido (`scrollHeight`) y animar hacia ese valor en px, no hacia un `999px` arbitrario (causa un salto perceptible si el contenido es corto). Componente del DS: `Accordion` (components/content) — ver card dedicada.

---

## Reveal progresivo de texto ("date punch")

Para un dato que hay que remarcar (fecha, cifra): revelar la frase palabra por palabra, cada palabra entrando grande y encogiéndose hasta su tamaño y posición final dentro de la frase completa, construyéndola de izquierda a derecha.

```css
.punch-word {
  display: inline-block;
  transform: scale(2.2);
  opacity: 0;
  transition: transform .5s cubic-bezier(.16,.84,.44,1), opacity .3s ease-out;
}
.punch-word--in { transform: scale(1); opacity: 1; }
```

Encadenar con `transition-delay` o `setTimeout` escalonado por palabra (~90–120ms entre una y la siguiente). **Sin rebote/spring** — `cubic-bezier` de desaceleración pura, nunca `ease-elastic` ni `spring()`: el rebote no coincide con el tono de marca.

---

## Botón flotante invitacional

Sobre imagen o motivo de fondo: semi-transparente con blur, pulso continuo (escala + sombra sutil) para invitar a explorar sin ser agresivo.

```css
.floating-cta {
  background: color-mix(in oklab, var(--surface-ink) 70%, transparent);
  backdrop-filter: blur(8px);
  animation: floating-cta-pulse 2.4s ease-in-out infinite;
}
@keyframes floating-cta-pulse {
  0%, 100% { transform: scale(1); box-shadow: var(--shadow-sm); }
  50% { transform: scale(1.04); box-shadow: var(--shadow-md); }
}
```

---

## Animaciones de scroll-reveal

### El problema con `IntersectionObserver`

En contextos embebidos (iframes, previsualizadores, canvases dinámicas), `IntersectionObserver` a menudo no se dispara. La solución:

**Chequeo híbrido: scroll + resize + async fallback**

```javascript
const checkIfInView = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

const revealElement = (element) => {
  if (checkIfInView(element)) {
    // Cancelar animaciones activas antes de fijar estado final
    element.getAnimations().forEach(anim => anim.cancel());
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }
};

// Listeners
window.addEventListener('scroll', () => {
  document.querySelectorAll('[data-reveal]').forEach(revealElement);
});

window.addEventListener('resize', () => {
  document.querySelectorAll('[data-reveal]').forEach(revealElement);
});

// Fallback para contenido montado de forma asíncrona
setTimeout(() => {
  document.querySelectorAll('[data-reveal]').forEach(revealElement);
}, 500);
```

### Cancelar animaciones antes de fijar estado final

Gotcha común: si una animación está en mitad del camino y llamás `element.style.opacity = '1'`, la transición CSS activa intenta interpolar desde el valor animado al nuevo valor, quedando "trabada".

**Solución:**

```javascript
const reveal = (element) => {
  // Cancelar todas las animaciones activas
  element.getAnimations().forEach(anim => anim.cancel());
  
  // Ahora fijar el estado final
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
};
```

---

## `transform:scale()` y overlap durante transiciones de entrada

`transform:scale()` y los overlays no reservan espacio de layout: un elemento agrandado se superpone visualmente con el texto vecino durante la transición, aunque "en reposo" no haya overlap.

- Si el elemento vive pegado a otro texto (ej. numeral de sesión sobre un título), apuntar `transform-origin` hacia el espacio **vacío** disponible (ej. `left bottom` para crecer hacia arriba) y usar un factor moderado (**1.4–1.6x, no 2–3x**) que quepa en ese espacio real.
- Si no hay espacio vacío cerca, animar solo `opacity` — nunca falla, nunca se superpone.

## Typewriter / reveal letra por letra sobre texto centrado

**Nunca** ir agregando caracteres al `textContent` uno por uno — recalcula el centrado/wrap en cada letra y todo salta. Renderizar el texto completo de una sola vez como spans por carácter, y animar solo la `opacity` de cada span en secuencia: el layout nunca se recalcula.

Cuidado con `display:flex` en un contenedor con muchos `<span>` de una letra cada uno como hijos directos: cada span se vuelve ítem de flex y los espacios en blanco entre palabras se colapsan. Si hace falta centrar con flex, envolver el texto en un único hijo (span/div) que sea el ítem de flex, con el flujo de texto normal viviendo adentro de ese hijo.

---

## Toggle Escritorio / Celular (sin archivos separados)

Útil para testear breakpoints en la misma página sin cambiar el viewport real del navegador.

### Frame simulator

```css
.frame--mobile {
  width: 390px;
  height: 844px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(26, 22, 20, 0.12);
}
```

### Clase simuladora

```css
body.viewport-mobile {
  /* Aplicar media query mobile: duplicar rules */
}

body.viewport-mobile .element {
  font-size: 28px; /* mobile scale */
}

body.viewport-desktop .element {
  font-size: 48px; /* desktop scale */
}
```

### Toggle en JavaScript

```javascript
document.querySelectorAll('[data-viewport]').forEach(btn => {
  btn.addEventListener('click', e => {
    document.body.className = `viewport-${e.target.dataset.viewport}`;
  });
});
```

**Ventaja:** permite probar cómo se ve un carrusel, un form, o cualquier componente en mobile sin redimensionar el navegador, manteniendo dev tools visibles.

---

## Imagen grafito con blend-mode

La marca usa imagería en grafito (blanco y negro) que se integra con el fondo papel usando `mix-blend-mode`:

```css
img[data-graphite] {
  mix-blend-mode: var(--img-graphite-blend);
}
```

El token ya está definido en los tokens del sistema — **no redefinirlo en las piezas**:
el claro vive en `:root` (`tokens/colors.css` → `multiply`) y el oscuro en
`:root[data-theme="dark"]` (`tokens/colors.dark.css` → `screen`). No existe ningún
selector `[data-theme="light"]`: la ausencia del atributo (o cualquier valor ≠ `dark`) es el tema claro.

- **Light:** `multiply` hace que los negros del PNG se oscurezcan sobre papel blanco.
- **Dark:** `screen` hace que los negros se aclaren sobre fondo tinta, mejorando el contraste.

---

## Activación del tema oscuro

El tema oscuro se activa con `data-theme="dark"` en `<html>`. Patrón canónico para
páginas web (elección guardada > preferencia del SO), inline en `<head>` **antes**
del CSS para evitar el flash del tema incorrecto:

```html
<script>
  (function () {
    var t = localStorage.getItem("nfcd-theme");
    if (!t) t = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = t;
  })();
</script>
```

Un toggle persiste la elección con:

```js
var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
document.documentElement.dataset.theme = next;
localStorage.setItem("nfcd-theme", next);
```

Las piezas de lienzo fijo (carruseles, A4, posters) **no** usan tema: se exportan
siempre en claro, salvo sus paneles fijos (`--surface-ink`, `--brand`) que son
oscuros/wine en ambos temas por definición.

---

## Deploy a WordPress (Gutenberg nativo, sin Beaver Builder)

Exportar la página como HTML autocontenido (fuentes/imágenes/CSS/JS inlineados) y pegar en un bloque "HTML personalizado" — o separar en pestañas HTML/CSS/JS si el bloque las pide (orden: estilos primero, marcado, scripts al final, preservando el orden original de los `<script>`).

Para producción: sacar cualquier UI de previsualización interna (ej. toggle Escritorio/Celular) — el responsive real es automático vía `@media (max-width:720px)`, no depende de ningún botón.

---

## Checklist de implementación

- [ ] Componente `MobileCarousel.jsx` importa tokens de color y tipografía
- [ ] Template `.dc.html` es editable en Claude Design sin compilación
- [ ] Scroll-snap funciona en Safari, Chrome, Firefox
- [ ] Fallback scroll-listener para contextos embebidos
- [ ] Dots con ripple sin hardcodear colores (usar vars CSS)
- [ ] Tipografía mobile probada en viewport físico 390px+
- [ ] Animaciones scroll-reveal cancelan antes de fijar estado
- [ ] Toggle desktop/móvil en page de testing funciona
- [ ] Imagería grafito con blend-mode en light + dark
