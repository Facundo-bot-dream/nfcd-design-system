# Prompt master — Web componente / página NFCD
> Superficie: HTML standalone o bloque Gutenberg · generar en Cowork

---

## Dos modos de output — elegir antes de generar

| Modo | Cuándo usarlo | Output |
|---|---|---|
| **HTML standalone** | Para revisar, prototipar, o incrustar en tema PHP | `.html` con estilos inline o `<style>` interno |
| **Bloque Gutenberg** | Para agregar al tema WordPress como bloque custom | `.jsx` + `block.json` + `style.css` |

---

## Variables a completar

```
[COMPONENTE]           → ej: "hero landing", "grilla de encuentros", "bloque sobre Roxana", "formulario de inscripción"
[MODO]                 → "HTML standalone" / "bloque Gutenberg"
[CONTENIDO]            → descripción del contenido que va adentro
[INTERACCION]          → "ninguna" / "filtro por modalidad" / "accordion" / "formulario"
[PAGINA_DESTINO]       → ej: "home", "encuentros", "sobre", "contacto"
```

---

## PROMPT — HTML standalone

```
Creá un componente web HTML standalone para NFCD.

<brief>
Componente: [COMPONENTE]
Página destino: [PAGINA_DESTINO]
Contenido: [CONTENIDO]
Interacción: [INTERACCION]
</brief>

<specs>
- HTML5 semántico + CSS custom properties (usar tokens de tokens/colors.css, tokens/typography.css)
- Responsive mobile-first: breakpoints 375px / 768px / 1200px
- Ancho máximo contenido: 1200px, centrado con margin auto
- Fuentes: Amatic SC vía Google Fonts (@import en <head>) · Book Antiqua y Letter Gothic vía @font-face con rutas relativas a assets/fonts/
- Sin frameworks externos salvo que sea estrictamente necesario
- JS vanilla para interacciones simples (no React para HTML standalone)
</specs>

<brand>
- Usá el Design System NFCD cargado: styles.css como referencia de tokens
- Componentes de referencia en ui_kits/website/ (Hero, SiteHeader, EncuentrosGrid, etc.)
- Tipografía: Amatic SC display uppercase · Book Antiqua cuerpo · Letter Gothic Std labels mono uppercase
- Paleta: paper #faf8f3 · ink #1a1410 · wine #a7274c (un acento por sección)
- Bordes hairline #c8c0b0. Esquinas near-square (4-8px). Sombras: box-shadow 0 1px 4px rgba(26,20,16,0.08)
- Sin gradientes. Sin emoji. Sin stock photos.
- Voz labels: Letter Gothic uppercase tracked. Voz cuerpo: rioplatense, poético.
</brand>

Generá el archivo HTML completo listo para abrir en browser o incrustar en tema PHP.
```

---

## PROMPT — Bloque Gutenberg

```
Creá un bloque Gutenberg personalizado para el tema WordPress de NFCD.

<brief>
Bloque: [COMPONENTE]
Página destino: [PAGINA_DESTINO]
Contenido: [CONTENIDO]
Interacción: [INTERACCION]
</brief>

<specs>
- React JSX con @wordpress/blocks
- Archivos a generar: block.json · edit.jsx · save.jsx · style.css
- style.css importa los tokens de NFCD via variables CSS (copiar vars de tokens/colors.css)
- Fuentes cargadas en functions.php del tema (no repetir en el bloque)
- Compatible con WordPress 6.x + Gutenberg
</specs>

<brand>
[mismas reglas de brand que HTML standalone — ver arriba]
</brand>

Generá los 4 archivos del bloque Gutenberg con comentarios que expliquen cómo registrarlo en functions.php.
```

---

## Después de generar

**HTML standalone:**
- Guardar en `design/web/` para revisión
- Si es componente reutilizable → copiar a `ui_kits/website/`
- Para WordPress: pegar el HTML dentro del template PHP correspondiente

**Bloque Gutenberg:**
- Crear carpeta en el tema: `wp-content/themes/nfcd-theme/blocks/[nombre-bloque]/`
- Copiar los 4 archivos generados
- Registrar en `functions.php`:
```php
register_block_type( get_template_directory() . '/blocks/[nombre-bloque]' );
```
