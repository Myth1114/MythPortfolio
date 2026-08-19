import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

import PageHeader from "../components/layout/PageHeader";
import Pin from "../components/primitives/Pin";
import Tape from "../components/primitives/Tape";
import SEO from "../components/seo/SEO";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      setFeedback("Message sent. I'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Mithilesh Yadav about web development, projects, collaborations, ideas or simply to say hello."
        path="/contact"
      />
      <main className="contact-page">
        <div className="container">
          <PageHeader
            eyebrow="07 — Contact"
            title="Let's make"
            titleAccent="something happen."
            description="Have an idea, a project, or simply want to say hello? My inbox is always open."
          />

          <section className="contact-page__content">
            <div className="contact-page__intro">
              <div className="contact-card">
                <Tape position="top-center" rotation={-3} />
                <Pin position="top-right" color="accent" />

                <div className="contact-card__top">
                  <span className="contact-card__label">AVAILABLE FOR</span>

                  <span className="contact-card__status">
                    <span />
                    OPEN TO WORK
                  </span>
                </div>

                <div className="contact-card__body">
                  <h2>
                    Good ideas usually
                    <br />
                    <span>start with a conversation.</span>
                  </h2>

                  <p>
                    Whether you're building something, redesigning something,
                    fixing something, or simply have an interesting idea — let's
                    talk.
                  </p>
                </div>

                <div className="contact-card__email">
                  <Mail size={18} strokeWidth={1.5} />

                  <a href="mailto:hello@example.com">
                    hello@example.com
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>

                <span className="contact-card__note handwritten">
                  no formalities required.
                </span>
              </div>

              <div className="contact-details">
                <div className="contact-detail">
                  <MapPin size={17} strokeWidth={1.4} />

                  <div>
                    <span>BASED IN</span>
                    <strong>Nepal</strong>
                  </div>
                </div>

                <div className="contact-detail">
                  <Mail size={17} strokeWidth={1.4} />

                  <div>
                    <span>EMAIL</span>
                    <strong>hello@example.com</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-form-card__header">
                <div>
                  <span className="eyebrow">SEND A MESSAGE</span>

                  <h2>Tell me what's on your mind.</h2>
                </div>

                <span className="contact-form-card__number">01</span>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Name</label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email</label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={200}
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-subject">Subject</label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What are we talking about?"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={200}
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message">Message</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell me a little about it..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={status === "sending"}
                >
                  <Send size={17} strokeWidth={1.5} />

                  <span>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </span>

                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </button>

                {feedback && (
                  <div
                    className={`contact-form__feedback contact-form__feedback--${status}`}
                    role={status === "error" ? "alert" : "status"}
                  >
                    {feedback}
                  </div>
                )}
              </form>
            </div>
          </section>

          <section className="contact-page__social">
            <div className="contact-page__social-heading">
              <span className="eyebrow">ELSEWHERE</span>

              <p>You can also find me around the internet.</p>
            </div>

            <div className="contact-page__social-links">
              <a
                href="https://github.com/Myth1114"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight size={15} strokeWidth={1.4} />
              </a>

              <a href="#">
                LinkedIn
                <ArrowUpRight size={15} strokeWidth={1.4} />
              </a>

              <a href="#">
                Instagram
                <ArrowUpRight size={15} strokeWidth={1.4} />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
