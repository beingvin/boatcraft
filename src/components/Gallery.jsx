import React from "react";

const Gallery = () => {
  return (
    <section>
      <h2 className="section-title gallery-section-title">Gallery</h2>
      <div className="gallery-container">
        <div className="gallery-image">
          <img src="images/boats-048.jpg" alt="boats-048.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img src="images/13-scaled.jpg" alt="13-scaled.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img src="images/lund-boats.jpg" alt="lund-boats.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img src="images/sea-breez.jpg" alt="sea-breez.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img
            src="images/bc-16-base-model-1.png"
            alt="bc-16-base-model-1.png"
          />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img src="images/speed-boat.jpg" alt="speed-boat.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img src="images/catamaran.jpg" alt="catamaran.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img
            src="images/slider3-removebg-preview-1.png"
            alt="slider3-removebg-preview-1.png"
          />
          <button className="gellery-view-buttons">View</button>
        </div>
        <div className="gallery-image">
          <img src="images/bc-65.jpg" alt="bc-65.jpg" />
          <button className="gellery-view-buttons">View</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
