const { Button, Eyebrow } = window.NFCDDesignSystem_1d3b67;

function SiteHeader({ onNav }) {
  const links = ["Encuentros", "Investigación", "Publicaciones", "Sobre"];
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 48px", borderBottom: "1px solid var(--border-soft)",
      background: "var(--surface-page)", position: "sticky", top: 0, zIndex: 10,
    }}>
      <a href="#" onClick={(e)=>{e.preventDefault(); onNav&&onNav("home");}} style={{ display: "flex", alignItems: "center", position: "relative", height: 46 }}>
        <img className="nfcd-logo-light" src="../../assets/logos/nfcd_isologov2_color_fondotrasparente.png" alt="NFCD" style={{ height: 46 }} />
        <img className="nfcd-logo-dark" src="../../assets/logos/nfcd_isologov2_blanco_fondotrasparente.png" alt="NFCD" style={{ height: 46, position: "absolute", left: 0, top: 0 }} />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e)=>e.preventDefault()} style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--text-body)", textDecoration: "none",
          }}>{l}</a>
        ))}
        <Button size="sm" variant="solid">Inscribirme</Button>
      </nav>
    </header>
  );
}

window.SiteHeader = SiteHeader;
