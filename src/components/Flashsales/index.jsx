import React, { useEffect, useState } from "react";
import "./flash.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Flashsales() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  return (
    <div>
      <div id="flash">
        <div className="container">
          <div className="todays">
            <div className="border"></div>
            <h4>Today's</h4>
          </div>
          <div className="flash_sales">
            <div className="left">
              <h2>Flash Sales</h2>
              <div className="timer">
                <div className="date">
                  <p>Days</p>
                  <h6>03</h6>
                </div>
                <div className="dotes">
                  <div className="dote"></div>
                  <div className="dote"></div>
                </div>
                <div className="date">
                  <p>Hours</p>
                  <h6>23</h6>
                </div>
                <div className="dotes">
                  <div className="dote"></div>
                  <div className="dote"></div>
                </div>
                <div className="date">
                  <p>Minutes</p>
                  <h6>19</h6>
                </div>
                <div className="dotes">
                  <div className="dote"></div>
                  <div className="dote"></div>
                </div>
                <div className="date">
                  <p>Seconds</p>
                  <h6>73</h6>
                </div>
              </div>
            </div>
            <div className="butons">
              <i className="fa-solid fa-arrow-left"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="slider">
            <Slider {...settings}>
              {product.slice(0,14).map((x) => (
                <ul key={x.id}>
                  <div className="photo">
                    <img src={x.images} alt="" />
                    <div className="sale">
                      <p>-40%</p>
                    </div>
                    <div className="wish">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="detail">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className="basket_add">
                      <p>Add to Cart</p>
                    </div>
                  </div>
                  <li className="title">{x.title}</li>
                  <li className="price">{x.price} $</li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>(88)</p>
                  </div>
                </ul>
              ))}
            </Slider>
          </div>
          <div className="buton">
            <a href="#products_section">View All Products</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashsales;
