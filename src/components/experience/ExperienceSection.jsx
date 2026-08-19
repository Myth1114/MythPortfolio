import experience from "../../data/experience";

import ExperienceItem from "./ExperienceItem";

import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <section className="experience-section section">
      <div className="container">
        <div className="experience-section__header">
          <div>
            <span className="eyebrow">03 — Experience</span>

            <h2 className="section-title">
              Where I've
              <br />
              <span>been.</span>
            </h2>
          </div>

          <p className="experience-section__intro">
            From frontend development to broader technology and digital
            leadership, each role has shaped the way I work.
          </p>
        </div>

        <div className="experience-section__timeline">
          {experience.map((item) => (
            <ExperienceItem key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
