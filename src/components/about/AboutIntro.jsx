import "./AboutIntro.css";

function AboutIntro() {
  return (
    <div className="about-intro">
      <p className="about-intro__lead">
        I'm Mithilesh, a frontend developer who enjoys creating thoughtful
        digital experiences.
      </p>

      <div className="about-intro__body">
        <p>
          My journey into development began with Information Science and
          Engineering, where I built the foundation for understanding how
          technology works.
        </p>

        <p>
          Over time, my interest moved toward frontend development — the place
          where technology, design and human interaction meet.
        </p>

        <p>
          Today, I work primarily with JavaScript and React, with a strong focus
          on responsive interfaces, clean code and meaningful user experiences.
        </p>
      </div>

      <div className="about-intro__facts">
        <div>
          <span>Education</span>

          <strong>B.E. — Information Science</strong>
        </div>

        <div>
          <span>CGPA</span>

          <strong>8.26</strong>
        </div>

        <div>
          <span>Based in</span>

          <strong>Nepal</strong>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
