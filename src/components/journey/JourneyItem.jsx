import Pin from "../primitives/Pin";
import Badge from "../primitives/Badge";

import "./JourneyItem.css";

function JourneyItem({ item, index }) {
  const pinColor =
    index % 3 === 0 ? "accent" : index % 3 === 1 ? "olive" : "neutral";

  return (
    <article className={`journey-item journey-item--${item.type}`}>
      <div className="journey-item__year">{item.year}</div>

      <div className="journey-item__timeline">
        <span className="journey-item__dot" />
        <span className="journey-item__line" />
      </div>

      <div className="journey-item__card">
        <Pin position="top-right" color={pinColor} />

        <div className="journey-item__top">
          <Badge variant="neutral">{item.category}</Badge>
          <span className="journey-item__period">{item.period}</span>
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span className="journey-item__number">0{index + 1}</span>
      </div>
    </article>
  );
}

export default JourneyItem;
