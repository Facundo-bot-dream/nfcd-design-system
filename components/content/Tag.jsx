import React from "react";

/**
 * NFCD Tag — small pill chip for categories / themes (mono, tracked).
 */
export function Tag({ children, tone = "wine", style, ...rest }) {
  const tones = {
    wine: { background: "var(--wine-050)", color: "var(--wine-700)", border: "1px solid var(--wine-200)" },
    ink: { background: "var(--surface-sunk)", color: "var(--ink-700)", border: "1px solid var(--border-soft)" },
    sage: { background: "var(--sage-100)", color: "var(--sage-700)", border: "1px solid var(--sage-300)" },
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
