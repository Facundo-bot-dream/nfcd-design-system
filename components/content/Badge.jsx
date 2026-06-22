import React from "react";

/**
 * NFCD Badge — status / format marker. Square-ish, solid or soft.
 */
export function Badge({ children, variant = "soft", tone = "wine", style, ...rest }) {
  const palette = {
    wine: { strong: "var(--wine-600)", soft: "var(--wine-050)", softText: "var(--wine-700)", line: "var(--wine-300)" },
    ink: { strong: "var(--ink-900)", soft: "var(--surface-sunk)", softText: "var(--ink-800)", line: "var(--border-soft)" },
    sage: { strong: "var(--sage-700)", soft: "var(--sage-100)", softText: "var(--sage-700)", line: "var(--sage-300)" },
  }[tone];

  const styles =
    variant === "solid"
      ? { background: palette.strong, color: "var(--paper-000)", border: "1px solid " + palette.strong }
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
