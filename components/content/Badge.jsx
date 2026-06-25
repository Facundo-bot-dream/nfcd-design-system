import React from "react";

/**
 * NFCD Badge — status / format marker. Square-ish, solid or soft.
 */
export function Badge({ children, variant = "soft", tone = "wine", style, ...rest }) {
  const palette = {
    wine: { strong: "var(--chip-wine-solid)", soft: "var(--chip-wine-bg)", softText: "var(--chip-wine-text)", line: "var(--chip-wine-line)" },
    ink: { strong: "var(--chip-ink-solid)", soft: "var(--chip-ink-bg)", softText: "var(--chip-ink-text)", line: "var(--chip-ink-line)" },
    sage: { strong: "var(--chip-sage-solid)", soft: "var(--chip-sage-bg)", softText: "var(--chip-sage-text)", line: "var(--chip-sage-line)" },
  }[tone];

  const styles =
    variant === "solid"
      ? { background: palette.strong, color: "var(--chip-on-solid)", border: "1px solid " + palette.strong }
      : { background: palette.soft, color: palette.softText, border: "1px solid " + palette.line };

  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
