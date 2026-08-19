import "./Pin.css";

function Pin({ position = "top-right", color = "accent", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pin pin--${position} pin--${color} ${className}`}
    >
      <span className="pin__head" />
      <span className="pin__shadow" />
    </span>
  );
}

export default Pin;
