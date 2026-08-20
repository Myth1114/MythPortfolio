import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import AvailabilityBadge from "./AvailabilityBadge";
import IdentityCard from "./IdentityCard";

import Button from "../primitives/Button";

import "./Hero.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* LEFT SIDE */}

          <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.11,
                  delayChildren: shouldReduceMotion ? 0 : 0.08,
                },
              },
            }}
          >
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={transition}
            >
              <AvailabilityBadge />
            </motion.div>

            <div className="hero__heading">
              <motion.span
                className="hero__eyebrow"
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={transition}
              >
                Hello, I'm
              </motion.span>

              <motion.h1
                className="hero__title"
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={transition}
              >
                Mithilesh
                <br />
                <span>Yadav.</span>
              </motion.h1>
            </div>

            <motion.p
              className="hero__description"
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={transition}
            >
              Frontend Developer crafting thoughtful, responsive digital
              experiences with JavaScript and React.
            </motion.p>

            <motion.div
              className="hero__actions"
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={transition}
            >
              <Button>Explore my work</Button>

              <Button variant="secondary" icon={false}>
                About me
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Button>
            </motion.div>

            <motion.div
              className="hero__scroll"
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={transition}
            >
              <ArrowDown size={15} strokeWidth={1.6} />

              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="hero__visual"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 38,
                    rotate: 1.5,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.95,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <IdentityCard />

            <motion.span
              className="hero__annotation handwritten"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.95,
                      rotate: -8,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -5,
              }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              a little corner
              <br />
              of the internet
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
