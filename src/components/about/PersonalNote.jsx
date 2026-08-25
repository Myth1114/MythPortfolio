import { motion, useReducedMotion } from "motion/react";
import Tape from "../primitives/Tape";

import "./PersonalNote.css";

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

function PersonalNote() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className="personal-note"
      variants={shouldReduceMotion ? undefined : skillVariants}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
              scale: 0.9,
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
      <Tape position="top-center" rotation={3} />

      <p className="handwritten">
        "Good interfaces should feel obvious, not complicated."
      </p>

      <span>— something I keep in mind</span>
    </motion.div>
  );
}

export default PersonalNote;
