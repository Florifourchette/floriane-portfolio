import React from "react";
import Certifications from "./Certifications";
import References from "./References";

const CertificationsPage = () => {
  return (
    <>
      <div className="presentation_paragraph">
        <p>
          I like to learn and love to see myself grow and gain new skills.
          Below, you'll find some examples of what I've learnt and also what
          people thought about me while working with me.
        </p>
      </div>
      <div className="certification_container">
        <Certifications />
        <References />
      </div>
    </>
  );
};

export default CertificationsPage;
