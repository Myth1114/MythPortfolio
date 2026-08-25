import { motion, useReducedMotion } from "motion/react";

import PersonalNote from "../about/PersonalNote";

import SkillGroup from "./SkillGroup";

import "./SkillsSection.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, maintainable interfaces with a focus on clean structure, reusable components and thoughtful interaction.",
    skills: ["ReactJS", "JavaScript", "HTML5", "CSS3"],
  },

  {
    number: "02",
    title: "UI / UX",
    description:
      "Turning visual ideas into interfaces that are clear, responsive and easy to use across different screen sizes.",
    skills: [
      "Responsive Design",
      "UI Design",
      "UX Principles",
      "Visual Hierarchy",
    ],
  },

  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Working with modern development tools and practices to keep projects organized, consistent and maintainable.",
    skills: ["Git", "GitHub", "Bootstrap", "Material UI"],
  },

  {
    number: "04",
    title: "Problem Solving",
    description:
      "Debugging issues, improving performance and finding practical solutions when things don't work as expected.",
    skills: ["Debugging", "Performance", "Cross-Browser", "Optimization"],
  },
];

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="skills-section section">
      <div className="container">
        <motion.div
          className="skills-section__header"
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
            <span className="eyebrow">05 — Capabilities</span>

            <h2 className="section-title">
              Things I enjoy
              <br />
              <span>working with.</span>
            </h2>
          </div>

          <p className="skills-section__intro">
            A collection of technologies, practices and ways of thinking that
            shape how I build.
          </p>
        </motion.div>

        <motion.div
          className="skills-section__list"
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
                staggerChildren: shouldReduceMotion ? 0 : 0.11,
                delayChildren: shouldReduceMotion ? 0 : 0.05,
              },
            },
          }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.number}
              variants={shouldReduceMotion ? undefined : skillVariants}
              transition={{
                duration: 0.68,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SkillGroup {...group} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-section__note"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                  scale: 0.99,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
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
          <PersonalNote />
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
