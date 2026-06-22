import React from "react";

/**
 * NFCD Card — warm paper surface with a near-square corner and a
 * hairline border. Optional wine top-accent and graphite imagery.
 */
export function Card({ children, accent = false, raised = false, as = "div", style, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        background: raised ? "var(--surface-raised)" : "var(--surface-card)",
        border: "1px solid var(--border-soft)",
        borderTop: accent ? "3px solid var(--brand)" : "1px solid var(--border-soft)",
        borderRadius: "var(--radius-sm)",
        boxShadow: raised ? "var(--shadow-md)" : "var(--shadow-none)",
        padding: "var(--space-5)",
        color: "var(--text-body)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
