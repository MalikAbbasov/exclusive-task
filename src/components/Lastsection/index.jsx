import React from "react";
import "./last.scss"
function Lastsection() {
  return (
    <div>
      <div id="last_section">
        <div className="container">
          <div className="service">
            <i class="fa-solid fa-truck"></i>
            <h4>FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="service">
            <i class="fa-solid fa-headphones"></i>
            <h4>24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="service">
            <i class="fa-solid fa-circle-check"></i>
            <h4>MONEY BACK GUARANTEE</h4>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lastsection;
