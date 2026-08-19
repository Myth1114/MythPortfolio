import thoughts from "../data/thoughts";

import PageHeader from "../components/layout/PageHeader";
import ThoughtCard from "../components/thoughts/ThoughtCard";

import "./Thoughts.css";

function Thoughts() {
  return (
    <main className="thoughts-page">
      <div className="container">
        <PageHeader
          eyebrow="04 — Thoughts"
          title="Things I"
          titleAccent="keep thinking about."
          description="A small personal archive of ideas, observations and things I haven't quite figured out yet."
        />

        <section className="thoughts-page__intro">
          <div className="thoughts-page__intro-label">
            <span className="eyebrow">Personal archive</span>
          </div>

          <div className="thoughts-page__intro-text">
            <p>
              Not everything needs to become an article. Some ideas are better
              left small — a sentence, an observation, something noticed on an
              ordinary day.
            </p>

            <span className="handwritten">collected along the way.</span>
          </div>
        </section>

        <section className="thoughts-page__archive">
          {thoughts.map((thought) => (
            <ThoughtCard key={thought.id} thought={thought} />
          ))}
        </section>

        <div className="thoughts-page__end">
          <span className="eyebrow">End of the archive</span>

          <p className="handwritten">there are probably more somewhere.</p>
        </div>
      </div>
    </main>
  );
}

export default Thoughts;
