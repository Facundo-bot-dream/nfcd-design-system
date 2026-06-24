# Prompt master — Carrusel IG NFCD
> Superficie: Instagram carousel · 1080 × 1350 px por slide · usar en Claude Design

---

## Cómo usar este prompt

1. Abrí Claude Design → proyecto NFCD
2. Completá las variables entre `[ ]`
3. Pegá el bloque "PROMPT" completo en el chat de Design
4. Pedí los slides de a uno o todos juntos

---

## Variables a completar

```
[TITULO_ENCUENTRO]     → ej: "Encuentros de Invierno 2026"
[SUBTITULO]            → ej: "Profundización y Alineación"
[FECHAS]               → ej: "Julio — Agosto 2026"
[MODALIDAD]            → "Presencial · Bariloche" / "Virtual" / "Presencial + Virtual"
[DESCRIPCION_BREVE]    → 1-2 oraciones, voz poética, rioplatense
[N_SLIDES]             → número total de slides (ej: 9)
[PRECIO_O_CUPOS]       → opcional
[LINK_INSCRIPCION]     → ej: naturalezadelafuerza.org/inscripcion
```

---

## PROMPT

```
Creá un carrusel de Instagram de [N_SLIDES] slides para NFCD.

<brief>
Encuentro: [TITULO_ENCUENTRO]
Subtítulo: [SUBTITULO]
Fechas: [FECHAS]
Modalidad: [MODALIDAD]
Descripción: [DESCRIPCION_BREVE]
Inscripción: [LINK_INSCRIPCION]
</brief>

<specs>
- Dimensión por slide: 1080 × 1350 px
- Formato de salida: artifact HTML con todos los slides en columna vertical, separados, listos para screenshot individual
- Cada slide es un div independiente de exactamente 1080×1350px
</specs>

<estructura_slides>
01 — Portada: título grande, fecha, logo NFCD
02 — Presentación: qué es el encuentro, voz poética breve
03 — Modalidad y lugar
04 — Encuentros presenciales: fechas y detalle
05 — Encuentros virtuales: fechas y detalle (si aplica)
06 — Dinámica / cómo funciona
07 — Para quién es / requisitos
08 — Sobre Roxana / quién facilita
09 — Inscripción: precio, cupos, link
</estructura_slides>

<brand>
- Usá el Design System NFCD cargado en este proyecto
- Tipografía: Amatic SC para títulos display uppercase · Book Antiqua para cuerpo · Letter Gothic Std para labels y datos concretos
- Paleta: tinta sobre papel, acento wine #a7274c. Sin gradientes.
- Imágenes: grafito monocromático o manchas de Roxana (assets/brand/marks/)
- Sin emoji. Sin stock photos. Bordes hairline, esquinas near-square.
- El wordmark siempre como imagen logo, nunca tipografiado
- Voz: español rioplatense, poético-ensayístico
</brand>

Generá el artifact HTML completo con los [N_SLIDES] slides.
```

---

## Export PNG (después de generar)

Por cada slide:
```
Exportá el slide [N] como imagen PNG de 1080×1350px
```

Nombrar al descargar: `01-[Titulo].png`, `02-[Titulo].png`, etc.
Destino local: `design/ig/exports/png/`
