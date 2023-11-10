import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>Crafts</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src="images/boatcraft-logo-1.png" alt="boatcraft-logo-1"></img>
      </div>
      <div className="enquiry">
        <button className="enquiry-button">Enquiry</button>
      </div>
      <div className="whatsApp-button">
        <a
          href="https://api.whatsapp.com/send/?phone=916548975898&text&type=phone_number&app_absent=0"
          target="_balnk"
        >
          <img src="images/whatsapp.gif" alt="whatsAppButton" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
