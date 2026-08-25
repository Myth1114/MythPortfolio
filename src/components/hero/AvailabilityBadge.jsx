import "./AvailabilityBadge.css";

function AvailabilityBadge({ children = "alive" }) {
  return (
    <div className="availability-badge">
      <span className="availability-badge__dot" />

      <span>{children}</span>
    </div>
  );
}

export default AvailabilityBadge;
