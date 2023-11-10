import React from "react";

const Featured = () => {
  return (
    <section className="featured-section">
      <h2 className="section-title featured-section-title">
        {" "}
        Featured Products
      </h2>
      <div className="featured-container">
        <div className="featured-products">
          <img src="images/bc-65.jpg" alt="bc-65" />
          <img
            src="images/bs-30-parasailing-winch-boat.jpg"
            alt="bs-30-parasailing-winch-boat"
          />
          <img src="images/bc-20-sea-quest.jpg" alt="bc-20-sea-quest" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
