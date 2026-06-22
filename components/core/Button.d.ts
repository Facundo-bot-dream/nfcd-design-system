import * as React from "react";

/**
 * Paper-and-ink call to action, set in wide-tracked uppercase Letter Gothic.
 * @startingPoint section="Core" subtitle="Wine / outline / ghost / link button" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "solid" */
  variant?: "solid" | "outline" | "ghost" | "link";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  /** Render as an anchor when set. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Paper-and-ink call to action, set in wide-tracked uppercase Letter Gothic.
 */
export function Button(props: ButtonProps): JSX.Element;
