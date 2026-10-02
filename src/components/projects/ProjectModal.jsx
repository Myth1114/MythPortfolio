import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Remember where focus was before the modal opened.
    previouslyFocusedElement.current = document.activeElement;

    // Prevent the page behind the modal from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move keyboard focus into the modal.
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event) => {
      // Close the modal with Escape.
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      // Keep Tab focus inside the dialog.
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;

      if (!dialog) return;

      const focusableElements = dialog.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const focusable = Array.from(focusableElements).filter(
        (element) =>
          !element.hasAttribute("hidden") &&
          element.getAttribute("aria-hidden") !== "true"
      );

      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previouslyFocusedElement.current?.focus();
    };
  }, [project, onClose]);

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
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            className="project-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            tabIndex={-1}
            initial={
              shouldReduceMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              shouldReduceMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.98,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="project-modal__close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} strokeWidth={1.7} aria-hidden="true" />
            </button>

            <div className="project-modal__number" aria-hidden="true">
              {project.number}
            </div>

            <span className="eyebrow">{project.category}</span>

            <h2 id="project-modal-title">{project.title}</h2>

            <p
              id="project-modal-description"
              className="project-modal__description"
            >
              {project.description}
            </p>

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
                rel="noopener noreferrer"
                className="project-modal__link"
              >
                Visit live website
                <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
