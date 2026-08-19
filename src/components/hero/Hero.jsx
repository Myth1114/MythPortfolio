import { ArrowDown, ArrowUpRight } from "lucide-react";

import AvailabilityBadge from "./AvailabilityBadge";
import IdentityCard from "./IdentityCard";

import Button from "../primitives/Button";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* LEFT SIDE */}

          <div className="hero__content">
            <AvailabilityBadge />

            <div className="hero__heading">
              <span className="hero__eyebrow">Hello, I'm</span>

              <h1 className="hero__title">
                Mithilesh
                <br />
                <span>Yadav.</span>
              </h1>
            </div>

            <p className="hero__description">
              Frontend Developer crafting thoughtful, responsive digital
              experiences with JavaScript and React.
            </p>

            <div className="hero__actions">
              <Button>Explore my work</Button>

              <Button variant="secondary" icon={false}>
                About me
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Button>
            </div>

            <div className="hero__scroll">
              <ArrowDown size={15} strokeWidth={1.6} />

              <span>Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="hero__visual">
            <IdentityCard />

            <span className="hero__annotation handwritten">
              a little corner
              <br />
              of the internet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
