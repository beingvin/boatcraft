import React from "react";

const Services = () => {
  return (
    <section>
      <div>
        <h2 className="section-title services-section-title"> Services</h2>
        <div className="services-container">
          <ul className="services-list">
            <li>
              <div className="services-list-icons">
                <img src="images/worker (1).png" alt="" />
              </div>
              <h3 className="services-list-title">Build</h3>
              <p className="services-list-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                eleifend sagittis vulputate. Nam pulvinar mollis est, ac
                venenatis odio euismod non. Morbi sed nunc metus.
              </p>
            </li>
            <li>
              <div className="services-list-icons">
                <img src="images/yacht.png" alt="" />
              </div>
              <h3 className="services-list-title">Charter</h3>
              <p className="services-list-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                eleifend sagittis vulputate. Nam pulvinar mollis est, ac
                venenatis odio euismod non. Morbi sed nunc metus.
              </p>
            </li>
            <li>
              <div className="services-list-icons">
                <img src="images/wrench (1).png" alt="" />
              </div>
              <h3 className="services-list-title">Refit</h3>
              <p className="services-list-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                eleifend sagittis vulputate. Nam pulvinar mollis est, ac
                venenatis odio euismod non. Morbi sed nunc metus.
              </p>
            </li>

            <li>
              <div className="services-list-icons">
                <img src="images/boat.png" alt="" />
              </div>
              <h3 className="services-list-title">Design</h3>
              <p className="services-list-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                eleifend sagittis vulputate. Nam pulvinar mollis est, ac
                venenatis odio euismod non. Morbi sed nunc metus.
              </p>
            </li>
          </ul>
          <div className="servicecs-findoutmore">
            <a href="#">
              <button className="servicecs-findoutmore-button">
                Find out more &nbsp; <i class="bi bi-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
