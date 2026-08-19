import Pin from "../primitives/Pin";
import Badge from "../primitives/Badge";

import "./ServiceCard.css";

function ServiceCard({ service, index }) {
  const pinColors = ["accent", "olive"];

  const pinColor = pinColors[index % pinColors.length];

  return (
    <article className="service-card">
      <Pin position="top-right" color={pinColor} />

      <div className="service-card__top">
        <span className="service-card__number">{service.number}</span>

        <Badge variant="neutral">{service.shortTitle}</Badge>
      </div>

      <div className="service-card__body">
        <h2>{service.title}</h2>

        <p>{service.description}</p>
      </div>

      <div className="service-card__tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default ServiceCard;
