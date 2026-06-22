import React from "react";

/**
 * NFCD Field — labelled text input / textarea. Mono uppercase label,
 * serif input text, ink underline that turns wine on focus.
 */
export function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  rows = 3,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? "f-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);

  const control = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-serif)",
    fontSize: "16px",
    color: "var(--ink-900)",
    background: "var(--paper-pure)",
    border: "1px solid " + (focus ? "var(--wine-500)" : "var(--border-soft)"),
    borderRadius: "var(--radius-sm)",
    padding: "10px 12px",
    outline: "none",
    boxShadow: focus ? "0 0 0 3px var(--wine-050)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-quiet), box-shadow var(--dur-fast) var(--ease-quiet)",
    resize: multiline ? "vertical" : undefined,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}>{label}</label>
      )}
      {multiline ? (
        <textarea id={fieldId} rows={rows} value={value} onChange={onChange} placeholder={placeholder}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={control} {...rest} />
      ) : (
        <input id={fieldId} type={type} value={value} onChange={onChange} placeholder={placeholder}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={control} {...rest} />
      )}
      {hint && (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-faint)" }}>{hint}</span>
      )}
    </div>
  );
}
