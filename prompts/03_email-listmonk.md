# Prompt master — Email / Newsletter Listmonk NFCD
> Superficie: HTML email · ancho 600px · diseñar en Claude Design · exportar raw HTML para Listmonk

---

## Flujo de dos outputs — siempre

| Output | Dónde | Para qué |
|---|---|---|
| `.dc.html` | Claude Design | Editar visualmente, iterar, archivar |
| `.html` raw | Listmonk → Format = Raw HTML | Enviar la campaña |

**Diseño:** abrí el template `Email NFCD · Newsletter` en Claude Design → editá contenido → pedí "dame el raw HTML para Listmonk".
**No** generar el email desde cero en Cowork — usar siempre el template de Design como base.

---

## Variables a completar

```
[TIPO_EMAIL]           → "novedad" / "encuentro" / "convocatoria" / "recordatorio"
[ASUNTO]               → línea de asunto del email, ej: "Encuentros de invierno · ya están abiertos"
[SALUDO]               → ej: "Hola," / "Hola {{.SubscriberFirstName}},"
[TITULO_PRINCIPAL]     → título grande del email
[INTRO]                → párrafo inicial, voz poética, 2-3 oraciones
[CUERPO]               → desarrollo, puede tener subtítulos y párrafos
[CTA_TEXTO]            → texto del botón, ej: "Inscribite"
[CTA_URL]              → URL del botón
[FIRMA]                → ej: "Roxana · NFCD"
[UNSUBSCRIBE]          → usar variable Listmonk: {{.UnsubscribeURL}}
```

---

## PROMPT

```
Creá un email HTML para Listmonk de tipo [TIPO_EMAIL] para NFCD.

<brief>
Asunto: [ASUNTO]
Tipo: [TIPO_EMAIL]
Título: [TITULO_PRINCIPAL]
Intro: [INTRO]
Cuerpo: [CUERPO]
CTA: [CTA_TEXTO] → [CTA_URL]
Firma: [FIRMA]
</brief>

<specs>
- Ancho máximo: 600px, centrado
- Inline styles en todos los elementos (compatibilidad Gmail, Outlook, Apple Mail)
- Sin web fonts externas — usar font-family stack: 'Book Antiqua', Georgia, serif para cuerpo; 'Courier New', monospace para labels
- Amatic SC no disponible en email — usar Georgia o serif system para títulos
- Fondo: #faf8f3 (papel) · Texto: #1a1410 (tinta) · Acento: #a7274c (wine)
- Sin imágenes de fondo. Las imágenes de marca (logo) con src absoluto a GitHub o CDN.
- Botón CTA: fondo wine #a7274c, texto blanco, padding 12px 24px, border-radius 4px
- Variables Listmonk: {{.SubscriberFirstName}}, {{.UnsubscribeURL}}
</specs>

<estructura>
- Header: logo NFCD (img src desde GitHub raw) + línea hairline
- Título principal (serif grande)
- Intro (párrafo poético)
- Cuerpo principal (puede incluir: subtítulos, listas simples, datos de encuentro)
- Bloque CTA centrado (botón wine)
- Firma: nombre + NFCD
- Footer: dirección física opcional + link de desuscripción {{.UnsubscribeURL}}
</estructura>

<brand>
- Voz: español rioplatense, poético-ensayístico, no corporativo
- Paleta: papel #faf8f3 · tinta #1a1410 · wine #a7274c solo para CTA y énfasis
- Sin emoji. Sin gradientes.
- Usar como referencia: templates/email-listmonk/Email_NFCD_modelo.html
</brand>

Generá el HTML completo del email, listo para pegar en Listmonk.
```

---

## Después de generar

1. Copiar el HTML generado
2. En Listmonk: **Campaigns → Templates → New** (para reusar) o directamente en la campaña
3. Guardar archivo como `Email_[descripcion]_[AAAA-MM].html` en `design/newsletter/`
4. Si el template es reutilizable → copiar también a `templates/email-listmonk/`

---

## Variables nativas de Listmonk disponibles

```
{{.SubscriberFirstName}}   → nombre del suscriptor
{{.SubscriberLastName}}    → apellido
{{.SubscriberEmail}}       → email
{{.UnsubscribeURL}}        → link de desuscripción (obligatorio)
{{.OptinURL}}              → confirmación doble opt-in
```
