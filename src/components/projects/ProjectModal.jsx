import { AnimatePresence, motion } from "framer-motion";

import { ArrowUpRight, X } from "lucide-react";

import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="project-modal__backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="project-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project details`}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              type="button"
              className="project-modal__close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} strokeWidth={1.7} />
            </button>

            <div className="project-modal__number">{project.number}</div>

            <span className="eyebrow">{project.category}</span>

            <h2>{project.title}</h2>

            <p className="project-modal__description">{project.description}</p>

            <div className="project-modal__details">
              <div>
                <span>Role</span>

                <strong>{project.role}</strong>
              </div>

              <div>
                <span>Type</span>

                <strong>{project.type}</strong>
              </div>

              <div>
                <span>Year</span>

                <strong>{project.year}</strong>
              </div>
            </div>

            <div className="project-modal__technologies">
              <span>Built with</span>

              <div>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-modal__link"
              >
                Visit live website
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
