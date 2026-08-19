import { useState } from "react";
import { Dices, Sparkles } from "lucide-react";

import "./DeveloperSlotMachine.css";

const slots = [
  {
    label: "STACK",
    values: [
      "React",
      "JavaScript",
      "CSS",
      "AI",
      "Node.js",
      "Python",
      "Supabase",
      "Next.js",
      "PHP",
      "Whatever Works",
    ],
  },
  {
    label: "IDEA",
    values: [
      "a social network for introverts",
      "an app that judges your code",
      "a website nobody asked for",
      "an AI that reviews your life choices",
      "a dashboard for your dashboard",
      "a productivity app that destroys productivity",
      "a button with one job",
      "a portfolio inside a portfolio",
      "a CRM for people who hate CRMs",
      "an app that solves a problem you invented",
    ],
  },
  {
    label: "PURPOSE",
    values: [
      "because why not?",
      "to solve a problem that doesn't exist",
      "for absolutely no reason",
      "to impress one person on the internet",
      "because AI can probably build it",
      "just to see if it works",
      "because someone said it was impossible",
      "for the plot",
      "because the README looked cool",
      "because I already bought the domain",
      "to avoid working on the real project",
      "because it sounded better at 2 AM",
    ],
  },
];

function DeveloperSlotMachine() {
  const [values, setValues] = useState(slots.map((slot) => slot.values[0]));

  const [spinning, setSpinning] = useState(false);
  const [spins, setSpins] = useState(0);

  function randomValue(slot) {
    return slot.values[Math.floor(Math.random() * slot.values.length)];
  }

  function spin() {
    if (spinning) {
      return;
    }

    setSpinning(true);
    setSpins((current) => current + 1);

    const interval = setInterval(() => {
      setValues(slots.map((slot) => randomValue(slot)));
    }, 90);

    setTimeout(() => {
      clearInterval(interval);

      setValues(slots.map((slot) => randomValue(slot)));
      setSpinning(false);
    }, 900);
  }

  return (
    <section className="developer-slot">
      <div className="container">
        <div className="developer-slot__header">
          <div>
            <span className="eyebrow">07 — Developer Slot Machine</span>

            <h2 className="section-title">
              Build something
              <br />
              <span>questionable.</span>
            </h2>
          </div>

          <p>
            No planning. No roadmap. No market research. Just spin the machine
            and accept your fate.
          </p>
        </div>

        <div className="developer-slot__machine">
          <div className="developer-slot__machine-top">
            <div className="developer-slot__brand">
              <Sparkles size={15} strokeWidth={1.4} />

              <span>DEV / 404</span>
            </div>

            <span className="developer-slot__counter">
              SPINS: {String(spins).padStart(3, "0")}
            </span>
          </div>

          <div className="developer-slot__slots">
            {slots.map((slot, index) => (
              <div
                key={slot.label}
                className={`developer-slot__column ${
                  spinning ? "is-spinning" : ""
                }`}
              >
                <span className="developer-slot__label">{slot.label}</span>

                <div className="developer-slot__window">
                  <span>{values[index]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="developer-slot__result">
            <span>YOUR NEXT TERRIBLE IDEA</span>

            <p>
              Build <strong>{values[0]}</strong> <span>—</span> {values[1]}{" "}
              <span>{values[2]}</span>
            </p>
          </div>

          <button
            type="button"
            className="developer-slot__button"
            onClick={spin}
            disabled={spinning}
          >
            <Dices size={18} strokeWidth={1.5} />

            <span>{spinning ? "SPINNING..." : "SPIN THE MACHINE"}</span>
          </button>

          <div className="developer-slot__footer">
            <span>NO PRIZES</span>

            <span>NO GUARANTEES</span>

            <span>ONLY BAD IDEAS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSlotMachine;
