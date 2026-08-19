import "./PageShell.css";

function PageShell({ children, className = "", texture = true }) {
  return (
    <div
      className={`page-shell ${texture ? "paper-texture" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default PageShell;
