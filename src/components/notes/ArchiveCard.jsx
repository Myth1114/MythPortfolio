import Pin from "../primitives/Pin";
import Tape from "../primitives/Tape";

import "./ArchiveCard.css";

function ArchiveCard({ note, index }) {
  return (
    <article className="archive-card">
      <Tape position="top-center" rotation={index % 2 === 0 ? -3 : 3} />

      <Pin position="top-right" color={index % 3 === 0 ? "accent" : "olive"} />

      <div className="archive-card__top">
        <span className="archive-card__label">{note.category}</span>
        <span className="archive-card__number">{note.number}</span>
      </div>
      <div className="archive-card__content">
        <span className="archive-card__year">{note.year}</span>
        <h2>{note.title}</h2>
        <p>{note.text}</p>
      </div>

      <div className="archive-card__footer">
        <div className="archive-card__tags">
          {note.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <span className="archive-card__mark handwritten">personal archive</span>
      </div>
    </article>
  );
}

export default ArchiveCard;
