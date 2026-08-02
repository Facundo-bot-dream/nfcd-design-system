import * as React from "react";

export interface TagProps {
  children: React.ReactNode;
  /** @default "wine" */
  tone?: "wine" | "ink" | "sage";
  style?: React.CSSProperties;
}

/** Small pill chip for categories and themes, in tracked uppercase mono. */
export function Tag(props: TagProps): JSX.Element;
