import "./PaperCard.css";

function PaperCard({
  children,
  className = "",
  variant = "default",
  rotation = 0,
  as: Component = "article",
  ...props
}) {
  return (
    <Component
      className={`paper-card paper-card--${variant} ${className}`}
      style={{
        "--card-rotation": `${rotation}deg`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default PaperCard;
