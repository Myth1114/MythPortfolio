import { useState } from "react";
import { ArchiveX, ArrowUpRight, RotateCcw } from "lucide-react";

import Pin from "../primitives/Pin";

import "./AntiPortfolio.css";

const failures = [
  {
    number: "01",
    status: "ABANDONED",
    title: "The institute website that never made it out.",
    text: "Started building a website for an institute. Somewhere along the way, the project joined the long list of things that looked promising until life, priorities, or motivation got in the way.",
    year: "—",
    pin: "accent",
  },
  {
    number: "02",
    status: "QUESTIONABLE",
    title: "I rebuilt my portfolio instead of working on it.",
    text: "There was already a portfolio. It worked. Then I decided it could be better. So naturally, I rebuilt the whole thing. And then rebuilt parts of it again.",
    year: "—",
    pin: "olive",
  },
  {
    number: "03",
    status: "HUMBLING",
    title: "The bug was a typo.",
    text: "Hours of debugging. Checking imports. Checking logic. Checking everything. The problem? A typo. Sometimes the debugger is just a better pair of eyes.",
    year: "—",
    pin: "red",
  },
  {
    number: "04",
    status: "STILL LEARNING",
    title: "The part of development I kept avoiding.",
    text: "Frontend made sense to me. Backend was a different story. Requests, databases, authentication, APIs... Eventually I stopped avoiding it and started learning it.",
    year: "—",
    pin: "blue",
  },
  {
    number: "05",
    status: "QUESTIONABLE BUT FUN",
    title: "The feature nobody asked for.",
    text: "A normal portfolio probably needed a better case-study section. I built a Fun page instead. Games, a fake terminal, a radio station, strange internet finds, a slot machine and an Anti-Portfolio.",
    year: "2026",
    pin: "accent",
  },
  {
    number: "06",
    status: "LEARNED THE HARD WAY",
    title: "CSS taught me humility.",
    text: "It starts with: 'Just one small change.' Three hours later you're wondering why changing one margin moved something on the other side of the page.",
    year: "—",
    pin: "olive",
  },
  {
    number: "07",
    status: "ARCHIVED",
    title: "Please don't look at version one.",
    text: "There are old websites and projects I look at now and wonder how I ever thought they looked good. At the time, though? I was proud of them.",
    year: "—",
    pin: "red",
  },
  {
    number: "08",
    status: "WORKS ON MY MACHINE",
    title: "Please don't touch that code.",
    text: "Sometimes the code works. I don't completely understand why it works. And honestly, I'm not interested in finding out. The safest strategy is to leave it exactly where it is.",
    year: "—",
    pin: "blue",
  },
  {
    number: "09",
    status: "NOT INCLUDED",
    title: '"Can you just add this one thing?"',
    text: "An educational consultancy once asked for a few additional features. The features weren't the problem. The problem was the expectation that they should somehow appear for free.",
    year: "—",
    pin: "accent",
  },
  {
    number: "10",
    status: "ONE MORE CHANGE",
    title: "It was already finished.",
    text: "The website worked. It looked good. It was responsive. So naturally, I started changing it again. Then the spacing. Then the typography. Then the cards. Then the cards again.",
    year: "—",
    pin: "olive",
  },
  {
    number: "11",
    status: "INSTALLED",
    title: "There has to be a library for this.",
    text: "Instead of spending 30 minutes building something myself, I sometimes spend two hours searching for the perfect package. Then I realize I could have written the feature myself.",
    year: "—",
    pin: "red",
  },
  {
    number: "12",
    status: "RTFM",
    title: "The answer was literally in the documentation.",
    text: "Spent time searching. Tried different approaches. Changed the code. Questioned my entire architecture. Eventually opened the documentation properly. There it was. Right there.",
    year: "—",
    pin: "blue",
  },
  {
    number: "13",
    status: "COMING SOON™",
    title: "I'll learn graphic design someday.",
    text: "Frontend? Comfortable. CSS? Complicated relationship. Backend? Still learning. Graphic design? Yeah, I'll properly learn that someday.",
    year: "—",
    pin: "accent",
  },
  {
    number: "14",
    status: "ARCHIVED",
    title: "Please don't look at version one.",
    text: "There are old websites and projects I look at now and wonder how I ever thought they looked good. At the time, though? I was proud of them. That's probably the point.",
    year: "—",
    pin: "olive",
  },
  {
    number: "15",
    status: "WORKS ON MY MACHINE",
    title: "It looked perfect on my screen.",
    text: "Then I opened it on another device. Everything was somewhere it shouldn't be. So began the familiar journey of changing one CSS rule, breaking three other things, and somehow ending up back where I started.",
    year: "—",
    pin: "red",
  },
  {
    number: "16",
    status: "UNDO EVERYTHING",
    title: "I should not have clicked that.",
    text: "Sometimes you make a change because you're convinced it'll improve something. Then you save, refresh, and immediately realize you've made things worse.",
    year: "—",
    pin: "blue",
  },
  {
    number: "17",
    status: "INSPIRATION DETECTED",
    title: "I saw someone else's work and thought: I want that.",
    text: "Not copying it. Just that feeling. That moment when someone else's project makes you want to open your editor and start building something immediately.",
    year: "—",
    pin: "accent",
  },
  {
    number: "18",
    status: "SCOPE: UNKNOWN",
    title: "It started as a small project.",
    text: "Then came one feature. Then another. Then a better UI. Then authentication. Then a dashboard. Eventually I had built an entirely different product.",
    year: "—",
    pin: "olive",
  },
  {
    number: "19",
    status: "LESSON LEARNED",
    title: "I knew how to write code. I didn't know how to write good code.",
    text: "Older projects are a reminder that knowing syntax isn't the same thing as understanding software. I learned a lot of those principles by first doing almost the opposite.",
    year: "—",
    pin: "red",
  },
];

function AntiPortfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleFailures = showAll ? failures : failures.slice(0, 4);

  return (
    <section className="anti-portfolio">
      <div className="container">
        <div className="anti-portfolio__header">
          <div>
            <span className="eyebrow">08 — The Anti-Portfolio</span>

            <h2 className="section-title">
              Things I
              <br />
              <span>probably shouldn't show.</span>
            </h2>
          </div>

          <p>
            Every developer has a graveyard. These are the things that didn't
            make it into the portfolio.
          </p>
        </div>

        <div className="anti-portfolio__archive">
          <div className="anti-portfolio__archive-top">
            <div className="anti-portfolio__archive-title">
              <ArchiveX size={17} strokeWidth={1.4} />

              <span>REJECTED WORKS ARCHIVE</span>
            </div>

            <span>CLASSIFIED / 2026</span>
          </div>

          <div className="anti-portfolio__grid">
            {visibleFailures.map((item) => (
              <article key={item.number} className="anti-card">
                <div className="anti-card__paper">
                  <Pin position="top-right" color={item.pin} />

                  <div className="anti-card__top">
                    <span>{item.number}</span>

                    <span className="anti-card__status">{item.status}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="anti-card__bottom">
                    <span>{item.year}</span>

                    <span className="anti-card__stamp">NOT APPROVED</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="anti-portfolio__footer">
            <span>SOME THINGS ARE BETTER LEFT UNPUBLISHED.</span>

            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
            >
              <RotateCcw size={14} strokeWidth={1.5} />

              {showAll ? "HIDE ARCHIVE" : "OPEN FULL ARCHIVE"}
            </button>
          </div>
        </div>

        <div className="anti-portfolio__closing">
          <span className="handwritten">
            anyway, here's to the next bad idea.
          </span>

          <ArrowUpRight size={18} strokeWidth={1.3} />
        </div>
      </div>
    </section>
  );
}

export default AntiPortfolio;
