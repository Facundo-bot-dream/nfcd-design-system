const { Eyebrow, Field, Button } = window.NFCDDesignSystem_1d3b67;

function SiteFooter() {
  return (
    <footer style={{ background: "var(--surface-ink)", color: "var(--text-on-ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 48px 40px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48 }}>
        <div>
          <img src="../../assets/logos/nfcd_isologov2_blanco_fondotrasparente.png" alt="NFCD" style={{ height: 64, marginBottom: 18 }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-on-ink-muted)", maxWidth: "34ch", margin: 0 }}>
            Naturaleza de la fuerza en el cuerpo y la danza. Prácticas e investigación
            hacia una conciencia planetaria.
          </p>
        </div>
        <div>
          <Eyebrow tone="onInk">Sede</Eyebrow>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "var(--font-size-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-on-ink-muted)", marginTop: 14 }}>
            Campo Arroyo del Medio<br />Bariloche · Patagonia<br />Argentina
          </p>
          <div style={{ marginTop: 18 }}>
            <Eyebrow tone="onInk">Dirección</Eyebrow>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "var(--font-size-sm)", color: "var(--text-on-ink-muted)", marginTop: 12 }}>Roxana Galand</p>
          </div>
        </div>
        <div>
          <Eyebrow tone="onInk">Boletín</Eyebrow>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--text-on-ink-muted)", margin: "12px 0 14px" }}>
            Encuentros, publicaciones y notas del Campo.
          </p>
          <Field placeholder="tu@correo.com" type="email" />
          <div style={{ height: 12 }} />
          <Button variant="solid" size="sm">Suscribirme</Button>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "20px 48px", maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-label)", fontSize: "var(--font-size-2xs)", letterSpacing: "0.1em", color: "var(--text-on-ink-faint)" }}>© 2026 NFCD</span>
        <span style={{ fontFamily: "var(--font-label)", fontSize: "var(--font-size-2xs)", letterSpacing: "0.1em", color: "var(--text-on-ink-faint)" }}>Instagram · Contacto</span>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
