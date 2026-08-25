import { motion, useReducedMotion } from "motion/react";

import thoughts from "../data/thoughts";

import PageHeader from "../components/layout/PageHeader";
import ThoughtCard from "../components/thoughts/ThoughtCard";

import SEO from "../components/seo/SEO";

import "./Thoughts.css";

const thoughtVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Thoughts() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Thoughts"
        description="Short thoughts, observations and reflections from Mithilesh Yadav on technology, creativity, building things and life."
        path="/thoughts"
      />

      <main className="thoughts-page">
        <div className="container">
          <PageHeader
            eyebrow="04 — Thoughts"
            title="Things I"
            titleAccent="keep thinking about."
            description="A small personal archive of ideas, observations and things I haven't quite figured out yet."
          />

          <motion.section
            className="thoughts-page__intro"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
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
              className="thoughts-page__intro-label"
              variants={shouldReduceMotion ? undefined : thoughtVariants}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="eyebrow">Personal archive</span>
            </motion.div>

            <div className="thoughts-page__intro-text">
              <motion.p
                variants={shouldReduceMotion ? undefined : thoughtVariants}
                transition={{
                  duration: 0.68,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Not everything needs to become an article. Some ideas are better
                left small — a sentence, an observation, something noticed on an
                ordinary day.
              </motion.p>

              <motion.span
                className="handwritten"
                variants={shouldReduceMotion ? undefined : thoughtVariants}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                collected along the way.
              </motion.span>
            </div>
          </motion.section>

          <motion.section
            className="thoughts-page__archive"
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
            {thoughts.map((thought, index) => (
              <motion.div
                key={thought.id}
                variants={{
                  hidden: shouldReduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        y: 24,
                        rotate: index % 2 === 0 ? -0.8 : 0.8,
                      },

                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ThoughtCard thought={thought} />
              </motion.div>
            ))}
          </motion.section>

          <motion.div
            className="thoughts-page__end"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow">End of the archive</span>

            <p className="handwritten">there are probably more somewhere.</p>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Thoughts;
