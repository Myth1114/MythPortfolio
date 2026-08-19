import Tape from "../primitives/Tape";

import "./PersonalNote.css";

function PersonalNote() {
  return (
    <div className="personal-note">
      <Tape position="top-center" rotation={3} />

      <p className="handwritten">
        "Good interfaces should feel obvious — not complicated."
      </p>

      <span>— something I keep in mind</span>
    </div>
  );
}

export default PersonalNote;
