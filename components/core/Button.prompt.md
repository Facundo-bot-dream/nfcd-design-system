Wine-filled or ink-outlined call to action in wide-tracked uppercase mono — use for any primary or secondary action.

```jsx
<Button variant="solid" onClick={go}>Inscribirme</Button>
<Button variant="outline" size="lg">Ver programa</Button>
<Button variant="link" href="#">Leer más</Button>
```

Variants: `solid` (wine, primary), `outline` (ink border, inverts to ink on hover), `ghost` (bare), `link` (underlined wine). Sizes: `sm` · `md` · `lg`. Pass `href` to render an `<a>`. Labels are auto-uppercased — write them in normal case.
