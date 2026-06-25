/* @ds-bundle: {"format":3,"namespace":"NFCDDesignSystem_1d3b67","components":[{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/content/Badge.jsx":"39746424992c","components/content/Card.jsx":"789f6f7520ac","components/content/Tag.jsx":"f6d0ec616779","components/core/Button.jsx":"88256ffe65cf","components/core/Eyebrow.jsx":"bb679ffee191","components/core/Rule.jsx":"54ed6df28e17","components/forms/Field.jsx":"1fd43c14df8e","listmonk_public_es.js":"a99eb0c124e2","ui_kits/website/AboutBlock.jsx":"4bcfc12d6fd1","ui_kits/website/EncuentrosGrid.jsx":"2ae73f6bc418","ui_kits/website/Hero.jsx":"3f1bee1f9ab2","ui_kits/website/SiteFooter.jsx":"2d2a1b954309","ui_kits/website/SiteHeader.jsx":"97915f9dec62"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NFCDDesignSystem_1d3b67 = window.NFCDDesignSystem_1d3b67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
function Badge({ children, variant = "soft", tone = "wine", style, ...rest }) {
  const palette = {
    wine: { strong: "var(--chip-wine-solid)", soft: "var(--chip-wine-bg)", softText: "var(--chip-wine-text)", line: "var(--chip-wine-line)" },
    ink: { strong: "var(--chip-ink-solid)", soft: "var(--chip-ink-bg)", softText: "var(--chip-ink-text)", line: "var(--chip-ink-line)" },
    sage: { strong: "var(--chip-sage-solid)", soft: "var(--chip-sage-bg)", softText: "var(--chip-sage-text)", line: "var(--chip-sage-line)" }
  }[tone];
  const styles = variant === "solid" ? { background: palette.strong, color: "var(--chip-on-solid)", border: "1px solid " + palette.strong } : { background: palette.soft, color: palette.softText, border: "1px solid " + palette.line };
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: "var(--radius-xs)",
        ...styles,
        ...style
      },
      ...rest
    },
    children
  );
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({ children, accent = false, raised = false, as = "div", style, ...rest }) {
  const Tag = as;
  return /* @__PURE__ */ React.createElement(
    Tag,
    {
      style: {
        background: raised ? "var(--surface-raised)" : "var(--surface-card)",
        border: "1px solid var(--border-soft)",
        borderTop: accent ? "3px solid var(--brand)" : "1px solid var(--border-soft)",
        borderRadius: "var(--radius-sm)",
        boxShadow: raised ? "var(--shadow-md)" : "var(--shadow-none)",
        padding: "var(--space-5)",
        color: "var(--text-body)",
        ...style
      },
      ...rest
    },
    children
  );
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function Tag({ children, tone = "wine", style, ...rest }) {
  const tones = {
    wine: { background: "var(--chip-wine-bg)", color: "var(--chip-wine-text)", border: "1px solid var(--chip-wine-line)" },
    ink: { background: "var(--chip-ink-bg)", color: "var(--chip-ink-text)", border: "1px solid var(--chip-ink-line)" },
    sage: { background: "var(--chip-sage-bg)", color: "var(--chip-sage-text)", border: "1px solid var(--chip-sage-line)" }
  };
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
        ...style
      },
      ...rest
    },
    children
  );
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "solid",
  size = "md",
  disabled = false,
  type = "button",
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { fontSize: "11px", padding: "7px 14px", letterSpacing: "0.14em" },
    md: { fontSize: "12px", padding: "11px 22px", letterSpacing: "0.16em" },
    lg: { fontSize: "13px", padding: "15px 30px", letterSpacing: "0.18em" }
  };
  const base = {
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    fontWeight: 700,
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "1.5px solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    solid: { background: "var(--brand)", color: "var(--text-on-wine)", borderColor: "var(--brand)" },
    outline: { background: "transparent", color: "var(--text-strong)", borderColor: "var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--text-body)", borderColor: "transparent" },
    link: {
      background: "transparent",
      color: "var(--text-accent)",
      borderColor: "transparent",
      borderRadius: 0,
      padding: "2px 0",
      borderBottom: "1.5px solid var(--text-accent)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = !disabled && hover ? {
    solid: { background: "var(--brand-hover)", borderColor: "var(--brand-hover)" },
    outline: { background: "var(--text-strong)", color: "var(--surface-page)" },
    ghost: { background: "var(--surface-sunk)" },
    link: { color: "var(--brand-press)", borderColor: "var(--brand)" }
  }[variant] : {};
  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };
  return /* @__PURE__ */ React.createElement(
    Tag,
    {
      ...tagProps,
      onClick: disabled ? void 0 : onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: { ...base, ...variants[variant], ...hoverStyles, ...style },
      ...rest
    },
    children
  );
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({ children, tone = "wine", as = "div", style, ...rest }) {
  const tones = {
    wine: "var(--text-accent)",
    ink: "var(--text-body)",
    muted: "var(--text-muted)",
    onInk: "var(--ink-400)"
  };
  const Tag = as;
  return /* @__PURE__ */ React.createElement(
    Tag,
    {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: tones[tone] || tones.wine,
        ...style
      },
      ...rest
    },
    children
  );
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function Rule({ variant = "tick", vertical = false, tone = "ink", style, ...rest }) {
  const color = tone === "wine" ? "var(--brand)" : tone === "faint" ? "var(--border-hair)" : "var(--rule-ink)";
  if (vertical) {
    return /* @__PURE__ */ React.createElement("span", { role: "separator", style: { display: "inline-block", width: "1px", alignSelf: "stretch", background: "var(--border-soft)", ...style }, ...rest });
  }
  const variants = {
    tick: { width: "48px", height: "2px", background: color },
    full: { width: "100%", height: "1px", background: "var(--border-hair)" },
    strong: { width: "100%", height: "2px", background: color }
  };
  return /* @__PURE__ */ React.createElement("hr", { style: { border: 0, margin: 0, ...variants[variant], ...style }, ...rest });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  rows = 3,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? "f-" + String(label).toLowerCase().replace(/\s+/g, "-") : void 0);
  const control = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-serif)",
    fontSize: "16px",
    color: "var(--text-strong)",
    background: "var(--surface-card)",
    border: "1px solid " + (focus ? "var(--focus-ring)" : "var(--border-soft)"),
    borderRadius: "var(--radius-sm)",
    padding: "10px 12px",
    outline: "none",
    boxShadow: focus ? "0 0 0 3px var(--brand-tint)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-quiet), box-shadow var(--dur-fast) var(--ease-quiet)",
    resize: multiline ? "vertical" : void 0
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", ...style } }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: fieldId, style: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--text-muted)"
  } }, label), multiline ? /* @__PURE__ */ React.createElement(
    "textarea",
    {
      id: fieldId,
      rows,
      value,
      onChange,
      placeholder,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: control,
      ...rest
    }
  ) : /* @__PURE__ */ React.createElement(
    "input",
    {
      id: fieldId,
      type,
      value,
      onChange,
      placeholder,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: control,
      ...rest
    }
  ), hint && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-faint)" } }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// listmonk_public_es.js
