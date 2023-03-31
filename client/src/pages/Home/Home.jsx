import React, { useEffect, useState } from "react";

import Approach from "../../components/Approach/Approach";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.scss";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll < 120) {
        setScrollY(scroll);
      }
    });
  }, []);

  useEffect(() => {
    if (scrollY >= 60) {
      setNavbarStyle("fixed");
    } else {
      setNavbarStyle("");
    }
  }, [scrollY]);

  return (
    <div className="home">
      <Navbar />
      {navbarStyle === "fixed" && <Navbar navbarStyle={navbarStyle} />}
      {/* <Approach /> */}
    </div>
  );
};

export default Home;
