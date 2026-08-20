import { motion, useReducedMotion } from "motion/react";

import PageHeader from "../components/layout/PageHeader";
import ArchiveCard from "../components/notes/ArchiveCard";
import SEO from "../components/seo/SEO";

import notes from "../data/notes";

import "./Notes.css";

function Notes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Notes"
        description="A collection of notes, ideas, lessons and things worth remembering from Mithilesh Yadav."
        path="/notes"
      />

      <main className="notes-page">
        <div className="container">
          <PageHeader
            eyebrow="05 — Notes"
            title="Things worth"
            titleAccent="remembering."
            description="Small technical observations collected while building, debugging and learning."
          />

          <motion.section
            className="notes-page__grid"
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
            {notes.map((note, index) => (
              <motion.div
                key={note.id}
                variants={{
                  hidden: shouldReduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        y: 26,
                        rotate: index % 2 === 0 ? -1.2 : 1.2,
                      },

                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  },
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ArchiveCard note={note} index={index} />
              </motion.div>
            ))}
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default Notes;
