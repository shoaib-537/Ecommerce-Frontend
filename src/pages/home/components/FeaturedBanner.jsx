import React from "react";
import "./FeaturedBanner.css";
const FeaturedBanner = () => {
  return (
    <div>
      <div className="fbcontainer">
        <div className="fbmain">
          <div className="col1">
            <div className="col1banner1">
              <div className="col1bannercontent">
                <div className="circle">
                  <div className="off40">
                    <h1>40</h1>
                    <div className="percent40">
                      <h1>%</h1>
                      <span>OFF</span>
                    </div>
                  </div>
                </div>
                <div className="text450">
                  <span>$450</span>
                </div>
                <div className="text270">
                  <span>$270</span>
                </div>
                <div className="watchesText">
                  <span>Watched</span>
                </div>
                <div className="megasaletext">
                  <span>Mega Sale</span>
                </div>
              </div>
            </div>
            <div className="col1banner2">
              <div className="col1b2content">
                <div className="b2heading">
                  <h1>TRENDING</h1>
                  <h1>Hot Sales</h1>
                </div>
                <div className="b2subheading">
                  <span>STARTING AT $99</span>
                </div>
                <div className="c1b2btn">
                  <button>BUY NOW!</button>
                </div>
              </div>
            </div>
            <div className="col1banner3">
              <div className="col1b3content">
                <div className="c1b3heading">
                  <h1>TOP BRANDS</h1>
                  <h2>SMARTPHONES</h2>
                </div>
                <div className="c1b3subheading">
                  <span>LIMITED TIME ONLY</span>
                </div>
                <div className="c1b3btn">
                  <button>BUY NOW!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="col2banner1">
              <div className="c2b1content">
                <div className="c2b1heading">
                  <h1>
                    Electronic <br /> Deals
                  </h1>
                </div>
                <div className="c2b1details">
                  <div className="c2b1text1">
                    <h2>Exclusive COUPON</h2>
                  </div>
                  <div className="c2b1text2">
                    <h4>UP TO</h4>
                    <h2>$100</h2>
                    <h3>OFF</h3>
                  </div>
                  <div className="c2b1btn">
                    <button>GET YOURS!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col2banner2">
              <div className="c2b2content">
                <div className="c2b2text">
                  <h2>Exclusive Shoes</h2>
                  <h1>50% OFF</h1>
                </div>
                <div className="c2b2btn">
                  <button>GET YOURS!</button>
                </div>
              </div>
            </div>
            <div className="col2banner3">
              <div className="c2b3content">
                <div className="c2b3text">
                  <span>Checkout our Discounts!</span>
                  <h2>
                    More Than <br /> 20 Brands
                  </h2>
                  <div className="c2b3text2">
                    <h4>UP TO</h4>
                    <h2>$100</h2>
                    <h3>OFF</h3>
                  </div>
                </div>
                <div className="c2b3btn">
                  <button>CHECK THIS SALE!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col3">
            <div className="col3banner1">
              <div className="c3b1content">
                <div className="c3b1text">
                  <h2>Flash Sale</h2>
                  <span>
                    Top Brand <br />
                    Summer Sunglasses
                  </span>
                  <h1>
                    Starting <br /> at $199.99
                  </h1>
                  <div className="c3b1btn">
                    <button>View Sale</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col3banner2">
              <div className="c3b2content">
                <div className="c3b2text">
                  <h3>Amazing</h3>
                  <h1>Collection</h1>
                  <hr />
                  <span>Check Our Discounts</span>
                </div>
                <div className="c2b3btn">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col3banner3">
              <div className="c3b3content">
                <h2>Deal Promos</h2>
                <span>Starting At $99</span>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
