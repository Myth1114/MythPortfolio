import { motion, useReducedMotion } from "motion/react";

import "./PageHeader.css";

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

function PageHeader({ eyebrow, title, titleAccent, description }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      className="page-header"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.1,
            delayChildren: shouldReduceMotion ? 0 : 0.08,
          },
        },
      }}
    >
      <motion.div
        className="page-header__eyebrow"
        variants={shouldReduceMotion ? undefined : itemVariants}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>

      <div className="page-header__content">
        <motion.h1
          className="page-header__title"
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {title}

          {titleAccent && (
            <>
              <br />
              <span>{titleAccent}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            className="page-header__description"
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.header>
  );
}

export default PageHeader;
