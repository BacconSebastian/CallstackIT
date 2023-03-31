import { useState } from "react";

import Brandmark from "../Brandmark/Brandmark";

import NavbarMobile from "../../assets/Navbar/nav-mobile.svg";
import CloseMenu from "../../assets/shared/close-menu.svg";

import "./Navbar.scss";

const Navbar = ({ navbarStyle }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={"navbar " + (navbarStyle ? navbarStyle : "")}>
      <div className="web">
        <Brandmark navbarStyle={navbarStyle} />
        <ul>
          <li className={navbarStyle ? "" : "pulse"}>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="mobile">
        <Brandmark navbarStyle={navbarStyle} />
        <img
          className={mobileMenu ? "close enable" : "close"}
          src={CloseMenu}
          alt=""
          onClick={() => handleMobileMenu()}
        />
        <img
          className={mobileMenu ? "open" : "open enable"}
          src={NavbarMobile}
          alt=""
          onClick={() => handleMobileMenu()}
        />
        <div className={mobileMenu ? "mobile-menu enable" : "mobile-menu"}>
          <ul>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