try { (() => {
/* ============================================================
   NFCD · Listmonk — Español para PÁGINAS PÚBLICAS
   (baja, gestión de suscripción, confirmaciones)
   Pegar en: Settings → Appearance → Public → Custom JavaScript
   Luego: Save.
   ============================================================ */
(function () {
  // Inglés (tal como aparece) → Español (cálido y simple)
  var MAP = {
    "Unsubscribe": "Darse de baja",
    "Do you want to unsubscribe from this mailing list?":
      "¿Querés dejar de recibir nuestros correos?",
    "Unsubscribe from all future e-mails.":
      "No deseo recibir más correos de Naturaleza de la Fuerza.",
    "Manage preferences": "Gestionar mis preferencias",
    "Privacy and data": "Privacidad y datos",
    "Export your data": "Exportar mis datos",
    "A copy of your data will be e-mailed to you.":
      "Recibirás una copia de tus datos por correo.",
    "Wipe your data": "Borrar mis datos",
    "Delete all your subscriptions and related data permanently.":
      "Eliminar todas tus suscripciones y datos de forma permanente.",
    "Continue": "Continuar",
    "Confirm": "Confirmar",
    "Subscribe": "Suscribirme",
    "Subscription": "Suscripción",
    "Your subscription has been confirmed.": "¡Tu suscripción fue confirmada!",
    "You have been unsubscribed.": "Listo, dejaste de recibir nuestros correos.",
    "You will no longer receive e-mails from this list.":
      "Ya no recibirás más correos de esta lista.",
    "Sorry, something went wrong.": "Lo sentimos, algo salió mal.",
    "Email": "Correo",
    "Name": "Nombre"
  };

  function translate() {
    // 1) Nodos de texto
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var t = node.nodeValue.trim();
      if (t && MAP[t]) node.nodeValue = node.nodeValue.replace(t, MAP[t]);
    });
    // 2) Botones e inputs
    document.querySelectorAll("button, input[type=submit], input[type=button]").forEach(function (b) {
      var t = (b.value || b.textContent || "").trim();
      if (MAP[t]) { if (b.value) b.value = MAP[t]; else b.textContent = MAP[t]; }
    });
    // 3) Título de la pestaña
    if (MAP[document.title.trim()]) document.title = MAP[document.title.trim()];
    document.documentElement.lang = "es";
  }

  if (document.readyState !== "loading") translate();
  else document.addEventListener("DOMContentLoaded", translate);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "listmonk_public_es.js", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutBlock.jsx
try { (() => {
const { Eyebrow, Rule, Button } = window.NFCDDesignSystem_1d3b67;
function AboutBlock() {
  return /* @__PURE__ */ React.createElement("section", { style: { maxWidth: 1280, margin: "0 auto", padding: "76px 48px", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 52, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../../assets/logos/nfcd_isologov1_color_fondotrasparente.png",
      alt: "Naturaleza de la Fuerza",
      style: { maxWidth: "100%", maxHeight: 380 }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, "La pr\xE1ctica"), /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement(Rule, { tone: "wine" }), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 34, lineHeight: 1.2, color: "var(--text-strong)", margin: "20px 0 0" } }, "Hueso y vuelo: el cuerpo como campo de conocimiento"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "18px 0 0", maxWidth: "58ch" } }, "La danza no ilustra una idea: la produce. Cada pr\xE1ctica abre el cuerpo a las fuerzas que lo atraviesan, y en ese suceso aparece un saber que no pasa primero por las palabras. Dirigido por ", /* @__PURE__ */ React.createElement("strong", null, "Roxana Galand"), ", el sistema tiene su primera sede en Campo Arroyo del Medio, Bariloche, Patagonia."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement(Button, { variant: "solid" }, "Conocer la investigaci\xF3n"))));
}
window.AboutBlock = AboutBlock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EncuentrosGrid.jsx
try { (() => {
const { Card, Tag, Badge, Eyebrow, Button } = window.NFCDDesignSystem_1d3b67;
const ENCUENTROS = [
  {
    season: "Oto\xF1o 2026",
    title: "El cuerpo que escucha",
    desc: "Tres encuentros de pr\xE1ctica som\xE1tica y danza en contacto con el paisaje del Campo.",
    tags: ["Som\xE1tica", "Naturaleza"],
    format: "Presencial",
    hours: "12 h"
  },
  {
    season: "Oto\xF1o 2026",
    title: "Fuerzas y vuelo",
    desc: "Estudio del peso, el impulso y la transformaci\xF3n del gesto a partir del registro anat\xF3mico.",
    tags: ["Danza", "Anatom\xEDa"],
    format: "Presencial",
    hours: "18 h"
  },
  {
    season: "Invierno 2026",
    title: "Conciencia planetaria",
    desc: "Seminario de investigaci\xF3n sobre cuerpo, fuerza y mundo. Lecturas, pr\xE1ctica y escritura.",
    tags: ["Investigaci\xF3n"],
    format: "Online",
    hours: "8 h"
  }
];
function EncuentrosGrid() {
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--surface-raised)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "64px 48px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, "Pr\xF3ximos encuentros"), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 36, color: "var(--ink-900)", margin: "10px 0 0" } }, "Programa 2026")), /* @__PURE__ */ React.createElement(Button, { variant: "link", href: "#" }, "Calendario completo")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 } }, ENCUENTROS.map((e) => /* @__PURE__ */ React.createElement(Card, { key: e.title, accent: true, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Badge, { tone: e.format === "Online" ? "sage" : "ink" }, e.format), /* @__PURE__ */ React.createElement(Badge, null, e.hours)), /* @__PURE__ */ React.createElement(Eyebrow, { tone: "muted" }, e.season), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 23, color: "var(--ink-900)", margin: "8px 0 8px" } }, e.title), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-serif)", fontSize: 15, lineHeight: 1.5, color: "var(--text-body)", margin: 0, flex: 1 } }, e.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, margin: "16px 0" } }, e.tags.map((t, i) => /* @__PURE__ */ React.createElement(Tag, { key: t, tone: i === 1 ? "sage" : "wine" }, t))), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm" }, "Ver ficha"))))));
}
window.EncuentrosGrid = EncuentrosGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EncuentrosGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const { Button, Eyebrow, Rule } = window.NFCDDesignSystem_1d3b67;
function Hero() {
  return /* @__PURE__ */ React.createElement("section", { style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    alignItems: "center",
    gap: 40,
    padding: "76px 48px 64px",
    maxWidth: 1280,
    margin: "0 auto"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, "Sistema de pr\xE1cticas e investigaci\xF3n"), /* @__PURE__ */ React.createElement("div", { style: { height: 14 } }), /* @__PURE__ */ React.createElement(Rule, { tone: "wine" }), /* @__PURE__ */ React.createElement("h1", { style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 92,
    lineHeight: 0.92,
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    color: "var(--text-strong)",
    margin: "22px 0 0"
  } }, "Naturaleza", /* @__PURE__ */ React.createElement("br", null), "de la fuerza"), /* @__PURE__ */ React.createElement("p", { style: {
    fontFamily: "var(--font-serif)",
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--text-body)",
    maxWidth: "42ch",
    margin: "22px 0 0"
  } }, "Una pr\xE1ctica que se involucra en los sucesos del cuerpo, las fuerzas y la danza como campos de acceso al conocimiento \u2014 hacia una conciencia planetaria."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 30 } }, /* @__PURE__ */ React.createElement(Button, { variant: "solid", size: "lg" }, "Ver encuentros"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "lg" }, "La investigaci\xF3n"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../../assets/logos/nfcd_logo_alpha_light.png",
      alt: "Costillar y mariposa",
      style: { maxWidth: "100%", maxHeight: 460, mixBlendMode: "var(--img-graphite-blend)" }
    }
  )));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const { Eyebrow, Field, Button } = window.NFCDDesignSystem_1d3b67;
