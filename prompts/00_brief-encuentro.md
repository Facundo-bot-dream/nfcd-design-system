# Brief maestro — Encuentro NFCD
> Completá este archivo UNA VEZ por encuentro → alimenta las 6 superficies del pipeline

---

## Variables del encuentro

```
TITULO            = "Encuentros de Profundización en Alineación"
SUBTITULO         = "Convivencia y estudio en la sede de NFCD"
TIPO              = "presencial" | "virtual" | "presencial + virtual"
FECHAS_PRES       = "13 al 18 de julio · Invierno 2026"
FECHAS_VIRT       = "23 may · 13 jun · 22 ago · 31 oct"
LUGAR             = "Campo Arroyo del Medio · Bariloche · Patagonia"
DESCRIPCION       = "En 2026, la práctica de Alineación para estudiantes avanzados..."
DESCRIPCION_BREVE = "Una línea, voz poética — para flyer y slide de portada"
PARA_QUIEN        = "Dirigido a quienes están activas en la práctica de Alineación..."
DINAMICA          = "Cada encuentro se diseña a partir de las preguntas y procesos..."
PRECIO            = "$15.000 · cupos limitados"
LINK_WEB          = "https://naturalezadelafuerza.org/encuentros-de-profundizacion/"
LINK_INSCRIPCION  = "https://naturalezadelafuerza.org/inscripcion/"
LINK_VIDEO        = "https://www.youtube.com/watch?v=WCXQtJq61AU"
IMAGEN_VIDEO      = "https://naturalezadelafuerza.org/wp-content/uploads/..."
FECHA_LIMITE      = "Inscripción hasta el 30 de junio"
N_SLIDES_CARRUSEL = "9"   ← ajustar según el encuentro (puede ser más o menos)
```

---

## Cómo usar este brief

### Opción A — Pedirle a Design / Cowork que lea el brief
```
Leé el archivo prompts/00_brief-encuentro.md del repo NFCD.
Usá esas variables para generar [superficie].
```

### Opción B — Con el prompt específico de la superficie
```
Leé prompts/00_brief-encuentro.md y generá [superficie] siguiendo prompts/0X_[superficie].md
```

---

## Pipeline completo — un encuentro, seis outputs

```
BRIEF (este archivo)
         │
         ├── 06_flyer-ig       → PNG 1080×1350     → WhatsApp / Stories / Feed IG
         ├── 01_carrusel-ig    → N PNG 1080×1350   → Instagram (carrusel)
         ├── 03_email-listmonk → HTML raw           → Listmonk → bandeja
         ├── 02_a4-ficha       → PDF A4             → imprimir / compartir
         ├── 04_web-pagina     → HTML + CSS         → WordPress (página del encuentro)
         └── 05_web-carrusel   → HTML + Swiper.js   → WordPress (slider en home)
```

---

## Prompts rápidos por superficie

### Flyer IG / WhatsApp
```
Leé prompts/00_brief-encuentro.md y generá el flyer siguiendo prompts/06_flyer-ig.md
```

### Carrusel IG
```
Leé prompts/00_brief-encuentro.md y generá el carrusel IG siguiendo prompts/01_carrusel-ig.md
```

### Email Listmonk
```
Leé prompts/00_brief-encuentro.md y generá el email siguiendo prompts/03_email-listmonk.md
```

### Ficha A4
```
Leé prompts/00_brief-encuentro.md y generá la ficha A4 siguiendo prompts/02_a4-ficha.md
```

### Página web WordPress
```
Leé prompts/00_brief-encuentro.md y generá la página web siguiendo prompts/04_web-pagina.md
```

### Slider home WordPress
```
Leé prompts/00_brief-encuentro.md y generá el slider web siguiendo prompts/05_web-carrusel.md
```

---

*Una sola fuente de verdad. Seis outputs. Coherencia total.*
