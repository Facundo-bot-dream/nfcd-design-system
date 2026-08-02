Carrusel para contenido largo en mobile — cada slide ocupa el 100% del viewport con scroll-snap, formato IG 4:5 por defecto.

```jsx
<MobileCarousel>
  <Card accent>
    <Eyebrow>Encuentro 01</Eyebrow>
    <h3>El cuerpo que escucha</h3>
  </Card>
  <Card accent>
    <Eyebrow>Encuentro 02</Eyebrow>
    <h3>La médula participante</h3>
  </Card>
</MobileCarousel>
```

Flechas prev/next pulsan suavemente para invitar a deslizar; se ocultan solas con un slide o menos. El dot activo emite una onda (ripple) continua — los dots nunca cambian de tamaño, solo el aura. `aspectRatio` acepta cualquier valor CSS (default `"1080 / 1350"`, el 4:5 de Instagram); pasá `"auto"` si el contenido define su propio alto.
