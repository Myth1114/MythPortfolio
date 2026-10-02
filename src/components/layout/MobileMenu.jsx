import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

import { menuNavigation } from "../../data/navigation";

import "./MobileMenu.css";

function MobileMenu({ isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElement.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const menu = menuRef.current;

      if (!menu) return;

      const focusableElements = menu.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const focusable = Array.from(focusableElements).filter(
        (element) =>
          !element.hasAttribute("hidden") &&
          element.getAttribute("aria-hidden") !== "true"
      );

      if (focusable.length === 0) {
        event.preventDefault();
        menu.focus();
        return;
      }

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);

      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previouslyFocusedElement.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-menu__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mobile-menu__top">
              <span className="eyebrow">Navigation</span>

              <button
                ref={closeButtonRef}
                type="button"
                className="mobile-menu__close"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X size={20} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>

            <nav
              className="mobile-menu__nav"
              aria-label="Mobile navigation links"
            >
              {menuNavigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: 15,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.08 + index * 0.05,
                  }}
                >
                  <Link to={item.path} onClick={onClose}>
                    <span>{item.label}</span>

                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu__bottom">
              <span className="handwritten">Made with curiosity.</span>

              <span className="text-muted">
                © {new Date().getFullYear()} Mithilesh Yadav
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
