import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

import AntiPortfolio from "../components/fun/AntiPortfolio";
import ChooseSomething from "../components/fun/ChooseSomething";
import DeveloperSlotMachine from "../components/fun/DeveloperSlotMachine";
import FakeTerminal from "../components/fun/FakeTerminal";
import InternetFinds from "../components/fun/InternetFinds";
import MithileshFM from "../components/fun/MithileshFM";
import TinyGames from "../components/fun/TinyGames";
import UselessWonderful from "../components/fun/UselessWonderful";

import PageHeader from "../components/layout/PageHeader";
import SEO from "../components/seo/SEO";

import "./Fun.css";

function Fun() {
  const shouldReduceMotion = useReducedMotion();
  const chooseSomethingRef = useRef(null);

  function handleChooseSomething() {
    chooseSomethingRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  const sectionMotion = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 28,
        },

        whileInView: {
          opacity: 1,
          y: 0,
        },

        viewport: {
          once: true,
          amount: 0.08,
        },

        transition: {
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        },
      };

  return (
    <>
      <SEO
        title="Fun"
        description="A strange little corner of Mithilesh Yadav's portfolio filled with tiny games, internet discoveries, experiments, questionable developer ideas and other unnecessary things."
        path="/fun"
      />

      <main className="fun-page">
        <div className="container">
          <PageHeader
            eyebrow="10 — Fun"
            title="A little corner"
            titleAccent="of the internet."
            description="Not everything here needs to be useful. Some things are here simply because I wanted to make them."
          />

          <motion.section
            className="fun-page__intro"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                    rotate: -0.6,
                    scale: 0.99,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="fun-page__intro-card">
              <span className="fun-page__intro-label">
                ENTER AT YOUR OWN RISK
              </span>

              <h2>
                There are probably
                <br />
                <span>a few unnecessary things here.</span>
              </h2>

              <p>
                Tiny experiments, strange ideas, things I found interesting, and
                a few interactions that absolutely did not need to exist.
              </p>

              <button
                type="button"
                className="fun-page__surprise"
                onClick={handleChooseSomething}
              >
                <span>Choose something</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </motion.section>

          <motion.div
            className="fun-page__choose-target"
            ref={chooseSomethingRef}
            {...sectionMotion}
          >
            <ChooseSomething />
          </motion.div>

          <motion.div {...sectionMotion}>
            <TinyGames />
          </motion.div>

          <motion.div {...sectionMotion}>
            <FakeTerminal />
          </motion.div>

          <motion.div {...sectionMotion}>
            <MithileshFM />
          </motion.div>

          <motion.div {...sectionMotion}>
            <InternetFinds />
          </motion.div>

          <motion.div {...sectionMotion}>
            <UselessWonderful />
          </motion.div>

          <motion.div {...sectionMotion}>
            <DeveloperSlotMachine />
          </motion.div>

          <motion.div {...sectionMotion}>
            <AntiPortfolio />
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Fun;
