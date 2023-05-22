import React from "react";
import "./NavbarLow.css";

const NavbarLow = () => {
  return (
    <div>
      <div className="navbar-low-main">
        <div className="navbar-low-container">
          <div class="header-menu-low">
            <span>Home</span>
            <span>Categories</span>
            <span>Product</span>
            <span>Pages</span>
            <span>Blog</span>
            <span>AboutUs</span>
            <span>Contact Us</span>
          </div>
          <div className="header-menu-low-options">
            <span>Special Offer!</span>
            <span>Buy Porto!</span>
          </div>
        </div>
      </div>
        <hr/>
    </div>
  );
};

export default NavbarLow;
