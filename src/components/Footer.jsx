import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-upper">
        {" "}
        <div className="footer-logo">
          <img src="images/boatcraft-logo-2.png" alt="boatcraft-logo-2" />
        </div>
        <div className="footer-social-links">
          <p>Follow us |</p>
          <ul>
            <li>
              <a href="#" target="_blank">
                <img src="images/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="images/instagram.png" alt="" />
              </a>
            </li>{" "}
            <li>
              <a href="#" target="_blank">
                <img src="images/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="images/youtube.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-address">
          <h4>Contact Us</h4>
          <p>
            AP1, Reliance park, Colva Beach Rd, Seraulim, Goa. <br />
            403708 <br /> Phone: 6874568488
          </p>
        </div>

        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            BoatCraft was established by John Fernandes in 1992. Today, with
            more than 85 employees, BoatCraft has earned a leading position in
            the boat building industry.
          </p>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-bottom">
        <p>
          © Boatcraft. All rights reserved | &nbsp;
          <a href="https://beingvin.com/" target="_blank">
            Designed & Developed By Beingvin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
