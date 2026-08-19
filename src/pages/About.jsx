import PageHeader from "../components/layout/PageHeader";

import ExperienceSection from "../components/experience/ExperienceSection";
import EducationSection from "../components/education/EducationSection";
import SkillsSection from "../components/skills/SkillsSection";

import SEO from "../components/seo/SEO";

import "./About.css";

function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Mithilesh Yadav, a developer and creative builder from Nepal exploring technology, design, ideas and meaningful digital experiences."
        path="/about"
      />
      <main className="about-page">
        <div className="container">
          <PageHeader
            eyebrow="02 — About"
            title="A little more"
            titleAccent="about me."
            description="Frontend developer, digital builder and technology-focused creative."
          />

          <section className="about-page__intro">
            <div className="about-page__intro-label">
              <span className="eyebrow">Who I am</span>
            </div>

            <div className="about-page__intro-content">
              <p className="about-page__lead">
                I'm Mithilesh Yadav, a frontend developer from Nepal with a
                background in Information Science and Engineering. My work sits
                somewhere between technology, design and digital products —
                building interfaces, improving websites and helping ideas become
                useful experiences on the web.
              </p>

              <p>
                I started my professional journey in frontend development,
                working with JavaScript, React and modern web technologies. Over
                time, my responsibilities expanded beyond development into
                technology management, digital presence, social media and
                marketing strategy.
              </p>

              <p>
                I enjoy understanding how things work, simplifying complicated
                ideas and turning them into digital experiences that feel clear,
                useful and intentional.
              </p>
            </div>
          </section>
        </div>

        <ExperienceSection />

        <EducationSection />
        <SkillsSection />
      </main>
    </>
  );
}

export default About;
