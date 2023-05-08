import React, { useState } from "react";
import "./NavbarTop.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import usflag from "../../../assets/usa.png";
import fraflag from "../../../assets/france.png";

const NavbarTop = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const handleMouseEnter1 = () => {
    setShowDropdown1(true);
  };

  const handleMouseLeave1 = () => {
    setShowDropdown1(false);
  };
  const handleMouseEnter2 = () => {
    setShowDropdown1(true);
  };

  const handleMouseLeave2 = () => {
    setShowDropdown1(false);
  };
  return (
    <div>
      <div className="main">
        <div className="container">
          {/* ----------------------------- Div 1 OfferTag ----------------------------- */}
          <div className="n-offer">
            <p>FREE Returns. Standard Shipping Orders $99+</p>
          </div>
          {/* ----------------------------- Div 2 Rest of the menu ----------------------------- */}

          <div className="n-options">
            <div className="n-options-main">
              {/* ----------------------------- tmenu ----------------------------- */}
              <div class="header-menu">
                <span>MyAccount</span>
                <span>ContactUs</span>
                <span>Blog</span>
                <span>MyWishlist</span>
                <span>Cart</span>
                <span>Login</span>
              </div>
              <div className="divider1"></div>
              {/* ----------------------------- lANGUAGE ----------------------------- */}
              <div className="options-div">
                <div className="langmain">
                  <div
                    className="nlanguage"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <button>
                      <p>ENG</p> <KeyboardArrowDownIcon />
                    </button>
                    {showDropdown1 && (
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <div className="hicon" style={{ color: "#777" }}>
                              <img src={fraflag} alt="" />
                              <p>EUR</p>
                            </div>
                          </li>
                          <li>
                            <div className="hicon" style={{ color: "#777" }}>
                              <img src={usflag} alt="" />
                              <p>USD</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {/* ----------------------------- Currency ----------------------------- */}

                <div className="currencymain">
                  <div
                    className="ncurrency"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <button>
                      <p>USD</p> <KeyboardArrowDownIcon />
                    </button>
                    {showDropdown1 && (
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <div className="hicon" style={{ color: "#777" }}>
                              <p>USD</p>
                            </div>
                          </li>
                          <li>
                            <div className="hicon" style={{ color: "#777" }}>
                              <p>EUR</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="divider1"></div>
              <div className="tnicons">
                {/* <p style={{ display: "flex" }}>USD</p> */}
                <FacebookIcon className="m-icons" />
                <TwitterIcon className="m-icons" />
                <InstagramIcon className="m-icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
