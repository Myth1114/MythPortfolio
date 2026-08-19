import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import "./ProjectsSection.css";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="projects-section section">
      <div className="container">
        <div className="projects-section__header">
          <div>
            <span className="eyebrow">03 — Selected Work</span>

            <h2 className="section-title">
              Things I've
              <br />
              <span>built.</span>
            </h2>
          </div>

          <p className="projects-section__intro">
            A selection of projects I've worked on across frontend development,
            design and the web.
          </p>
        </div>

        <div className="projects-section__grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <div className="projects-section__archive">
          <span>{projects.length} projects in archive</span>

          <Link to="/work">
            View all work
            <ArrowUpRight size={17} strokeWidth={1.7} />
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default ProjectsSection;
