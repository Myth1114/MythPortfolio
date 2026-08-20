import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import "./AboutPreview.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about-preview section">
      <div className="container">
        <motion.div
          className="about-preview__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
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
            className="about-preview__label"
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow">02 — A little about me</span>
          </motion.div>

          <div className="about-preview__content">
            <motion.h2
              className="section-title"
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              I build things
              <br />
              <span>for the web.</span>
            </motion.h2>

            <div className="about-preview__text">
              <motion.p
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I'm Mithilesh, a frontend developer with a background in
                Information Science and Engineering.
              </motion.p>

              <motion.p
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Over the years, my work has grown beyond writing interfaces into
                building digital experiences, exploring design, improving
                products and helping businesses use technology more effectively.
              </motion.p>
            </div>

            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link to="/about" className="about-preview__link">
                More about me
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;
