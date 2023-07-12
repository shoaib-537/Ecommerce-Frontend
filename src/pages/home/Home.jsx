import React from "react";
import "./Home.css";
import FeaturedProducts from "./components/FeaturedProducts";
// import HeroSection from "./components/HeroSection";
// import Features from "./components/Features";
import FeaturedBanner from "./components/FeaturedBanner";


const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeMain">
        {/* <HeroSection /> */}
        {/* <Features/> */}
        <FeaturedBanner/>
        <FeaturedProducts/>
      </div>
    </div>
  );
};

export default Home;
