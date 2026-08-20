import { ArrowUpRight, Globe2 } from "lucide-react";

import Pin from "../primitives/Pin";

import "./InternetFinds.css";

const discoveries = [
  {
    number: "01",
    category: "INTERNET HISTORY",
    title: "Internet Artifacts",
    description:
      "An interactive museum of the internet — from early websites and search engines to the strange ideas that shaped online culture.",
    domain: "neal.fun/internet-artifacts",
    url: "https://neal.fun/internet-artifacts/",
    pin: "accent",
    note: "the web had lore.",
  },

  {
    number: "02",
    category: "RABBIT HOLE",
    title: "Radio Garden",
    description:
      "Rotate the globe, land somewhere completely random, and listen to live radio broadcasting from that part of the world.",
    domain: "radio.garden",
    url: "https://radio.garden/",
    pin: "olive",
    note: "the planet has a soundtrack.",
  },

  {
    number: "03",
    category: "EXPERIMENT",
    title: "Drive & Listen",
    description:
      "Pick a city, watch its streets pass by and listen to local radio. A strangely convincing way to disappear somewhere else for a while.",
    domain: "driveandlisten.app",
    url: "https://driveandlisten.app/",
    pin: "red",
    note: "cheaper than a plane ticket.",
  },

  {
    number: "04",
    category: "USELESS",
    title: "The Useless Web",
    description:
      "Press one button and surrender control. It sends you to a random website whose existence probably cannot be justified.",
    domain: "theuselessweb.com",
    url: "https://theuselessweb.com/",
    pin: "blue",
    note: "productivity ends here.",
  },

  {
    number: "05",
    category: "CREATIVE CODE",
    title: "Neal.fun",
    description:
      "A collection of playful interactive experiments about everything from the deep sea and outer space to money, scale and internet history.",
    domain: "neal.fun",
    url: "https://neal.fun/",
    pin: "accent",
    note: "this is why I like the web.",
  },

  {
    number: "06",
    category: "WEB DESIGN",
    title: "Brutalist Web Design",
    description:
      "A reminder that websites don't need endless decoration. Readable content, obvious links, working navigation and speed can be the design.",
    domain: "brutalist-web.design",
    url: "https://brutalist-web.design/",
    pin: "olive",
    note: "performance is a feature.",
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
