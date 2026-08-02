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
    onInk: "var(--text-on-ink-muted)",
  };
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-label)",
        fontSize: "var(--font-size-xs)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-wordmark)",
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
