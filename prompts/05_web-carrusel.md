# Prompt master — Web · Slider de encuentros (home)
> Superficie: componente HTML + Swiper.js · WordPress homepage · generar en Cowork

---

## Función

Carrusel horizontal en la home del sitio que muestra los encuentros disponibles.
El usuario desliza para ver cada encuentro con título, fecha y CTA de inscripción.
Responsive. Sin plugins pesados. Tokens del DS NFCD.

---

## Output esperado

- `web-carrusel.html` — componente completo para pegar en bloque "HTML personalizado" de Gutenberg
- `web-carrusel.css` — estilos (pegar en Apariencia → CSS adicional, o enqueue en functions.php)

---

## PROMPT

```
Leé el brief en prompts/00_brief-encuentro.md y generá el slider de encuentros para la home de WordPress.

<specs>
- Componente: carrusel horizontal con Swiper.js (CDN: https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js)
- Responsive: mobile-first · 375 / 768 / 1200 px
- HTML para bloque Gutenberg "HTML personalizado"
- CSS separado con prefijo .nfcd- para no pisar estilos del tema
- Sin frameworks externos salvo Swiper.js
</specs>

<estructura_slide>
Cada slide del carrusel muestra un encuentro:
1. Eyebrow: tipo de encuentro + modalidad — Letter Gothic, uppercase, trackeado
2. Título del encuentro — Amatic SC, grande, uppercase
3. Fecha(s) — Letter Gothic mono, wine
4. Descripción breve — Book Antiqua, 2-3 líneas
5. CTA: "Más información" → link a la página del encuentro (wine, near-square)
6. Si hay imagen: grafito monocromático como fondo o lateral
</estructura_slide>

<brand>
- Tokens NFCD: papel #faf8f3 · tinta #1a1410 · wine #a7274c
- Tipografía: Amatic SC display uppercase · Book Antiqua cuerpo · Letter Gothic Std labels mono
- Bordes hairline · esquinas near-square 4-8px · sin gradientes · sin emoji
- Swiper navigation (flechas y paginación) en wine, diseño minimal
- Fuentes: Amatic SC vía Google Fonts · Book Antiqua + Letter Gothic vía @font-face local
</brand>

<swiper_config>
- slidesPerView: 1 (mobile) · 2 (tablet) · 3 (desktop)
- spaceBetween: 24px
- navigation: true (flechas prev/next en wine)
- pagination: true (dots, wine)
- loop: false (para no repetir encuentros)
- grabCursor: true
</swiper_config>

<wordpress>
- El HTML va en: Gutenberg → bloque "HTML personalizado"
- El CSS va en: Apariencia → CSS adicional
- Usá clases .nfcd-slider-* para no pisar el tema
- Los links de cada encuentro son URLs absolutas del sitio
</wordpress>

Generá primero el HTML completo del componente slider, luego el CSS separado.
```

---

## Después de generar

1. HTML → WordPress: `+` → "HTML personalizado" → pegar → Guardar → Previsualizar
2. CSS → WordPress: Apariencia → **CSS adicional** → pegar al final
3. Para agregar un nuevo encuentro al slider: duplicar un `<div class="swiper-slide">` y actualizar los datos

## Conexión futura (tema custom)
- El CSS pasa a `nfcd-theme/assets/css/slider.css`
- El HTML pasa a `template-parts/home-slider.php`
- Los datos de encuentros se cargan desde CPT (Custom Post Type) de WordPress
