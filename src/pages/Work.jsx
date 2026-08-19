import { useState } from "react";

import PageHeader from "../components/layout/PageHeader";

import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import SEO from "../components/seo/SEO";

import projects from "../data/projects";

import "./Work.css";

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SEO
        title="Projects & Work"
        description="Explore projects and digital products built by Mithilesh Yadav using React, JavaScript, modern web technologies and thoughtful interface design."
        path="/work"
      />
      <main className="work-page">
        <div className="container">
          <PageHeader
            eyebrow="01 — Selected work"
            title="Things I've"
            titleAccent="built."
            description="A collection of websites, applications and digital experiences I've worked on across frontend development, design and the web."
          />
          <section className="work-page__intro">
            <p>
              Different projects, different problems. From ecommerce
              applications and corporate websites to education platforms, most
              of my work has been about turning ideas into interfaces that are
              useful, responsive and easy to understand.
            </p>
          </section>
          <section className="work-page__projects">
            <div className="work-page__grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          </section>
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    </>
  );
}

export default Work;
