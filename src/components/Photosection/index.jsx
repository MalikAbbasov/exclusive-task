import React from "react";
import "./photo.scss";

function Photosection() {
  return (
    <div>
      <div id="photo_section">
        <div className="container">
          <div className="image">
            <img
              src="https://www.apple.com/v/iphone-14-pro/g/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png"
              alt=""
            />
            <div className="absolutes">
              <h6>Categories</h6>
              <h1>Enhance Your Music Experience</h1>
              <div className="butons">
                <div className="times">05 days</div>
                <div className="times">23 hours</div>
                <div className="times">59 minutes</div>
                <div className="times">35 seconds</div>
              </div>
              <button className="buy_now">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photosection;
