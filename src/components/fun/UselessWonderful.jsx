import { useState } from "react";
import { Box, Heart, Leaf, MousePointer2, Sparkles } from "lucide-react";

import "./UselessWonderful.css";

const wonders = [
  {
    id: "button",
    label: "Pointless Button",
    icon: MousePointer2,
  },
  {
    id: "rock",
    label: "Digital Rock",
    icon: Box,
  },
  {
    id: "plant",
    label: "Tiny Plant",
    icon: Leaf,
  },
  {
    id: "mystery",
    label: "Mystery Box",
    icon: Box,
  },
  {
    id: "better",
    label: "Make It Better",
    icon: Sparkles,
  },
  {
    id: "heart",
    label: "A Little Heart",
    icon: Heart,
  },
];

const mysteryMessages = [
  "You found absolutely nothing.",
  "That was unnecessary.",
  "Congratulations. You opened a box.",
  "There was probably something here.",
  "The internet approves.",
  "Keep exploring.",
];

function UselessWonderful() {
  const [active, setActive] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [plantWater, setPlantWater] = useState(0);
  const [better, setBetter] = useState(false);
  const [mystery, setMystery] = useState("");

  function handleWonder(id) {
    setActive(id);

    if (id === "button") {
      setClicks((current) => current + 1);
    }

    if (id === "plant") {
      setPlantWater((current) => Math.min(current + 1, 5));
    }

    if (id === "better") {
      setBetter((current) => !current);
    }

    if (id === "mystery") {
      const random =
        mysteryMessages[Math.floor(Math.random() * mysteryMessages.length)];

      setMystery(random);
    }
  }

  return (
    <section className="useless-wonderful">
      <div className="container">
        <div className="useless-wonderful__header">
          <div>
            <span className="eyebrow">06 — Useless but Wonderful</span>

            <h2 className="section-title">
              Things that
              <br />
              <span>serve no purpose.</span>
            </h2>
          </div>

          <p>
            Not everything on the internet needs to be useful. Some things can
            simply exist because they're nice.
          </p>
        </div>

        <div
          className={`useless-wonderful__cabinet ${better ? "is-better" : ""}`}
        >
          <div className="useless-wonderful__cabinet-top">
            <span>THE CABINET OF SMALL THINGS</span>

            <span>EST. 2026</span>
          </div>

          <div className="useless-wonderful__objects">
            {wonders.map((wonder) => {
              const Icon = wonder.icon;

              return (
                <button
                  key={wonder.id}
                  type="button"
                  className={`useless-wonderful__object ${
                    active === wonder.id ? "is-active" : ""
                  }`}
                  onClick={() => handleWonder(wonder.id)}
                >
                  <span className="useless-wonderful__object-icon">
                    <Icon size={21} strokeWidth={1.4} />
                  </span>

                  <span className="useless-wonderful__object-label">
                    {wonder.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="useless-wonderful__display">
            {!active && (
              <div className="useless-wonderful__empty">
                <span>✦</span>

                <p>
                  Pick something.
                  <br />
                  Nothing important will happen.
                </p>
              </div>
            )}

            {active === "button" && (
              <div className="wonder-result">
                <span className="wonder-result__big">CLICK</span>

                <p>
                  You've clicked this button <strong>{clicks}</strong>{" "}
                  {clicks === 1 ? "time" : "times"}.
                </p>

                <small>This information will never be useful.</small>
              </div>
            )}

            {active === "rock" && (
              <div className="wonder-result">
                <div className="wonder-rock">◼</div>

                <p>It is a rock.</p>

                <small>You may now continue with your day.</small>
              </div>
            )}

            {active === "plant" && (
              <div className="wonder-result">
                <div className="wonder-plant" data-growth={plantWater}>
                  🌱
                </div>

                <p>
                  {plantWater === 0 && "The plant would appreciate some water."}

                  {plantWater === 1 && "A little water. Good start."}

                  {plantWater === 2 && "It seems happier."}

                  {plantWater === 3 && "Look at it growing."}

                  {plantWater === 4 && "This is getting serious."}

                  {plantWater === 5 &&
                    "You've created a thriving digital ecosystem."}
                </p>

                <small>Water level: {plantWater}/5</small>
              </div>
            )}

            {active === "mystery" && (
              <div className="wonder-result">
                <div className="wonder-box">
                  <Box size={42} strokeWidth={1.2} />
                </div>

                <p>{mystery || "Open the box."}</p>

                <small>There is definitely something inside.</small>
              </div>
            )}

            {active === "better" && (
              <div className="wonder-result">
                <Sparkles
                  className="wonder-sparkle"
                  size={42}
                  strokeWidth={1.2}
                />

                <p>
                  {better
                    ? "It is now 3.7% better."
                    : "Could this be slightly better?"}
                </p>

                <small>Scientific accuracy not guaranteed.</small>
              </div>
            )}

            {active === "heart" && (
              <div className="wonder-result">
                <Heart className="wonder-heart" size={48} strokeWidth={1.2} />

                <p>Here. Have a little heart.</p>

                <small>No particular reason.</small>
              </div>
            )}
          </div>

          <div className="useless-wonderful__footer">
            <span>COMPLETELY UNNECESSARY</span>

            <span>100% HANDCRAFTED NONSENSE</span>

            <span>PLEASE ENJOY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UselessWonderful;
