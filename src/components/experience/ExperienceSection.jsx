import { motion, useReducedMotion } from "motion/react";

import experience from "../../data/experience";

import ExperienceItem from "./ExperienceItem";

import "./ExperienceSection.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="experience-section section">
      <div className="container">
        <motion.div
          className="experience-section__header"
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
            <span className="eyebrow">03 — Experience</span>

            <h2 className="section-title">
              Where I've
              <br />
              <span>been.</span>
            </h2>
          </div>

          <p className="experience-section__intro">
            From frontend development to broader technology and digital
            leadership, each role has shaped the way I work.
          </p>
        </motion.div>

        <motion.div
          className="experience-section__timeline"
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
          {experience.map((item) => (
            <motion.div
              key={item.id}
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={{
                duration: 0.68,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ExperienceItem experience={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;
