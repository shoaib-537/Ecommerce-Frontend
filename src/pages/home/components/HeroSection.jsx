import React from "react";
import "./HeroSection.css";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CableIcon from '@mui/icons-material/Cable';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
const HeroSection = () => {
  return (
    <div>
      <div className="heroContainer">
        <div className="heroMain">
          <div className="heroMenu">
            <div className="menuTitle">
              <span>TOP CATEGORIES</span>
            </div>
            <div className="menucategory">
              <div className="menucategory1">
                <CheckroomIcon />
                <span>Fashion</span>
              </div>
              <div className="heroDeivider">
                <hr />
              </div>
              <div className="menucategory1">
                <CableIcon />
                <span>Electronics</span>
              </div>
              <div className="heroDeivider">
                <hr />
              </div>
              <div className="menucategory1">
                <CardGiftcardIcon />
                <span>Gift</span>
              </div>
              <div className="heroDeivider">
                <hr />
              </div>
              <div className="menucategory1">
                <LocalFloristIcon />
                <span>Home & Garden</span>
              </div>
              <div className="heroDeivider">
                <hr />
              </div>
              <div className="menucategory1">
                <MicExternalOnIcon />
                <span>Music</span>
              </div>
              <div className="heroDeivider">
                <hr />
              </div>
              <div className="menucategory1">
                <SportsCricketIcon />
                <span>Sports</span>
              </div>
              <div className="herobtn">
                <button>HUGE SALE 70% OFF</button>
              </div>
            </div>
          </div>
          <div className="heroSlider">This is Slider Side</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
