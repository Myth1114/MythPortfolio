import { useEffect, useRef, useState } from "react";

import "./FakeTerminal.css";

const COMMANDS = {
  help: [
    "Available commands:",
    "",
    "about      who is Mithilesh?",
    "work       things I've built",
    "skills     things I work with",
    "ai         thoughts on the AI era",
    "coffee     important information",
    "secret     ...",
    "clear      clear the terminal",
  ],

  about: [
    "Mithilesh Yadav",
    "Frontend Developer",
    "",
    "I build interfaces, websites and occasionally",
    "things that probably didn't need to exist.",
  ],

  work: [
    "Current projects:",
    "",
    "→ The Open Letter",
    "→ The Apex Global",
    "→ Shiksha Sewa",
    "→ Personal Portfolio",
    "",
    "Some are finished.",
    "Some are still being figured out.",
  ],

  skills: [
    "Things I enjoy working with:",
    "",
    "React",
    "JavaScript",
    "HTML / CSS",
    "Responsive Design",
    "UI / UX",
    "Git & GitHub",
    "",
    "Still learning. Still breaking things.",
  ],

  ai: [
    "AI is changing the way software gets made.",
    "",
    "I don't think the interesting question is",
    '"Will AI replace developers?"',
    "",
    "The more interesting question is:",
    '"What will developers build when writing code',
    "is no longer the slowest part of building software?",
  ],

  coffee: [
    "Coffee status:",
    "",
    "[██████████████████░░] 90%",
    "",
    "System operational.",
  ],

  secret: [
    "You found the secret command.",
    "",
    "There isn't actually a secret.",
    "",
    "...unless this message counts.",
    "",
    "Congratulations. You successfully explored",
    "a website instead of scrolling past it.",
  ],
};

const INITIAL_LINES = [
  "Welcome to Mithilesh's corner of the internet.",
  "Type 'help' to see what you can do.",
];

function FakeTerminal() {
  const [history, setHistory] = useState(INITIAL_LINES);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  function focusTerminal() {
    inputRef.current?.focus();
  }

  function runCommand(command) {
    const normalized = command.trim().toLowerCase();

    if (!normalized) {
      return;
    }

    if (normalized === "clear") {
      setHistory([]);
      return;
    }

    if (COMMANDS[normalized]) {
      setHistory((current) => [
        ...current,
        `$ ${command}`,
        ...COMMANDS[normalized],
      ]);

      return;
    }

    if (normalized === "sudo") {
      setHistory((current) => [
        ...current,
        `$ ${command}`,
        "Nice try.",
        "You don't have sudo access here.",
      ]);

      return;
    }

    if (normalized === "exit") {
      setHistory((current) => [
        ...current,
        `$ ${command}`,
        "There is nowhere to exit to.",
        "You are already on the internet.",
      ]);

      return;
    }

    setHistory((current) => [
      ...current,
      `$ ${command}`,
      `command not found: ${normalized}`,
      "Type 'help' for available commands.",
    ]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    runCommand(input);
    setInput("");
  }

  return (
    <section className="fake-terminal">
      <div className="fake-terminal__header">
        <div>
          <span className="eyebrow">03 — Fake Terminal</span>

          <h2>
            Don't just
            <br />
            <span>look around.</span>
          </h2>
        </div>

        <p>
          There are a few things hidden in here. You could click around... or
          you could use the terminal.
        </p>
      </div>

      <div
        className="fake-terminal__window"
        onClick={focusTerminal}
        role="presentation"
      >
        <div className="fake-terminal__bar">
          <div className="fake-terminal__dots">
            <span />
            <span />
            <span />
          </div>

          <span className="fake-terminal__title">mithilesh@internet ~</span>
        </div>

        <div ref={terminalRef} className="fake-terminal__screen">
          {history.map((line, index) => (
            <div
              key={`${line}-${index}`}
              className={
                line.startsWith("$ ")
                  ? "fake-terminal__line fake-terminal__command"
                  : "fake-terminal__line"
              }
            >
              {line || "\u00A0"}
            </div>
          ))}

          <form className="fake-terminal__prompt" onSubmit={handleSubmit}>
            <span>$</span>

            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-label="Terminal command"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default FakeTerminal;
