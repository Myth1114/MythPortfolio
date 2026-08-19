import { ArrowUpRight } from "lucide-react";

import Badge from "../primitives/Badge";
import PaperCard from "../primitives/PaperCard";
import Pin from "../primitives/Pin";

import "./ProjectCard.css";

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <PaperCard className="project-card__paper" rotation={0}>
        <Pin position="top-right" color="accent" />

        <div className="project-card__top">
          <span className="project-card__number">{project.number}</span>

          <span className="project-card__year">{project.year}</span>
        </div>

        <div className="project-card__preview">
          <div className="project-card__preview-inner">
            <span>{project.title}</span>
          </div>
        </div>

        <div className="project-card__content">
          <div className="project-card__meta">
            <Badge variant="accent">{project.category}</Badge>

            <span>{project.type}</span>
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-card__tags">
            {project.technologies.slice(0, 3).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <button
            type="button"
            className="project-card__open"
            onClick={() => onOpen(project)}
          >
            <span>View project</span>

            <ArrowUpRight size={17} strokeWidth={1.7} />
          </button>
        </div>
      </PaperCard>
    </article>
  );
}

export default ProjectCard;
