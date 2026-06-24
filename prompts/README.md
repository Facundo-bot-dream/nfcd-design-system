# Prompts NFCD — Pipeline de comunicación

Un encuentro → seis outputs coherentes desde una sola fuente.

## Flujo

```
00_brief-encuentro.md   ← completar UNA VEZ por encuentro
        │
        ├── 01_carrusel-ig.md    → N PNG 1080×1350   → Instagram (carrusel)
        ├── 02_a4-ficha.md       → PDF A4             → imprimir / compartir
        ├── 03_email-listmonk.md → HTML raw           → Listmonk
        ├── 04_web-pagina.md     → HTML + CSS         → WordPress (página)
        ├── 05_web-carrusel.md   → HTML + Swiper.js   → WordPress (slider home)
        └── 06_flyer-ig.md       → PNG 1080×1350      → WhatsApp / Stories / Feed
```

## Archivos

| Archivo | Superficie | Dónde generarlo | Output |
|---|---|---|---|
| `00_brief-encuentro.md` | — fuente de variables — | completar a mano | — |
| `01_carrusel-ig.md` | Carrusel IG 1080×1350 | Claude Design | N PNG |
| `02_a4-ficha.md` | Ficha editorial A4 | Claude Design | PDF |
| `03_email-listmonk.md` | Newsletter | Claude Design | HTML raw |
| `04_web-pagina.md` | Página WordPress | Cowork | HTML + CSS |
| `05_web-carrusel.md` | Slider home WordPress | Cowork | HTML + Swiper.js |
| `06_flyer-ig.md` | Flyer único WhatsApp/IG | Claude Design | PNG |

## Uso rápido

Con el brief completado, pegá en Design o Cowork:

```
Leé prompts/00_brief-encuentro.md y generá [superficie] siguiendo prompts/0X_[superficie].md
```

Design y Cowork leen ambos archivos del repo y producen el output directamente.

## Todos los templates son .dc.html

Cada superficie genera un `.dc.html` guardado en `templates/[superficie]/`.
Para editar después: Design → File → Open → seleccionar el `.dc.html` → modificar → re-exportar.
No hay que regenerar desde cero — los cambios se hacen inline.
