import React, { useState } from "react";
import "./NavbarMid.css";
import logo from "../../../assets/logosite.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const NavbarMid = () => {
  const [selectedCat, setSelectedCat] = useState("");
  const handleCatChange = (event) => {
    setSelectedCat(event.target.value);
  };
  return (
    <div>
      <div className="midbar-main">
        <div className="midbar-container">
          <div className="midbarlogo">
            <img src={logo} alt="" />
          </div>
          <div className="midbar-options">
            <div className="midbar-search">
              <div className="input">
                <input type="text" placeholder="Search..." />
              </div>
              <div className="search-options">
                <div className="dividersearchbar"></div>
                <select value={selectedCat} onChange={handleCatChange}>
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="dividersearchbar"></div>
              </div>
              <div className="search-icon">
                <SearchOutlinedIcon className="mui-search" />
              </div>
            </div>
            <div className="midbar-contactnum">
              <div className="phone-logo">
                <LocalPhoneIcon
                  style={{
                    fontSize: "inherit",
                  }}
                />
              </div>
              <div className="num">
                <h6>Call Us Now</h6>
                <p>+1234567890</p>
              </div>
            </div>
            <div className="midbar-navicons">
              <div className="navbar-icon-container">
                <Person2OutlinedIcon
                  style={{
                    fontSize: "inherit",
                  }}
                  className="navbar-icons"
                />
                <FavoriteBorderIcon
                  style={{
                    fontSize: "inherit",
                  }}
                  className="navbar-icons"
                />
                <LocalMallOutlinedIcon
                  style={{
                    fontSize: "inherit",
                  }}
                  className="navbar-icons"
                />
                <KeyboardArrowLeftIcon
                  style={{
                    fontSize: "inherit",
                  }}
                  className="navbar-icons"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMid;
