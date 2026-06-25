import React from "react";

/**
 * NFCD Rule — an ink divider. Short "tick" by default (logo-like),
 * or full-width hairline. Vertical option for inline separation.
 */
export function Rule({ variant = "tick", vertical = false, tone = "ink", style, ...rest }) {
  const color = tone === "wine" ? "var(--brand)" : tone === "faint" ? "var(--border-hair)" : "var(--rule-ink)";

  if (vertical) {
    return <span role="separator" style={{ display: "inline-block", width: "1px", alignSelf: "stretch", background: "var(--border-soft)", ...style }} {...rest} />;
  }
  const variants = {
    tick: { width: "48px", height: "2px", background: color },
    full: { width: "100%", height: "1px", background: "var(--border-hair)" },
    strong: { width: "100%", height: "2px", background: color },
  };
  return <hr style={{ border: 0, margin: 0, ...variants[variant], ...style }} {...rest} />;
}
