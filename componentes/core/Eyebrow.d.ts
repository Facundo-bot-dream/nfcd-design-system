import * as React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  /** @default "wine" */
  tone?: "wine" | "ink" | "muted" | "onInk";
  /** Element to render. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/** Wide-tracked uppercase kicker label that mirrors the wordmark's spacing. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
