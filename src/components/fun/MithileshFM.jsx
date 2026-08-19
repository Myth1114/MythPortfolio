import { useEffect, useState } from "react";

import "./MithileshFM.css";

const broadcasts = [
  {
    frequency: "99.7",
    title: "Late Night Debugging",
    description:
      "For the hours when the bug makes absolutely no sense and somehow fixing it feels personal.",
    duration: "04:17",
  },
  {
    frequency: "101.3",
    title: "The AI Era",
    description:
      "A small broadcast about building software in a time when machines can write the first draft.",
    duration: "03:42",
  },
  {
    frequency: "103.9",
    title: "Ship It Anyway",
    description:
      "For unfinished ideas, imperfect interfaces and projects that became better because they were actually released.",
    duration: "05:08",
  },
  {
    frequency: "106.4",
    title: "Internet After Midnight",
    description:
      "A quiet transmission from the strange little corners of the internet worth keeping.",
    duration: "02:56",
  },
];

function MithileshFM() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const broadcast = broadcasts[currentIndex];

  useEffect(() => {
    if (!playing) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        current === broadcasts.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [playing]);

  function changeBroadcast(index) {
    setCurrentIndex(index);
  }

  function nextBroadcast() {
    setCurrentIndex((current) =>
      current === broadcasts.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="mithilesh-fm">
      <div className="mithilesh-fm__header">
        <div>
          <span className="eyebrow">04 — Mithilesh FM</span>

          <h2>
            Broadcasting
            <br />
            <span>from somewhere.</span>
          </h2>
        </div>

        <p>
          No actual radio station exists. I just thought the internet needed
          one.
        </p>
      </div>

      <div className="mithilesh-fm__station">
        <div className="mithilesh-fm__top">
          <div className="mithilesh-fm__brand">
            <span>MITHILESH</span>
            <strong>FM</strong>
          </div>

          <div className="mithilesh-fm__status">
            <span
              className={`mithilesh-fm__indicator ${playing ? "is-live" : ""}`}
            />

            {playing ? "ON AIR" : "STANDBY"}
          </div>
        </div>

        <div className="mithilesh-fm__dial">
          <div className="mithilesh-fm__frequency">
            <span>{broadcast.frequency}</span>
            <small>FM</small>
          </div>

          <div className="mithilesh-fm__scale">
            {Array.from({ length: 17 }).map((_, index) => (
              <span key={index} className={index % 4 === 0 ? "is-major" : ""} />
            ))}
          </div>
        </div>

        <div className="mithilesh-fm__program">
          <span className="mithilesh-fm__label">CURRENT BROADCAST</span>

          <h3>{broadcast.title}</h3>

          <p>{broadcast.description}</p>

          <div className="mithilesh-fm__meta">
            <span>{broadcast.duration}</span>

            <span>
              TRANSMISSION #{String(currentIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="mithilesh-fm__controls">
          <button
            type="button"
            onClick={() => setPlaying((current) => !current)}
            aria-label={playing ? "Pause broadcast" : "Play broadcast"}
            className="mithilesh-fm__play"
          >
            {playing ? "Ⅱ" : "▶"}
          </button>

          <div className="mithilesh-fm__broadcasts">
            {broadcasts.map((item, index) => (
              <button
                key={item.frequency}
                type="button"
                className={index === currentIndex ? "is-active" : ""}
                onClick={() => changeBroadcast(index)}
              >
                {item.frequency}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mithilesh-fm__next"
            onClick={nextBroadcast}
            aria-label="Next broadcast"
          >
            →
          </button>
        </div>

        <div className="mithilesh-fm__footer">
          <span>EST. SOMEWHERE ON THE INTERNET</span>

          <span>NO COMMERCIALS</span>

          <span>NO REQUESTS</span>
        </div>
      </div>
    </section>
  );
}

export default MithileshFM;
