import PersonalNote from "../about/PersonalNote";

import SkillGroup from "./SkillGroup";

import "./SkillsSection.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, maintainable interfaces with a focus on clean structure, reusable components and thoughtful interaction.",
    skills: ["ReactJS", "JavaScript", "HTML5", "CSS3"],
  },

  {
    number: "02",
    title: "UI / UX",
    description:
      "Turning visual ideas into interfaces that are clear, responsive and easy to use across different screen sizes.",
    skills: [
      "Responsive Design",
      "UI Design",
      "UX Principles",
      "Visual Hierarchy",
    ],
  },

  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Working with modern development tools and practices to keep projects organized, consistent and maintainable.",
    skills: ["Git", "GitHub", "Bootstrap", "Material UI"],
  },

  {
    number: "04",
    title: "Problem Solving",
    description:
      "Debugging issues, improving performance and finding practical solutions when things don't work as expected.",
    skills: ["Debugging", "Performance", "Cross-Browser", "Optimization"],
  },
];

function SkillsSection() {
  return (
    <section className="skills-section section">
      <div className="container">
        <div className="skills-section__header">
          <div>
            <span className="eyebrow">05 — Capabilities</span>

            <h2 className="section-title">
              Things I enjoy
              <br />
              <span>working with.</span>
            </h2>
          </div>

          <p className="skills-section__intro">
            A collection of technologies, practices and ways of thinking that
            shape how I build.
          </p>
        </div>

        <div className="skills-section__list">
          {skillGroups.map((group) => (
            <SkillGroup key={group.number} {...group} />
          ))}
        </div>

        <div className="skills-section__note">
          <PersonalNote />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
