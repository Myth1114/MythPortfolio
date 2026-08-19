import Pin from "../primitives/Pin";
import Badge from "../primitives/Badge";

import "./BucketItem.css";

function BucketItem({ item }) {
  const isInProgress = item.status === "in-progress";

  return (
    <article
      className={`bucket-item ${isInProgress ? "bucket-item--active" : ""}`}
    >
      {isInProgress && <Pin position="top-right" color="accent" />}

      <div className="bucket-item__number">{item.number}</div>

      <div className="bucket-item__content">
        <div className="bucket-item__top">
          <Badge variant={isInProgress ? "accent" : "neutral"}>
            {isInProgress ? "In Progress" : "On the Horizon"}
          </Badge>

          <span>{item.year}</span>
        </div>

        <h2>{item.title}</h2>

        <span className="bucket-item__category">{item.category}</span>

        <p>{item.description}</p>

        <div className="bucket-item__technologies">
          {item.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default BucketItem;
