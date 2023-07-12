import React from "react";
import "./ProductsCards.css";

import product1 from "../assets/product1.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const ProductsCards = () => {
  return (
    <div>
      <div className="fpcards">
        <div className="fpimg">
          <img src={product1} alt="" />
        </div>
        <div className="fpsubheading">
          <div className="cattext">
            <span>Headphones</span>
          </div>
          <div className="cardicon">
            <FavoriteBorderOutlinedIcon
              style={{
                fontSize: 16,
              }}
            />
          </div>
        </div>
        <div className="productDetails">
          <p>Black P50 Headset</p>
          <div className="starrating">
            <StarOutlinedIcon style={{ fontSize: 12, color: "#6a6a6d" }} />
            <StarOutlinedIcon style={{ fontSize: 12, color: "#6a6a6d" }} />
            <StarOutlinedIcon style={{ fontSize: 12, color: "#6a6a6d" }} />
            <StarOutlinedIcon
              style={{ fontSize: 12, color: "rgba(0,0,0,.16)" }}
            />
            <StarOutlinedIcon
              style={{ fontSize: 12, color: "rgba(0,0,0,.16)" }}
            />
          </div>
          <span>$39.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
