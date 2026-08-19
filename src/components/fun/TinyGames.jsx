import { useState } from "react";

import "./TinyGames.css";

const games = [
  {
    id: "guess-tech",
    number: "001",
    title: "Guess the Tech",
    question: "Which one has probably caused the most bugs?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS",
    success: "Correct. CSS has entered the chat.",
    failure: "Close. But you know the answer.",
  },

  {
    id: "spot-bug",
    number: "002",
    title: "Spot the Bug",
    question: "What's wrong with this line?",
    code: "console.log(user.nmae);",
    options: ["Typo", "Missing semicolon", "Wrong variable", "Nothing"],
    answer: "Typo",
    success: "Yep. One typo. Twenty minutes of debugging.",
    failure: "Look closer. Something is slightly... wrong.",
  },

  {
    id: "ship-it",
    number: "003",
    title: "What Would You Ship?",
    question: "You have 30 minutes before launch.",
    options: ["Beautiful but slower", "Simple but ridiculously fast"],
    answer: "Simple but ridiculously fast",
    success: "Ship it. You can make it pretty tomorrow.",
    failure: "Pretty pixels won't save a slow experience.",
  },

  {
    id: "ai-human",
    number: "004",
    title: "AI or Human?",
    question: "Who probably wrote this?",
    code: "const button = document.querySelector('.submit');",
    options: ["AI", "Human", "Both", "Nobody"],
    answer: "Both",
    success: "Exactly. At this point, even the code doesn't know.",
    failure: "Honestly... fair guess.",
  },

  {
    id: "reflex",
    number: "005",
    title: "Developer Reflex",
    question: "What's the first thing you do when something breaks?",
    options: [
      "Read the error",
      "Refresh",
      "Restart everything",
      "Blame the browser",
    ],
    answer: "Read the error",
    success: "A responsible developer. Suspicious.",
    failure: "You know you wanted to blame the browser.",
  },
];

function TinyGames() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const game = games[currentIndex];

  function handleAnswer(option) {
    setSelected(option);
  }

  function nextGame() {
    setSelected(null);

    setCurrentIndex((current) =>
      current === games.length - 1 ? 0 : current + 1
    );
  }

  function selectGame(index) {
    setSelected(null);
    setCurrentIndex(index);
  }

  const answered = selected !== null;
  const correct = selected === game.answer;

  return (
    <section className="tiny-games">
      <div className="tiny-games__header">
        <div>
          <span className="eyebrow">02 — Tiny Games</span>

          <h2>
            A few minutes
            <br />
            <span>to waste.</span>
          </h2>
        </div>

        <p>
          Nothing serious. Just small games for people who clicked this page
          instead of doing what they were supposed to do.
        </p>
      </div>

      <div className="tiny-games__arcade">
        <nav className="tiny-games__nav" aria-label="Tiny games">
          {games.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === currentIndex ? "is-active" : ""}
              onClick={() => selectGame(index)}
            >
              <span>GAME</span>
              {item.number}
            </button>
          ))}
        </nav>

        <div className="tiny-games__game">
          <span className="tiny-games__number">GAME {game.number}</span>

          <h3>{game.title}</h3>

          <p className="tiny-games__question">{game.question}</p>

          {game.code && (
            <pre className="tiny-games__code">
              <code>{game.code}</code>
            </pre>
          )}

          <div className="tiny-games__options">
            {game.options.map((option) => {
              let className = "";

              if (answered) {
                if (option === game.answer) {
                  className = "is-correct";
                } else if (option === selected) {
                  className = "is-wrong";
                }
              }

              return (
                <button
                  key={option}
                  type="button"
                  className={className}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="tiny-games__result">
              <p>{correct ? game.success : game.failure}</p>

              <button
                type="button"
                onClick={nextGame}
                className="tiny-games__next"
              >
                Next game
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TinyGames;
