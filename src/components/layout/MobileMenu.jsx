import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import { menuNavigation } from "../../data/navigation";

import "./MobileMenu.css";

function MobileMenu({ isOpen, onClose }) {
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
          />

          <motion.aside
            className="mobile-menu"
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label="Mobile navigation"
          >
            <div className="mobile-menu__top">
              <span className="eyebrow">Navigation</span>

              <button
                type="button"
                className="mobile-menu__close"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>

            <nav className="mobile-menu__nav">
              {menuNavigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.08 + index * 0.05,
                  }}
                >
                  <Link to={item.path} onClick={onClose}>
                    <span>{item.label}</span>

                    <span>{String(index + 1).padStart(2, "0")}</span>
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
