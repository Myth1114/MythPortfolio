import Tape from "../primitives/Tape";
import Pin from "../primitives/Pin";

import "./IdentityCard.css";

function IdentityCard() {
  return (
    <div className="identity-card">
      <Tape position="top-center" rotation={-4} />

      <Pin position="top-right" color="accent" />

      <div className="identity-card__image">
        <div className="identity-card__placeholder">
          <span>YOUR PHOTO</span>
        </div>
      </div>

      <div className="identity-card__info">
        <div>
          <span className="identity-card__label">Name</span>

          <strong>Mithilesh Yadav</strong>
        </div>

        <div>
          <span className="identity-card__label">Based in</span>

          <strong>Nepal</strong>
        </div>
      </div>

      <span className="identity-card__note handwritten">
        building things for the web
      </span>
    </div>
  );
}

export default IdentityCard;
