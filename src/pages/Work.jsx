import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import PageHeader from "../components/layout/PageHeader";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import SEO from "../components/seo/SEO";

import projects from "../data/projects";

import "./Work.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const shouldReduceMotion = useReducedMotion();

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

          <motion.section
            className="work-page__intro"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.45,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              Different projects, different problems. From ecommerce
              applications and corporate websites to education platforms, most
              of my work has been about turning ideas into interfaces that are
              useful, responsive and easy to understand.
            </p>
          </motion.section>

          <section className="work-page__projects">
            <motion.div
              className="work-page__grid"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
              variants={{
                hidden: {},

                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.1,
                    delayChildren: shouldReduceMotion ? 0 : 0.05,
                  },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={shouldReduceMotion ? undefined : cardVariants}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={project} onOpen={setSelectedProject} />
                </motion.div>
              ))}
            </motion.div>
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
