import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div
        className="hero-container"
        style={{
          backgroundImage: "url(images/boatcraft-hero-background-2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="hero-title">Escape. Explore. Live.</h1>
        <hr className="hero-hr" />
        <p className="hero-subtitle">
          Building boats is not just our passion or plasure but <br /> its our
          enduring commitment towards finest quality and safefty
        </p>
        <div className="hero-button">
          <a href="#">
            <button className="hero-button-1">
              Know us &nbsp; <i class="bi bi-arrow-right"></i>
            </button>
          </a>
          <a href="#">
            <button className="hero-button-2">Enquiry </button>
          </a>
        </div>
        <div className="hero-down-arrow">
          <i class="bi bi-arrow-down-circle-fill"></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;
