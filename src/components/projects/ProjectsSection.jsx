import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import "./ProjectsSection.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const shouldReduceMotion = useReducedMotion();

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="projects-section section">
      <div className="container">
        {/* HEADER */}

        <motion.div
          className="projects-section__header"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
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
        </motion.div>

        {/* PROJECTS */}

        <motion.div
          className="projects-section__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.14,
                delayChildren: shouldReduceMotion ? 0 : 0.08,
              },
            },
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={shouldReduceMotion ? undefined : cardVariants}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </motion.div>
          ))}
        </motion.div>

        {/* ARCHIVE */}

        <motion.div
          className="projects-section__archive"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.65,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>{projects.length} projects in archive</span>

          <Link to="/work">
            View all work
            <ArrowUpRight size={17} strokeWidth={1.7} />
          </Link>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default ProjectsSection;
