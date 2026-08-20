import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Work from "../../pages/Work";
import Journey from "../../pages/Journey";
import Tools from "../../pages/Tools";
import Thoughts from "../../pages/Thoughts";
import Notes from "../../pages/Notes";
import Blog from "../../pages/Blog";
import Services from "../../pages/Services";
import BucketList from "../../pages/BucketList";
import Fun from "../../pages/Fun";
import Contact from "../../pages/Contact";

function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 10,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={
        shouldReduceMotion
          ? {
              opacity: 1,
            }
          : {
              opacity: 0,
              y: -6,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/work"
          element={
            <PageTransition>
              <Work />
            </PageTransition>
          }
        />

        <Route
          path="/journey"
          element={
            <PageTransition>
              <Journey />
            </PageTransition>
          }
        />

        <Route
          path="/tools"
          element={
            <PageTransition>
              <Tools />
            </PageTransition>
          }
        />

        <Route
          path="/thoughts"
          element={
            <PageTransition>
              <Thoughts />
            </PageTransition>
          }
        />

        <Route
          path="/notes"
          element={
            <PageTransition>
              <Notes />
            </PageTransition>
          }
        />

        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />

        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />

        <Route
          path="/bucket-list"
          element={
            <PageTransition>
              <BucketList />
            </PageTransition>
          }
        />

        <Route
          path="/fun"
          element={
            <PageTransition>
              <Fun />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
