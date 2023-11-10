import React from "react";

const Crafts = () => {
  return (
    <section>
      <h2 className="section-title services-section-title"> Our crafts</h2>
      <div className="craft-container">
        <div className="craft-category">
          <div className="craft-image">
            <img src="images/speed-boat.jpg" alt="speed-boat" />
          </div>
          <div className="craft-details">
            <h3 className="craft-name">Speed Boats</h3>
            <p className="craft-short-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem
              viverra aliquet eget sit. At quis risus sed vulputate odio ut
              enim. Ultricies tristique nulla aliquet enim tortor. Sit amet nisl
              suscipit adipiscing. Tristique senectus et netus et malesuada
              fames ac turpis.
            </p>
            <button className="craft-buttons">
              Know more <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="craft-category">
          <div className="craft-details">
            <h3 className="craft-name">Parasailing Boats</h3>
            <p className="craft-short-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem
              viverra aliquet eget sit. At quis risus sed vulputate odio ut
              enim. Ultricies tristique nulla aliquet enim tortor. Sit amet nisl
              suscipit adipiscing. Tristique senectus et netus et malesuada
              fames ac turpis.
            </p>
            <button className="craft-buttons">
              Know more <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="craft-image">
            <img src="images/parasailing.jpg" alt="parasailing-boat" />
          </div>
        </div>
        <div className="craft-category">
          <div className="craft-image">
            <img src="images/catamaran.jpg" alt="catamaran" />
          </div>
          <div className="craft-details">
            <h3 className="craft-name">Catamarans</h3>
            <p className="craft-short-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem
              viverra aliquet eget sit. At quis risus sed vulputate odio ut
              enim. Ultricies tristique nulla aliquet enim tortor. Sit amet nisl
              suscipit adipiscing. Tristique senectus et netus et malesuada
              fames ac turpis.
            </p>
            <button className="craft-buttons">
              Know more <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="craft-category">
          <div className="craft-details">
            <h3 className="craft-name">Yacht</h3>
            <p className="craft-short-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem
              viverra aliquet eget sit. At quis risus sed vulputate odio ut
              enim. Ultricies tristique nulla aliquet enim tortor. Sit amet nisl
              suscipit adipiscing. Tristique senectus et netus et malesuada
              fames ac turpis.
            </p>
            <button className="craft-buttons">
              Know more <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="craft-image">
            <img src="images/white-yacht.png" alt="white-yacht" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crafts;
