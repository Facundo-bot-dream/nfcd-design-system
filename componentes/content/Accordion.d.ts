import * as React from "react";

/**
 * Collapsible "Ver detalles" panel that animates max-height to the
 * measured content height, with a rotating chevron. Pair with key-fact
 * cards above it for sections that mix hard data with long legal copy.
 */
export interface AccordionProps {
  /** Trigger label when collapsed. @default "Ver detalles" */
  label?: string;
  /** Trigger label when expanded. Falls back to `label`. */
  labelOpen?: string;
  /** Start expanded. @default false */
  defaultOpen?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Collapsible details panel with measured max-height and rotating chevron. */
export function Accordion(props: AccordionProps): JSX.Element;
