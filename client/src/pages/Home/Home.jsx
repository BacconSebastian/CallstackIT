import React, { useEffect, useState } from "react";

import Approach from "../../components/Approach/Approach";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

import "./Home.scss";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      setScrollY(scroll);
    });
  }, []);

  useEffect(() => {
    if (scrollY >= 30) {
      setNavbarStyle("fixed");
    } else {
      setNavbarStyle("");
    }
  }, [scrollY]);

  return (
    <div className="home">
      <Navbar headNavbar={true} />
      {navbarStyle === "fixed" && <Navbar navbarStyle={navbarStyle} />}
      <Approach />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
