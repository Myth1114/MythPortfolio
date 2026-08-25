import { motion, useReducedMotion } from "motion/react";

import education from "../../data/education";

import EducationItem from "./EducationItem";

import "./EducationSection.css";

const educationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function EducationSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="education-section section">
      <div className="container">
        <motion.div
          className="education-section__header"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <span className="eyebrow">04 — Education</span>

            <h2 className="section-title">
              Where it
              <br />
              <span>started.</span>
            </h2>
          </div>

          <p className="education-section__intro">
            A foundation in science and engineering that eventually led me
            toward frontend development and digital work.
          </p>
        </motion.div>

        <motion.div
          className="education-section__list"
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
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
                delayChildren: shouldReduceMotion ? 0 : 0.05,
              },
            },
          }}
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={shouldReduceMotion ? undefined : educationVariants}
              transition={{
                duration: 0.68,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <EducationItem education={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="education-section__credentials"
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="education-section__credentials-heading">
            <span className="eyebrow">Credentials</span>

            <h3>Continuous learning.</h3>
          </div>

          <div className="education-section__certificate">
            <div>
              <span>JavaScript Course</span>

              <strong>Udemy</strong>
            </div>

            <span className="education-section__certificate-mark">
              Certified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;
