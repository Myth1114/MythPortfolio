import { motion, useReducedMotion } from "motion/react";

import PageHeader from "../components/layout/PageHeader";
import PaperCard from "../components/primitives/PaperCard";
import Badge from "../components/primitives/Badge";
import SEO from "../components/seo/SEO";

import tools from "../data/tools";

import "./Tools.css";

const groupVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const toolItemVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

function Tools() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Tools I Use"
        description="Explore the technologies, development tools, design software and creative tools Mithilesh Yadav uses to build digital experiences."
        path="/tools"
      />

      <main className="tools-page">
        <div className="container">
          <PageHeader
            eyebrow="03 — Tools"
            title="My digital"
            titleAccent="workbench."
            description="The technologies, tools and practices I use to turn ideas into useful digital experiences."
          />

          {/* INTRO */}

          <motion.section
            className="tools-page__intro"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              Tools change constantly. What matters to me is understanding how
              to use them thoughtfully — choosing the right technology for the
              problem rather than using technology for its own sake.
            </p>
          </motion.section>

          {/* TOOL GROUPS */}

          <motion.section
            className="tools-page__grid"
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
            {tools.map((group) => (
              <motion.div
                key={group.number}
                variants={shouldReduceMotion ? undefined : groupVariants}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <PaperCard className="tools-group">
                  <div className="tools-group__top">
                    <span className="tools-group__number">{group.number}</span>

                    <Badge variant="accent">{group.category}</Badge>
                  </div>

                  <p className="tools-group__description">
                    {group.description}
                  </p>

                  <motion.div
                    className="tools-group__items"
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
                          staggerChildren: shouldReduceMotion ? 0 : 0.055,
                        },
                      },
                    }}
                  >
                    {group.items.map((tool) => (
                      <motion.div
                        className="tools-group__item"
                        key={tool.name}
                        variants={
                          shouldReduceMotion ? undefined : toolItemVariants
                        }
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div>
                          <strong>{tool.name}</strong>
                          <span>{tool.detail}</span>
                        </div>

                        <span className="tools-group__mark">↗</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </PaperCard>
              </motion.div>
            ))}
          </motion.section>

          {/* NOTE */}

          <motion.section
            className="tools-page__note"
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
            <span className="eyebrow">A small note</span>

            <p className="handwritten">Tools change. The curiosity doesn't.</p>
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default Tools;
