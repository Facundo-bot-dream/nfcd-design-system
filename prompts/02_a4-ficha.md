# Prompt master — A4 Ficha de encuentro NFCD
> Superficie: PDF editorial A4 · 794 × 1123 px · usar en Claude Design o Cowork

---

## Variables a completar

```
[TITULO_ENCUENTRO]     → ej: "Encuentro de Profundización"
[SUBTITULO]            → ej: "Alineación y presencia en el movimiento"
[FECHAS]               → ej: "Sábados 5, 12 y 19 de julio · 10 a 13h"
[MODALIDAD]            → "Presencial · Campo Arroyo del Medio, Bariloche" / "Virtual"
[DESCRIPCION]          → 3-5 oraciones, voz poética, rioplatense
[PARA_QUIEN]           → a quién está dirigido
[DINAMICA]             → cómo funciona el encuentro
[PRECIO]               → ej: "$15.000 · cupos limitados"
[CONTACTO]             → email o link
[FECHA_LIMITE]         → ej: "Inscripción hasta el 30 de junio"
```

---

## PROMPT

```
Creá una ficha editorial A4 para NFCD.

<brief>
Encuentro: [TITULO_ENCUENTRO]
Subtítulo: [SUBTITULO]
Fechas: [FECHAS]
Modalidad: [MODALIDAD]
Descripción: [DESCRIPCION]
Para quién: [PARA_QUIEN]
Dinámica: [DINAMICA]
Precio: [PRECIO]
Contacto: [CONTACTO]
Límite inscripción: [FECHA_LIMITE]
</brief>

<specs>
- Dimensión: A4 — 794 × 1123 px (96dpi) o configurar para print 210×297mm
- Formato de salida: artifact HTML, una sola página A4
- Debe poder descargarse como PDF desde Claude Design sin que el contenido se corte
- Si el contenido no entra en una página, priorizá jerarquía: título → fechas → descripción → datos prácticos → contacto
</specs>

<estructura>
- Cabecera: logo NFCD + eyebrow label tipo "ENCUENTRO PRESENCIAL · JULIO 2026"
- Título grande (Amatic SC display)
- Subtítulo o frase poética (Book Antiqua italic)
- Línea divisora hairline
- Bloque descripción (Book Antiqua, cuerpo)
- Datos prácticos en grilla: fechas · modalidad · lugar (Letter Gothic Std uppercase)
- Bloque "Para quién" o "Requisitos"
- Bloque precio + inscripción (wine accent para CTA o precio)
- Pie: contacto + logo pequeño
</estructura>

<brand>
- Usá el Design System NFCD cargado en este proyecto
- Base: ui_kits/editorial/index.html como referencia de layout
- Tipografía: Amatic SC display · Book Antiqua cuerpo · Letter Gothic Std labels
- Paleta tinta-sobre-papel, acento wine #a7274c solo en 1 elemento por página
- Sin gradientes. Sin emoji. Bordes hairline. Márgenes generosos.
- Voz: español rioplatense, poético-ensayístico
</brand>

Generá el artifact HTML de la ficha A4 completa.
```

---

## Export PDF

Desde Claude Design: **File → Download → PDF**
Nombre: `A4_[descripcion]_[AAAA-MM].pdf`
Destino local: `design/a4/exports/pdf/`
