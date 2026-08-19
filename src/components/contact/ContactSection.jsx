import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import PaperCard from "../primitives/PaperCard";
import Pin from "../primitives/Pin";

import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section section">
      <div className="container">
        <div className="contact-section__card">
          <PaperCard className="contact-section__paper" rotation={0}>
            <Pin position="top-right" color="accent" />

            <div className="contact-section__header">
              <span className="eyebrow">03 — Let's Talk</span>

              <span className="contact-section__mark">↗</span>
            </div>

            <div className="contact-section__content">
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
            </div>

            <div className="contact-section__details">
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
            </div>

            <div className="contact-section__footer">
              <span>Open to interesting conversations.</span>

              <a
                href="mailto:mythleshyadav114@gmail.com"
                className="contact-section__button"
              >
                Get in touch
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
            </div>
          </PaperCard>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
