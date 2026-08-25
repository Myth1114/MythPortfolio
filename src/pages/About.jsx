import { motion, useReducedMotion } from "motion/react";

import PageHeader from "../components/layout/PageHeader";

import ExperienceSection from "../components/experience/ExperienceSection";
import EducationSection from "../components/education/EducationSection";
import SkillsSection from "../components/skills/SkillsSection";

import SEO from "../components/seo/SEO";

import "./About.css";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="About"
        description="Learn more about Mithilesh Yadav, a developer and creative builder from Nepal exploring technology, design, ideas and meaningful digital experiences."
        path="/about"
      />

      <main className="about-page">
        <div className="container">
          <PageHeader
            eyebrow="02 — About"
            title="A little more"
            titleAccent="about me."
            description="Frontend developer, digital builder and technology-focused creative."
          />

          <motion.section
            className="about-page__intro"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
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
            <motion.div
              className="about-page__intro-label"
              variants={shouldReduceMotion ? undefined : textVariants}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="eyebrow">Who I am</span>
            </motion.div>

            <div className="about-page__intro-content">
              <motion.p
                className="about-page__lead"
                variants={shouldReduceMotion ? undefined : textVariants}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I'm Mithilesh Yadav, a frontend developer from Nepal with a
                background in Information Science and Engineering. My work sits
                somewhere between technology, design and digital products —
                building interfaces, improving websites and helping ideas become
                useful experiences on the web.
              </motion.p>

              <motion.p
                variants={shouldReduceMotion ? undefined : textVariants}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I started my professional journey in frontend development,
                working with JavaScript, React and modern web technologies. Over
                time, my responsibilities expanded beyond development into
                technology management, digital presence, social media and
                marketing strategy.
              </motion.p>

              <motion.p
                variants={shouldReduceMotion ? undefined : textVariants}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I enjoy understanding how things work, simplifying complicated
                ideas and turning them into digital experiences that feel clear,
                useful and intentional.
              </motion.p>
            </div>
          </motion.section>
        </div>

        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </main>
    </>
  );
}

export default About;
