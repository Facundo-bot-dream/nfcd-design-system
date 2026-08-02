import React, { useRef, useState, useEffect } from "react";

const KEYFRAMES_ID = "nfcd-accordion-keyframes";
const KEYFRAMES = `@keyframes nfcd-chevron-invite { 0%,100% { transform:translateY(0); opacity:.7; } 50% { transform:translateY(3px); opacity:1; } }
@keyframes nfcd-peek-invite { 0%,100% { max-height:26px; opacity:.4; } 50% { max-height:46px; opacity:.65; } }`;
function ensureKeyframes() {
  if (typeof document === "undefined" || document.getElementById(KEYFRAMES_ID)) return;
  const style = document.createElement("style");
  style.id = KEYFRAMES_ID;
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
}

/**
 * NFCD Accordion — collapsible "Ver detalles" panel for long
 * conditions/legal copy, paired with key-fact cards above it.
 * Animates max-height to the measured content height (never a
 * fixed guess), with a rotating chevron.
 */
export function Accordion({
  label = "Ver detalles",
  labelOpen,
  defaultOpen = false,
  children,
  style,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(defaultOpen ? "none" : 0);
  const [hover, setHover] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => { ensureKeyframes(); }, []);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) {
      setHeight(el.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open, children]);

  return (
    <div style={{ borderTop: "1px solid var(--border-hair)", ...style }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "var(--space-4) 0",
          fontFamily: "var(--font-label)",
          fontSize: "var(--font-size-sm)",
          fontWeight: "var(--weight-bold)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: hover && !open ? "var(--chip-sage-text)" : "var(--brand)",
          lineHeight: 1,
          transition: "color var(--dur-base) var(--ease-quiet)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>{open ? (labelOpen || label) : label}</span>
        <svg
          viewBox="0 0 24 24"
          width="25"
          height="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : hover ? "rotate(35deg)" : "rotate(0deg)",
            transition: "transform var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet)",
            animation: open ? "none" : "nfcd-chevron-invite 1.8s ease-in-out infinite",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? (height === "none" ? "none" : `${height}px`) : (hover ? "26px" : "0px"),
          overflow: "hidden",
          opacity: open ? 1 : hover ? 0.4 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          transition: "max-height var(--dur-slow) var(--ease-quiet), opacity var(--dur-slow) var(--ease-quiet), transform var(--dur-slow) var(--ease-quiet)",
          animation: !open && hover ? "nfcd-peek-invite 1.8s ease-in-out infinite" : "none",
        }}
      >
        <div ref={panelRef} style={{ paddingBottom: "var(--space-5)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
