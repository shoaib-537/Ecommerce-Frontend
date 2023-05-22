import React from "react";
import "./Header.css";
import NavbarTop from "./components/NavbarTop";
import NavbarMid from "./components/NavbarMid";
import NavbarLow from "./components/NavbarLow";
const Header = () => {
  return (
    <div>
      <div className="header-main">
        <div className="header-container">
          <NavbarTop />
          <div className="header-divider"></div>
          <NavbarMid />
        </div>
      </div>
      <div className="navbarlow">
        <NavbarLow />
      </div>
    </div>
  );
};

export default Header;
