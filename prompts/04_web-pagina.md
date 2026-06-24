# Prompt master — Página web encuentro NFCD
> Superficie: página WordPress · HTML + CSS · generar en Cowork

---

## Output esperado

Una página completa para el encuentro en WordPress, con:
- HTML semántico listo para pegar en un bloque "HTML personalizado" de Gutenberg
- CSS separado para agregar al tema (functions.php o plugin de CSS adicional)
- Responsive: mobile-first, breakpoints 375 / 768 / 1200px

---

## PROMPT

```
Leé el brief en prompts/00_brief-encuentro.md y generá la página web del encuentro para WordPress.

<specs>
- HTML semántico para bloque Gutenberg "HTML personalizado"
- CSS separado con variables del DS NFCD (tokens/colors.css, tokens/typography.css)
- Responsive mobile-first: 375px / 768px / 1200px
- Fuentes: Amatic SC vía Google Fonts · Book Antiqua + Letter Gothic vía @font-face
- Sin frameworks externos
</specs>

<secciones>
1. Hero: título grande + subtítulo + fechas + CTA inscripción (fondo papel, acento wine)
2. Descripción: texto completo del encuentro (Book Antiqua, cuerpo)
3. Calendario: grilla presenciales / virtuales (Letter Gothic labels)
4. Para quién / requisitos
5. Dinámica: cómo funciona
6. Video embed: YouTube iframe con thumbnail personalizado
7. Precio + inscripción: CTA principal en wine
8. Pie de sección: logo + contacto
</secciones>

<brand>
- Tokens NFCD: papel #faf8f3 · tinta #1a1410 · wine #a7274c · sage #7a8c6e
- Tipografía: Amatic SC display uppercase · Book Antiqua cuerpo · Letter Gothic Std labels mono
- Bordes hairline #c8c0b0 · esquinas near-square 4-8px · sombras suaves
- Sin gradientes · sin emoji · sin stock photos
- Voz: español rioplatense, poético-ensayístico
</brand>

<wordpress>
- El HTML va en: Gutenberg → bloque "HTML personalizado"
- El CSS va en: Apariencia → CSS adicional (o functions.php con wp_enqueue_style)
- Usá clases con prefijo .nfcd- para no pisar estilos del tema
- Las imágenes referencian URLs absolutas del sitio
</wordpress>

Generá primero el HTML completo, luego el CSS separado.
```

---

## Después de generar

1. HTML → en WordPress: Gutenberg → `+` → "HTML personalizado" → pegar
2. CSS → en WordPress: Apariencia → **CSS adicional** → pegar al final
3. Guardar página como borrador → previsualizar → ajustar

## Conexión futura (cuando tengamos tema custom)
- El CSS pasa a `nfcd-theme/style.css`
- El HTML pasa a `template-encuentro.php`
- Las clases `.nfcd-` ya estarán prefijadas y limpias
