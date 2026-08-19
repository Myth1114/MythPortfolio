import Badge from "../primitives/Badge";
import Pin from "../primitives/Pin";

import "./ThoughtCard.css";

function ThoughtCard({ thought }) {
  return (
    <article className={`thought-card ${thought.position}`}>
      <div className="thought-card__paper">
        <Pin position="top-right" color={thought.pin} />

        <div className="thought-card__header">
          <span className="thought-card__number">THOUGHT {thought.number}</span>
          <span className="thought-card__mark">•</span>
        </div>

        <div className="thought-card__body">
          <h2>{thought.title}</h2>
          <p>{thought.text}</p>
        </div>

        <div className="thought-card__footer">
          <Badge variant="neutral">{thought.category}</Badge>
          <span>{thought.date}</span>
        </div>
      </div>
    </article>
  );
}

export default ThoughtCard;
