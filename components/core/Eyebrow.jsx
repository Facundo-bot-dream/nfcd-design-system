import React from "react";

/**
 * NFCD Eyebrow — wide-tracked uppercase mono label.
 * Mirrors the logo's letterspacing. Use above titles, on cards,
 * as section kickers and metadata.
 */
export function Eyebrow({ children, tone = "wine", as = "div", style, ...rest }) {
  const tones = {
    wine: "var(--text-accent)",
    ink: "var(--text-body)",
    muted: "var(--text-muted)",
    onInk: "var(--ink-400)",
  };
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: tones[tone] || tones.wine,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
