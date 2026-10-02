import "./AvailabilityBadge.css";

function AvailabilityBadge({ children = "online" }) {
  return (
    <div className="availability-badge">
      <span className="availability-badge__dot" />

      <span>{children}</span>
    </div>
  );
}

export default AvailabilityBadge;
