import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import PaperCard from "../primitives/PaperCard";
import Pin from "../primitives/Pin";

import "./ContactSection.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact-section section">
      <div className="container">
        <motion.div
          className="contact-section__card"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
            amount: 0.18,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <PaperCard className="contact-section__paper" rotation={0}>
            <Pin position="top-right" color="accent" />

            <motion.div
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
                    delayChildren: shouldReduceMotion ? 0 : 0.1,
                  },
                },
              }}
            >
              <motion.div
                className="contact-section__header"
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="eyebrow">03 — Let's Talk</span>

                <span className="contact-section__mark">↗</span>
              </motion.div>

              <motion.div
                className="contact-section__content"
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2>
                  Have an idea?
                  <br />
                  <span>Let's make it real.</span>
                </h2>

                <p>
                  Whether it's a website, a digital experience, a new idea or
                  simply a conversation about technology — I'd be happy to hear
                  from you.
                </p>
              </motion.div>

              <motion.div
                className="contact-section__details"
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href="mailto:mythleshyadav114@gmail.com"
                  className="contact-section__email"
                >
                  <Mail size={18} strokeWidth={1.5} />

                  <span>mythleshyadav114@gmail.com</span>

                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </a>

                <div className="contact-section__location">
                  <MapPin size={17} strokeWidth={1.5} />

                  <span>Nepal</span>
                </div>
              </motion.div>

              <motion.div
                className="contact-section__footer"
                variants={shouldReduceMotion ? undefined : itemVariants}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span>Open to interesting conversations.</span>

                <a
                  href="mailto:mythleshyadav114@gmail.com"
                  className="contact-section__button"
                >
                  Get in touch
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </a>
              </motion.div>
            </motion.div>
          </PaperCard>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
