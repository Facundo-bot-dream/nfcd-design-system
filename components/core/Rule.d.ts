import * as React from "react";

export interface RuleProps {
  /** @default "tick" */
  variant?: "tick" | "full" | "strong";
  /** Render a vertical inline separator instead. @default false */
  vertical?: boolean;
  /** @default "ink" */
  tone?: "ink" | "wine" | "faint";
  style?: React.CSSProperties;
}

/** Ink divider — a short logo-like tick, a full hairline, or a strong rule. */
export function Rule(props: RuleProps): JSX.Element;
