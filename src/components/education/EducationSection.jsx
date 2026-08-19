import education from "../../data/education";

import EducationItem from "./EducationItem";

import "./EducationSection.css";

function EducationSection() {
  return (
    <section className="education-section section">
      <div className="container">
        <div className="education-section__header">
          <div>
            <span className="eyebrow">04 — Education</span>

            <h2 className="section-title">
              Where it
              <br />
              <span>started.</span>
            </h2>
          </div>

          <p className="education-section__intro">
            A foundation in science and engineering that eventually led me
            toward frontend development and digital work.
          </p>
        </div>

        <div className="education-section__list">
          {education.map((item) => (
            <EducationItem key={item.id} education={item} />
          ))}
        </div>
        <div className="education-section__credentials">
          <div className="education-section__credentials-heading">
            <span className="eyebrow">Credentials</span>

            <h3>Continuous learning.</h3>
          </div>

          <div className="education-section__certificate">
            <div>
              <span>JavaScript Course</span>

              <strong>Udemy</strong>
            </div>

            <span className="education-section__certificate-mark">
              Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
