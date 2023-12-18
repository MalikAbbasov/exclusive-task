import React from "react";
import "./browse.scss"
function Browsecategory() {
  return (
    <div>
      <section id="browse">
        <div className="container">
          <div className="categories">
            <div className="border"></div>
            <h3>Categories</h3>
          </div>
          <div className="browse_category">
            <h2>Browse By Category</h2>
            <div className="butons">
              <i className="fa-solid fa-arrow-left"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="images">
            <div className="image">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <h3>Phones</h3>
            </div>
            <div className="image">
              <i className="fa-solid fa-desktop"></i>
              <h3>Computers</h3>
            </div>
            <div className="image">
              <i className="fa-solid fa-clock"></i>
              <h3>Smart Watches</h3>
            </div>
            <div className="image">
              <i className="fa-solid fa-camera"></i>
              <h3>Cameras</h3>
            </div>
            <div className="image">
              <i className="fa-solid fa-headphones"></i>
              <h3>Headphones</h3>
            </div>
            <div className="image">
              <i className="fa-solid fa-gamepad"></i>
              <h3>Gaming</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Browsecategory;
