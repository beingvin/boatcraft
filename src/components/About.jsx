import React from "react";

const About = () => {
  return (
    <section>
      <h2 className="section-title about-section-title"> About Us</h2>
      <div
        className="about-container-bg"
        style={{
          backgroundImage: "url(images/sailing-yatch.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="about-container">
          {" "}
          <h2 className="about-title">Boat Craft</h2>
          <p className="about-short-description">
            BoatCraft was established by John Fernandes in 1992. Today, with
            more than 85 employees, BoatCraft has earned a leading position in
            the boat building industry. We are not just a local yard but an
            international company with finesse and quality which is second to
            none. we are still a Goan company with values and a deep respect for
            our maritime heritage.
          </p>
          <button className="about-button">Know More <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </section>
  );
};

export default About;
