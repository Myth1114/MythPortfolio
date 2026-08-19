import { ArrowUpRight } from "lucide-react";

import AboutIntro from "./AboutIntro";
import PersonalNote from "./PersonalNote";

import Button from "../primitives/Button";
import PaperCard from "../primitives/PaperCard";
import Badge from "../primitives/Badge";
import Pin from "../primitives/Pin";

import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-section__header">
          <div>
            <span className="eyebrow">01 — About</span>

            <h2 className="section-title">
              A little about
              <br />
              <span>me.</span>
            </h2>
          </div>

          <span className="about-section__number">01</span>
        </div>

        <div className="about-section__grid">
          <AboutIntro />

          <div className="about-section__side">
            <PaperCard className="about-section__card" rotation={-1}>
              <Pin position="top-right" color="accent" />

              <Badge variant="accent">Currently</Badge>

              <h3>Building for the web.</h3>

              <p>
                I enjoy turning ideas, designs and problems into interfaces that
                feel simple, responsive and intentional.
              </p>

              <Button variant="secondary" icon={false}>
                More about my journey
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Button>
            </PaperCard>

            <PersonalNote />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
