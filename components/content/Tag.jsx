import React from "react";

/**
 * NFCD Tag — small pill chip for categories / themes (mono, tracked).
 */
export function Tag({ children, tone = "wine", style, ...rest }) {
  const tones = {
    wine: { background: "var(--chip-wine-bg)", color: "var(--chip-wine-text)", border: "1px solid var(--chip-wine-line)" },
    ink: { background: "var(--chip-ink-bg)", color: "var(--chip-ink-text)", border: "1px solid var(--chip-ink-line)" },
    sage: { background: "var(--chip-sage-bg)", color: "var(--chip-sage-text)", border: "1px solid var(--chip-sage-line)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
