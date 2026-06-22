import * as React from "react";

/**
 * Warm-paper container with a hairline border and near-square corner.
 * @startingPoint section="Content" subtitle="Paper card with optional wine accent" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Show the 3px wine top accent. @default false */
  accent?: boolean;
  /** Raised paper tone + soft shadow. @default false */
  raised?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/** Warm-paper container with a hairline border and near-square corner. */
export function Card(props: CardProps): JSX.Element;
