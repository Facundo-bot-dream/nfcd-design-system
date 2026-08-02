import * as React from "react";

export interface FieldProps {
  /** Mono uppercase label above the control. */
  label?: string;
  /** Small helper text below. */
  hint?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  /** @default "text" */
  type?: string;
  /** Render a textarea. @default false */
  multiline?: boolean;
  rows?: number;
  id?: string;
  style?: React.CSSProperties;
}

/** Labelled text input or textarea with a wine focus ring. */
export function Field(props: FieldProps): JSX.Element;
