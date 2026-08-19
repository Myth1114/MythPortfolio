import "./Tape.css";

function Tape({ position = "top-center", rotation = -2, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`tape tape--${position} ${className}`}
      style={{
        "--tape-rotation": `${rotation}deg`,
      }}
    />
  );
}

export default Tape;
