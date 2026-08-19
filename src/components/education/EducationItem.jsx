import { ArrowUpRight } from "lucide-react";

import Badge from "../primitives/Badge";

import "./EducationItem.css";

function EducationItem({ education }) {
  return (
    <article className="education-item">
      <div className="education-item__number">{education.number}</div>

      <div className="education-item__main">
        <div className="education-item__top">
          <span className="education-item__period">{education.period}</span>

          <Badge variant="neutral">{education.type}</Badge>
        </div>

        <div className="education-item__heading">
          <h3>{education.institution}</h3>

          <ArrowUpRight
            className="education-item__arrow"
            size={20}
            strokeWidth={1.5}
          />
        </div>

        <p className="education-item__qualification">
          {education.qualification}
        </p>

        <div className="education-item__bottom">
          <span>{education.location}</span>

          <strong>{education.result}</strong>
        </div>

        <p className="education-item__description">{education.description}</p>
      </div>
    </article>
  );
}

export default EducationItem;
