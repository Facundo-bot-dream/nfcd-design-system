import React from "react";

/**
 * NFCD Button — paper-and-ink button.
 * Variants: solid (wine), outline (ink), ghost, link.
 * Sizes: sm, md, lg. Square-ish corners, quiet motion.
 */
export function Button({
  children,
  variant = "solid",
  size = "md",
  disabled = false,
  type = "button",
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { fontSize: "11px", padding: "7px 14px", letterSpacing: "0.14em" },
    md: { fontSize: "12px", padding: "11px 22px", letterSpacing: "0.16em" },
    lg: { fontSize: "13px", padding: "15px 30px", letterSpacing: "0.18em" },
  };

  const base = {
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    fontWeight: 700,
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "1.5px solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
  };

  const variants = {
    solid: { background: "var(--brand)", color: "var(--text-on-wine)", borderColor: "var(--brand)" },
    outline: { background: "transparent", color: "var(--text-strong)", borderColor: "var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--text-body)", borderColor: "transparent" },
    link: {
      background: "transparent",
      color: "var(--text-accent)",
      borderColor: "transparent",
      borderRadius: 0,
      padding: "2px 0",
      borderBottom: "1.5px solid var(--text-accent)",
    },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyles = !disabled && hover ? {
    solid: { background: "var(--brand-hover)", borderColor: "var(--brand-hover)" },
    outline: { background: "var(--text-strong)", color: "var(--surface-page)" },
    ghost: { background: "var(--surface-sunk)" },
    link: { color: "var(--brand-press)", borderColor: "var(--brand)" },
  }[variant] : {};

  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyles, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
