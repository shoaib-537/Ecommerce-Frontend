import React from "react";
import "./Header.css";
import NavbarTop from "./components/NavbarTop";
// import NavbarMid from "./components/NavbarMid";
const Header = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <NavbarTop />
        </div>
      </div>

      {/* <NavbarMid/> */}
    </div>
  );
};

export default Header;
