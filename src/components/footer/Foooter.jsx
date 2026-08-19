import { ArrowUpRight, ArrowUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <span className="eyebrow">Mithilesh Yadav</span>

            <p>
              Frontend Developer
              <br />
              Technology & Digital
            </p>
          </div>

          <div className="site-footer__links">
            <a href="mailto:mythleshyadav114@gmail.com">
              Email
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </a>
          </div>

          <button
            type="button"
            className="site-footer__top-button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="site-footer__bottom">
          <span>© {currentYear} Mithilesh Yadav</span>

          <span>Nepal</span>

          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
