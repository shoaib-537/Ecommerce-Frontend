import React, { useState } from "react";
import "./FeaturedProducts.css";
import ProductsCards from "../../../components/ProductsCards";
const FeaturedProducts = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  return (
    <div>
      <div className="fpcontainer">
        <div className="fpmain">
          <div className="fptitle">
            <h2>Featured Products</h2>
            {/* <hr /> */}
          </div>
          <div className="fpsection">
            <ProductsCards/>
            <ProductsCards/>
            <ProductsCards/>
            <ProductsCards/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