function SiteFooter() {
  return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--surface-ink)", color: "var(--text-on-ink)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "64px 48px 40px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: "../../assets/logos/nfcd_isologov2_blanco_fondotrasparente.png", alt: "NFCD", style: { height: 64, marginBottom: 18 } }), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-serif)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-300)", maxWidth: "34ch", margin: 0 } }, "Naturaleza de la fuerza en el cuerpo y la danza. Pr\xE1cticas e investigaci\xF3n hacia una conciencia planetaria.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, { tone: "onInk" }, "Sede"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.8, color: "var(--ink-300)", marginTop: 14 } }, "Campo Arroyo del Medio", /* @__PURE__ */ React.createElement("br", null), "Bariloche \xB7 Patagonia", /* @__PURE__ */ React.createElement("br", null), "Argentina"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(Eyebrow, { tone: "onInk" }, "Direcci\xF3n"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-300)", marginTop: 12 } }, "Roxana Galand"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, { tone: "onInk" }, "Bolet\xEDn"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-serif)", fontSize: 14, color: "var(--ink-300)", margin: "12px 0 14px" } }, "Encuentros, publicaciones y notas del Campo."), /* @__PURE__ */ React.createElement(Field, { placeholder: "tu@correo.com", type: "email" }), /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement(Button, { variant: "solid", size: "sm" }, "Suscribirme"))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.12)", padding: "20px 48px", maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-400)" } }, "\xA9 2026 NFCD"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-400)" } }, "Instagram \xB7 Contacto")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const { Button, Eyebrow } = window.NFCDDesignSystem_1d3b67;
function SiteHeader({ onNav }) {
  const links = ["Encuentros", "Investigaci\xF3n", "Publicaciones", "Sobre"];
  return /* @__PURE__ */ React.createElement("header", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 48px",
    borderBottom: "1px solid var(--border-soft)",
    background: "var(--surface-page)",
    position: "sticky",
    top: 0,
    zIndex: 10
  } }, /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => {
    e.preventDefault();
    onNav && onNav("home");
  }, style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement("img", { src: "../../assets/logos/nfcd_isologov2_color_fondotrasparente.png", alt: "NFCD", style: { height: 46 } })), /* @__PURE__ */ React.createElement("nav", { style: { display: "flex", alignItems: "center", gap: 30 } }, links.map((l) => /* @__PURE__ */ React.createElement("a", { key: l, href: "#", onClick: (e) => e.preventDefault(), style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--text-body)",
    textDecoration: "none"
  } }, l)), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "solid" }, "Inscribirme")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Field = __ds_scope.Field;

})();
