import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-preview__grid">
          <div className="about-preview__label">
            <span className="eyebrow">02 — A little about me</span>
          </div>

          <div className="about-preview__content">
            <h2 className="section-title">
              I build things
              <br />
              <span>for the web.</span>
            </h2>

            <div className="about-preview__text">
              <p>
                I'm Mithilesh, a frontend developer with a background in
                Information Science and Engineering.
              </p>

              <p>
                Over the years, my work has grown beyond writing interfaces into
                building digital experiences, exploring design, improving
                products and helping businesses use technology more effectively.
              </p>
            </div>

            <Link to="/about" className="about-preview__link">
              More about me
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
