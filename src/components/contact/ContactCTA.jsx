import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="contact-cta__inner">
          <div className="contact-cta__label">
            <span className="eyebrow">03 — Get in touch</span>
          </div>

          <div className="contact-cta__content">
            <h2 className="section-title">
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p className="contact-cta__text">
              Whether you have a project in mind, an interesting idea, or simply
              want to say hello, I'd love to hear from you.
            </p>

            <Link to="/contact" className="contact-cta__link">
              Start a conversation
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
