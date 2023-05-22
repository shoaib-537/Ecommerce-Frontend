import React from "react";
import "./Features.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
const Features = () => {
  return (
    <div>
      <div className="fcontainer">
        <div className="fmain">
          <div className="features">
            <div className="featuresbox">
              <LocalShippingOutlinedIcon
                style={{
                  fontSize: "40px",
                  color: "#1d1a1a",
                }}
                className="ficon"
              />
              <div className="ftext">
                <h4>Free Shipping and returen</h4>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
          </div>
          <div className="verticalDivider"></div>
          <div className="features">
            <div className="featuresbox">
              <PaidOutlinedIcon
                style={{
                  fontSize: "40px",
                  color: "#1d1a1a",
                }}
                className="ficon"
              />
              <div className="ftext">
                <h4>Money Back Gurantee</h4>
                <span>100% Money back</span>
              </div>
            </div>
          </div>
          <div className="verticalDivider"></div>
          <div className="features">
            <div className="featuresbox">
              <ContactSupportOutlinedIcon
                style={{
                  fontSize: "40px",
                  color: "#1d1a1a",
                }}
                className="ficon"
              />
              <div className="ftext">
                <h4>Online Support 24/7</h4>
                <span>Free shipping on all orders over $199</span>
              </div>
            </div>
          </div>
          <div className="verticalDivider"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
