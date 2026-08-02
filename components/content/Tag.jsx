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
        fontFamily: "var(--font-label)",
        fontSize: "var(--font-size-2xs)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "var(--space-1) var(--space-3)",
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
