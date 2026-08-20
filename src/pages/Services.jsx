import { motion, useReducedMotion } from "motion/react";

import services from "../data/services";

import PageHeader from "../components/layout/PageHeader";
import ServiceCard from "../components/services/ServiceCard";
import SEO from "../components/seo/SEO";

import "./Services.css";

const serviceVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Services"
        description="Explore web development, frontend development and digital experience services offered by Mithilesh Yadav."
        path="/services"
      />

      <main className="services-page">
        <div className="container">
          <PageHeader
            eyebrow="07 — Services"
            title="What I can"
            titleAccent="help build."
            description="A few ways I can help turn an idea, problem or existing website into something more useful."
          />

          <motion.section
            className="services-page__intro"
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
              I don't believe in offering a hundred different services. Most
              projects eventually come down to understanding the problem,
              choosing the right approach and building it well.
            </p>
          </motion.section>

          <motion.section
            className="services-page__grid"
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
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={shouldReduceMotion ? undefined : serviceVariants}
                transition={{
                  duration: 0.68,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="services-page__closing"
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
              amount: 0.35,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow">Something else in mind?</span>

            <h2>
              Let's talk about
              <br />
              <span>the problem first.</span>
            </h2>

            <p>
              Not every project fits neatly into a service list. If you have an
              idea, an existing website that needs work, or simply don't know
              where to start, that's okay.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default Services;
