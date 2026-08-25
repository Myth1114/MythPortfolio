import { motion, useReducedMotion } from "motion/react";

import journey from "../data/journey";

import PageHeader from "../components/layout/PageHeader";
import JourneyItem from "../components/journey/JourneyItem";
import SEO from "../components/seo/SEO";

// import "./Journey.css";

const journeyVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Journey"
        description="Follow Mithilesh Yadav's journey through learning, building, experimentation and the experiences that shaped his path as a developer."
        path="/journey"
      />

      <main className="journey-page">
        <div className="container">
          <PageHeader
            eyebrow="06 — Journey"
            title="How I got"
            titleAccent="here."
            description="A timeline of the places, projects and ideas that gradually shaped the way I build and think."
          />

          <motion.section
            className="journey-page__timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.06,
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
            {journey.map((item, index) => (
              <motion.div
                key={item.id}
                variants={shouldReduceMotion ? undefined : journeyVariants}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <JourneyItem item={item} index={index} />
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="journey-page__closing"
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow">The road ahead</span>

            <h2>
              Still building.
              <br />
              <span>Still curious.</span>
            </h2>

            <p>
              The interesting part is that the journey doesn't really have an
              ending. There are still technologies to learn, things to build and
              better questions to ask.
            </p>

            <motion.span
              className="journey-page__signature handwritten"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -12,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              — Mithilesh
            </motion.span>
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default Journey;
