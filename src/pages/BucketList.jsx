import { motion, useReducedMotion } from "motion/react";

import bucketList from "../data/bucketList";

import PageHeader from "../components/layout/PageHeader";
import BucketItem from "../components/bucketList/BucketItem";
import SEO from "../components/seo/SEO";

import "./BucketList.css";

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

function BucketList() {
  const shouldReduceMotion = useReducedMotion();

  const inProgress = bucketList.filter((item) => item.status === "in-progress");

  const onHorizon = bucketList.filter((item) => item.status === "on-horizon");

  const renderBucketSection = ({
    eyebrow,
    title,
    titleAccent,
    description,
    items,
    future = false,
  }) => (
    <section
      className={`bucket-page__section ${
        future ? "bucket-page__section--future" : ""
      }`}
    >
      {/* SECTION HEADER */}

      <motion.div
        className="bucket-page__section-header"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 20,
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
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div>
          <span className="eyebrow">{eyebrow}</span>

          <h2>
            {title}
            <br />
            <span>{titleAccent}</span>
          </h2>
        </div>

        <p>{description}</p>
      </motion.div>

      {/* ITEMS */}

      <motion.div
        className="bucket-page__list"
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
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <BucketItem item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );

  return (
    <>
      <SEO
        title="Bucket List"
        description="A growing collection of things Mithilesh Yadav wants to build, learn, experience and accomplish."
        path="/bucket-list"
      />

      <main className="bucket-page">
        <div className="container">
          <PageHeader
            eyebrow="08 — Bucket List"
            title="Things I want"
            titleAccent="to build."
            description="Projects, experiments and ideas that I want to bring into the world — some already moving, others waiting for the right moment."
          />

          {/* IN PROGRESS */}

          {inProgress.length > 0 &&
            renderBucketSection({
              eyebrow: "Currently building",
              title: "In",
              titleAccent: "progress.",
              description: "Things that are no longer just ideas.",
              items: inProgress,
            })}

          {/* ON THE HORIZON */}

          {onHorizon.length > 0 &&
            renderBucketSection({
              eyebrow: "Someday",
              title: "On the",
              titleAccent: "horizon.",
              description:
                "Ideas worth keeping around until the right time arrives.",
              items: onHorizon,
              future: true,
            })}

          {/* CLOSING */}

          <motion.section
            className="bucket-page__closing"
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
              amount: 0.6,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="handwritten">There is always another idea.</span>

            <p>
              This list is intentionally unfinished. That's kind of the point.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default BucketList;
