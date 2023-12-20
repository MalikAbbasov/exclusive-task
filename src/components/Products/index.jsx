import React, { useContext, useEffect, useState } from "react";
import "./product.scss";

import { Link } from "react-router-dom";
import { BasketContext } from "../../Context/BasketContext";
import { WishlistContext } from "../../Context/WishlistContext/WishlsitContext";

function Product() {
  const [product, setProduct] = useState([]);


  const { basket, addBasket} = useContext(BasketContext)
  const {wishlist,addWish} = useContext(WishlistContext)


  useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);




  return (
    <div>
      <div id="products_section">
        <div className="container">
          <div className="categories">
            <div className="border"></div>
            <h3>Our Products</h3>
          </div>
          <div className="products_category">
            <h2>Explore Our Products</h2>
            <div className="butons">
              <Link to="/basket" className="fa-solid fa-cart-shopping">
                <sup>{basket.length}</sup>
              </Link>
              <Link to="/wishlist" className="fa-solid fa-heart">
                <sup>{wishlist.length}</sup>
              </Link>
            </div>
          </div>



          <div className="products">
            {product.slice(0,12).map((x) => (
              <ul key={x.id}>
                <div className="photo">
                  <img src={x.image} alt="" />
                  <div className="wish">
                    <i onClick={()=>{addWish(x)}} className="fa-solid fa-heart"></i>
                  </div>
                  <Link to={`/detail/${x.id}`} className="detail">
                    <i  className="fa-solid fa-eye"></i>
                  </Link>
                  <div onClick={()=>{addBasket(x)}} className="add_basket">
                    <p>Add basket</p>
                  </div>
                </div>
                <li>{x.name}</li>
                <div className="price">
                  <li className="cost">{x.price} $</li>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <p>(88)</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
