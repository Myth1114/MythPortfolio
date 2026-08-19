import { useState } from "react";

import funChoices from "../../data/funChoices";

import Pin from "../primitives/Pin";

import "./ChooseSomething.css";

function ChooseSomething() {
  const [choice, setChoice] = useState(null);

  function chooseSomething() {
    const randomIndex = Math.floor(Math.random() * funChoices.length);

    setChoice(funChoices[randomIndex]);
  }

  return (
    <section className="choose-something">
      <div className="choose-something__header">
        <div>
          <span className="eyebrow">01 — Random</span>

          <h2>
            Choose
            <br />
            <span>something.</span>
          </h2>
        </div>

        <p>
          I don't know what you're looking for. Let me choose something for you.
        </p>
      </div>

      <div className="choose-something__stage">
        {!choice ? (
          <div className="choose-something__empty">
            <span className="choose-something__question">?</span>

            <p>
              There is no particularly good reason for this button to exist.
            </p>

            <button
              type="button"
              onClick={chooseSomething}
              className="choose-something__button"
            >
              Choose something
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        ) : (
          <article className="choose-something__result">
            <Pin position="top-right" color="accent" />

            <span className="choose-something__result-label">
              {choice.label}
            </span>

            <h3>{choice.title}</h3>

            <p>{choice.text}</p>

            <button
              type="button"
              onClick={chooseSomething}
              className="choose-something__again"
            >
              Again ↻
            </button>
          </article>
        )}
      </div>
    </section>
  );
}

export default ChooseSomething;
