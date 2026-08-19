import journey from "../data/journey";

import PageHeader from "../components/layout/PageHeader";
import JourneyItem from "../components/journey/JourneyItem";
import SEO from "../components/seo/SEO";

// import "./Journey.css";

function Journey() {
  return (
    <>
      <SEO
        title="Journey"
        description="Follow Mithilesh Yadav's journey through learning, building, experimentation and the experiences that shaped his path as a developer."
        path="/journey"
      />
      <main className="journey-page">
        <div className="container">
          <PageHeader
            eyebrow="06 — Journey"
            title="How I got"
            titleAccent="here."
            description="A timeline of the places, projects and ideas that gradually shaped the way I build and think."
          />

          <section className="journey-page__timeline">
            {journey.map((item, index) => (
              <JourneyItem key={item.id} item={item} index={index} />
            ))}
          </section>

          <section className="journey-page__closing">
            <span className="eyebrow">The road ahead</span>

            <h2>
              Still building.
              <br />
              <span>Still curious.</span>
            </h2>

            <p>
              The interesting part is that the journey doesn't really have an
              ending. There are still technologies to learn, things to build and
              better questions to ask.
            </p>

            <span className="journey-page__signature handwritten">
              — Mithilesh
            </span>
          </section>
        </div>
      </main>
    </>
  );
}

export default Journey;
