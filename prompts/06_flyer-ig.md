# Prompt master — Flyer IG / WhatsApp NFCD
> Superficie: imagen única · 1080 × 1350 px · generar en Claude Design

---

## Función

Una sola pieza de alto impacto para difusión inmediata: WhatsApp, Stories, Feed IG como post único.
No narra — anuncia. Comunica lo esencial en un golpe visual.

---

## PROMPT

```
Leé el brief en prompts/00_brief-encuentro.md y generá el flyer de difusión del encuentro.

<specs>
- Dimensión exacta: 1080 × 1350 px
- Formato de salida: artifact HTML, un solo div de exactamente 1080×1350px
- Una imagen, no una serie — todo el mensaje en una sola pieza
</specs>

<estructura>
La jerarquía es: qué + cuándo + quién convoca + cómo llegar.

1. Elemento visual dominante: motivo gráfico o mancha de Roxana (assets/brand/marks/) en grafito
2. TITULO del encuentro — Amatic SC, grande, uppercase
3. Subtítulo o descripción breve — Book Antiqua, 1-2 líneas
4. Fecha y modalidad — Letter Gothic, uppercase, trackeado
5. Lugar (si es presencial) — Letter Gothic label
6. Logo NFCD — abajo, pequeño
7. Link o CTA mínimo — Letter Gothic, wine
</estructura>

<brand>
- Usá el Design System NFCD cargado en este proyecto
- Paleta: tinta sobre papel, acento wine #a7274c. Sin gradientes.
- Tipografía: Amatic SC display uppercase · Book Antiqua cuerpo · Letter Gothic Std labels mono
- Imágenes: grafito monocromático o manchas de Roxana (assets/brand/marks/) — multiply sobre papel
- Sin emoji. Sin stock photos. Bordes hairline si se usan marcos. Esquinas near-square.
- El wordmark siempre como imagen logo, nunca tipografiado
- Voz: español rioplatense, poético y directo
</brand>

<composicion>
- Composición centrada o asimétrica fuerte — no decorativa, estructural
- El elemento visual ocupa al menos 40% del espacio
- Respiración: márgenes generosos, no saturar
- El título tiene que poder leerse en miniatura (thumbnail de WhatsApp)
</composicion>

Generá el artifact HTML con el flyer completo.
```

---

## Export PNG

Pegá este prompt exacto después de generar:

```
Exportá el flyer como PNG de exactamente 1080×1350px.
Método requerido:
1. Generá un HTML standalone con rutas de assets corregidas (prefijo ../ si es necesario)
2. Inline todas las fuentes y logos como base64
3. Rasterizá vía SVG foreignObject al tamaño exacto 1080×1350px
4. Exportá el PNG

Nombrar: flyer_[descripcion]_[AAAA-MM].png
No modificar el diseño — exportar tal cual está.
```

Destino local: `templates/flyer-ig/exports/`

---

## Guardar como template editable

Después de aprobar el diseño:
```
Guardá este flyer como archivo .dc.html con nombre:
flyer-ig/Flyer_[descripcion]_[AAAA-MM].dc.html
```

Así queda editable en Design para ajustes futuros sin regenerar desde cero.

---

## Después de generar

1. PNG → compartir directo por WhatsApp / subir a Instagram como post único o Story
2. `.dc.html` → guardar en `templates/flyer-ig/` para edición futura
3. Si el encuentro tiene carrusel además, el flyer debe ser coherente con el slide 01 (portada)
