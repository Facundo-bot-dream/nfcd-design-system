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

### Dots de progreso con ripple expansivo

```css
.mobile-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(26, 22, 20, 0.3);
}

.mobile-carousel__dot--active {
  background: var(--brand); /* wine */
  animation: ripple-expand 1.2s ease-out infinite;
}

@keyframes ripple-expand {
  0% {
    box-shadow: 0 0 0 0 rgba(167, 39, 76, 0.7);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(167, 39, 76, 0);
  }
  100% {
    box-shadow: 0 0 0 6px rgba(167, 39, 76, 0);
  }
}
```

El dot activo emite una onda expansiva (ripple) que crece hasta ~3x su tamaño con desvanecimiento.

**Variación por ciclo:** en el componente React, la duración/delay/escala de ripple se ajustan levemente (±10-20%) para cada ciclo usando `Math.random()` — esto evita que se vea mecánico cuando hay múltiples carruseles en la página.

```javascript
// En MobileCarousel.jsx:
const randomFactor = 0.8 + Math.random() * 0.4; // 0.8–1.2
const duration = 1.2 * randomFactor;
// Aplicar como CSS variable o inline style
```

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

/* En light: */
:root[data-theme="light"] {
  --img-graphite-blend: multiply;
}

/* En dark: */
:root[data-theme="dark"] {
  --img-graphite-blend: screen;
}
```

- **Light:** `multiply` hace que los negros del PNG se oscurezcan sobre papel blanco.
- **Dark:** `screen` hace que los negros se aclaren sobre fondo tinta, mejorando el contraste.

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
