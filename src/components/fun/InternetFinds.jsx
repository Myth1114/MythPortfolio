import { ArrowUpRight, Globe2 } from "lucide-react";

import Pin from "../primitives/Pin";

import "./InternetFinds.css";

const discoveries = [
  {
    number: "01",
    category: "TOOL",
    title: "A better way to think about interfaces.",
    description:
      "A small discovery that reminded me good design is often more about removing things than adding them.",
    domain: "example.com",
    url: "https://example.com",
    pin: "accent",
    note: "kept this one.",
  },
  {
    number: "02",
    category: "RABBIT HOLE",
    title: "One strange corner of the internet.",
    description:
      "Started with five minutes of curiosity. Somehow ended up twenty tabs deep.",
    domain: "example.com",
    url: "https://example.com",
    pin: "olive",
    note: "don't ask how I found it.",
  },
  {
    number: "03",
    category: "DESIGN",
    title: "Tiny details that make a difference.",
    description:
      "A collection of little interface decisions that prove polish doesn't always need to be loud.",
    domain: "example.com",
    url: "https://example.com",
    pin: "red",
    note: "steal the idea, not the pixels.",
  },
  {
    number: "04",
    category: "AI",
    title: "Something interesting about the new AI era.",
    description:
      "Not another list of AI tools. Just something that made me think differently about how we build.",
    domain: "example.com",
    url: "https://example.com",
    pin: "blue",
    note: "worth thinking about.",
  },
  {
    number: "05",
    category: "INTERNET",
    title: "A website that shouldn't be this satisfying.",
    description:
      "Completely unnecessary. Completely delightful. Exactly the kind of thing the internet is good at.",
    domain: "example.com",
    url: "https://example.com",
    pin: "accent",
    note: "useless. wonderful.",
  },
  {
    number: "06",
    category: "READ",
    title: "A piece I kept coming back to.",
    description:
      "Some articles are useful once. Others quietly stay in your head for weeks.",
    domain: "example.com",
    url: "https://example.com",
    pin: "olive",
    note: "read this slowly.",
  },
];

function InternetFinds() {
  return (
    <section className="internet-finds">
      <div className="container">
        <div className="internet-finds__header">
          <div>
            <span className="eyebrow">05 — Things I Found</span>

            <h2 className="section-title">
              The internet
              <br />
              <span>is weird.</span>
            </h2>
          </div>

          <p className="internet-finds__intro">
            Interesting things, useful tools, strange websites and random rabbit
            holes I've decided were worth keeping.
          </p>
        </div>

        <div className="internet-finds__grid">
          {discoveries.map((item) => (
            <article key={item.number} className="internet-find">
              <div className="internet-find__paper">
                <Pin position="top-right" color={item.pin} />

                <div className="internet-find__top">
                  <span className="internet-find__number">{item.number}</span>

                  <span className="internet-find__category">
                    {item.category}
                  </span>
                </div>

                <div className="internet-find__icon">
                  <Globe2 size={18} strokeWidth={1.4} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="internet-find__bottom">
                  <span className="internet-find__domain">{item.domain}</span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${item.domain}`}
                  >
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </a>
                </div>

                <span className="internet-find__note handwritten">
                  {item.note}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InternetFinds;
