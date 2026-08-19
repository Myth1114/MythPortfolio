import { ArrowUpRight } from "lucide-react";
import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  icon = true,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`button button--${variant} button--${size} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {icon && <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />}
    </button>
  );
}

export default Button;
