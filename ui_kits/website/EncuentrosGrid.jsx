const { Card, Tag, Badge, Eyebrow, Button } = window.NFCDDesignSystem_1d3b67;

const ENCUENTROS = [
  {
    season: "Otoño 2026",
    title: "El cuerpo que escucha",
    desc: "Tres encuentros de práctica somática y danza en contacto con el paisaje del Campo.",
    tags: ["Somática", "Naturaleza"],
    format: "Presencial",
    hours: "12 h",
  },
  {
    season: "Otoño 2026",
    title: "Fuerzas y vuelo",
    desc: "Estudio del peso, el impulso y la transformación del gesto a partir del registro anatómico.",
    tags: ["Danza", "Anatomía"],
    format: "Presencial",
    hours: "18 h",
  },
  {
    season: "Invierno 2026",
    title: "Conciencia planetaria",
    desc: "Seminario de investigación sobre cuerpo, fuerza y mundo. Lecturas, práctica y escritura.",
    tags: ["Investigación"],
    format: "Online",
    hours: "8 h",
  },
];

function EncuentrosGrid() {
  return (
    <section style={{ background: "var(--surface-raised)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 48px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 }}>
          <div>
            <Eyebrow>Próximos encuentros</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 36, color: "var(--ink-900)", margin: "10px 0 0" }}>
              Programa 2026
            </h2>
          </div>
          <Button variant="link" href="#">Calendario completo</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {ENCUENTROS.map((e) => (
            <Card key={e.title} accent style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                <Badge tone={e.format === "Online" ? "sage" : "ink"}>{e.format}</Badge>
                <Badge>{e.hours}</Badge>
              </div>
              <Eyebrow tone="muted">{e.season}</Eyebrow>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 23, color: "var(--ink-900)", margin: "8px 0 8px" }}>{e.title}</h3>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 15, lineHeight: 1.5, color: "var(--text-body)", margin: 0, flex: 1 }}>{e.desc}</p>
              <div style={{ display: "flex", gap: 8, margin: "16px 0" }}>
                {e.tags.map((t, i) => <Tag key={t} tone={i === 1 ? "sage" : "wine"}>{t}</Tag>)}
              </div>
              <Button variant="outline" size="sm">Ver ficha</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

window.EncuentrosGrid = EncuentrosGrid;
