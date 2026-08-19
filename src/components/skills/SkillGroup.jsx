import { ArrowUpRight } from "lucide-react";

import Badge from "../primitives/Badge";

import "./SkillGroup.css";

function SkillGroup({ number, title, description, skills }) {
  return (
    <article className="skill-group">
      <div className="skill-group__number">{number}</div>

      <div className="skill-group__main">
        <div className="skill-group__heading">
          <h3>{title}</h3>

          <ArrowUpRight
            className="skill-group__arrow"
            size={20}
            strokeWidth={1.5}
          />
        </div>

        <p className="skill-group__description">{description}</p>

        <div className="skill-group__tags">
          {skills.map((skill) => (
            <Badge key={skill} variant="neutral">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

export default SkillGroup;
