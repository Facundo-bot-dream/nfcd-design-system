import * as React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "soft" */
  variant?: "soft" | "solid";
  /** @default "wine" */
  tone?: "wine" | "ink" | "sage";
  style?: React.CSSProperties;
}

/** Square status / format marker (e.g. PRESENCIAL, ONLINE, COMPLETO). */
export function Badge(props: BadgeProps): JSX.Element;
