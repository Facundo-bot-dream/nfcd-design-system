Labelled input for forms — inscription, contact, newsletter. Mono uppercase label, serif input text, wine focus ring.

```jsx
<Field label="Nombre" placeholder="Tu nombre" value={v} onChange={e => setV(e.target.value)} />
<Field label="Mensaje" multiline rows={4} hint="Contanos qué te interesa." />
```

Set `multiline` for a textarea, `type` for email/tel, `hint` for helper text below.
