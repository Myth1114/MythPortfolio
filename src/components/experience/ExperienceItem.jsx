import { ArrowUpRight } from "lucide-react";

import Badge from "../primitives/Badge";
import Pin from "../primitives/Pin";

import "./ExperienceItem.css";

function ExperienceItem({ experience }) {
  return (
    <article
      className={`experience-item ${
        experience.current ? "experience-item--current" : ""
      }`}
    >
      <div className="experience-item__timeline">
        <span className="experience-item__dot" />

        <span className="experience-item__line" />
      </div>

      <div className="experience-item__content">
        <div className="experience-item__period">{experience.period}</div>

        <div className="experience-item__card">
          {experience.current && <Pin position="top-right" color="accent" />}

          <div className="experience-item__top">
            <Badge variant={experience.current ? "accent" : "neutral"}>
              {experience.type}
            </Badge>

            <ArrowUpRight
              size={19}
              strokeWidth={1.5}
              className="experience-item__arrow"
            />
          </div>

          <h3>{experience.company}</h3>

          <div className="experience-item__role">{experience.role}</div>

          <div className="experience-item__location">{experience.location}</div>

          <p className="experience-item__description">
            {experience.description}
          </p>

          <div className="experience-item__responsibilities">
            <span>What I worked on</span>

            <ul>
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ExperienceItem;
