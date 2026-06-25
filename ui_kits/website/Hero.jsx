const { Button, Eyebrow, Rule } = window.NFCDDesignSystem_1d3b67;

function Hero() {
  return (
    <section style={{
      display: "grid", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center",
      gap: 40, padding: "76px 48px 64px", maxWidth: 1280, margin: "0 auto",
    }}>
      <div>
        <Eyebrow>Sistema de prácticas e investigación</Eyebrow>
        <div style={{ height: 14 }} />
        <Rule tone="wine" />
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 92,
          lineHeight: 0.92, letterSpacing: "0.03em", textTransform: "uppercase",
          color: "var(--text-strong)", margin: "22px 0 0",
        }}>
          Naturaleza<br />de la fuerza
        </h1>
        <p style={{
          fontFamily: "var(--font-serif)", fontSize: 19, lineHeight: 1.55,
          color: "var(--text-body)", maxWidth: "42ch", margin: "22px 0 0",
        }}>
          Una práctica que se involucra en los sucesos del cuerpo, las fuerzas y la
          danza como campos de acceso al conocimiento — hacia una conciencia planetaria.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
          <Button variant="solid" size="lg">Ver encuentros</Button>
          <Button variant="outline" size="lg">La investigación</Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="../../assets/logos/nfcd_logo_alpha_light.png" alt="Costillar y mariposa"
          style={{ maxWidth: "100%", maxHeight: 460, mixBlendMode: "var(--img-graphite-blend)" }} />
      </div>
    </section>
  );
}

window.Hero = Hero;
