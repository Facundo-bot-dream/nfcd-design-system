const { Eyebrow, Rule, Button } = window.NFCDDesignSystem_1d3b67;

function AboutBlock() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "76px 48px", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 52, alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="../../assets/logos/nfcd_isologov1_color_fondotrasparente.png" alt="Naturaleza de la Fuerza"
          style={{ maxWidth: "100%", maxHeight: 380 }} />
      </div>
      <div>
        <Eyebrow>La práctica</Eyebrow>
        <div style={{ height: 12 }} />
        <Rule tone="wine" />
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 34, lineHeight: 1.2, color: "var(--ink-900)", margin: "20px 0 0" }}>
          Hueso y vuelo: el cuerpo como campo de conocimiento
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "18px 0 0", maxWidth: "58ch" }}>
          La danza no ilustra una idea: la produce. Cada práctica abre el cuerpo a las
          fuerzas que lo atraviesan, y en ese suceso aparece un saber que no pasa primero
          por las palabras. Dirigido por <strong>Roxana Galand</strong>, el sistema tiene su
          primera sede en Campo Arroyo del Medio, Bariloche, Patagonia.
        </p>
        <div style={{ marginTop: 28 }}>
          <Button variant="solid">Conocer la investigación</Button>
        </div>
      </div>
    </section>
  );
}

window.AboutBlock = AboutBlock;
