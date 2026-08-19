import "./AvailabilityBadge.css";

function AvailabilityBadge({ children = "Available for select projects" }) {
  return (
    <div className="availability-badge">
      <span className="availability-badge__dot" />

      <span>{children}</span>
    </div>
  );
}

export default AvailabilityBadge;
