import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./app.css";
import About from "./components/About";
import Crafts from "./components/Crafts";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Crafts />
      <Featured />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
