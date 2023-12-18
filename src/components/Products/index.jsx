import React, { useContext, useEffect, useState } from "react";
import "./product.scss";
import { BasketContext } from "../../Context/BasketContext";

function Product() {
  const [product, setProduct] = useState([]);

  const {basket,addBasket,removeBasket,setCountValue} = useContext(BasketContext)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);


  const removeAsideBasket = () => {
    document.querySelector(".basket").classList.toggle("aside");
  };

  const handleBasket = () => {
    document.querySelector(".basket").classList.toggle("aside")
}


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
              <i onClick={handleBasket} className="fa-solid fa-cart-shopping">
                <sup>{basket.length}</sup>
              </i>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>

          <div className="basket">
            <i onClick={removeAsideBasket} className="fa-solid fa-xmark"></i>

            <div className="basket_card card">
              {basket.map((x) => (

                <ul key={x.id}>
                  <img src={x.images} alt="" />
                  <li>{x.price}$</li>
                  <li>{x.count}</li>
                  <div className="butons">
                  <button
                    className="btn add"
                    onClick={() => {
                      setCountValue(true, x)
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn del"
                    onClick={() => {
                      setCountValue(false, x)
                    }
                    }
                  >
                    -
                  </button>
                  <button onClick={() => removeBasket(x.id)}>
                    Remove basket
                  </button>
                  </div>
                </ul>
              ))}
            </div>
            


          </div>

          <div className="products">
            {product.map((x) => (
              <ul key={x.id}>
                <div className="photo">
                  <img src={x.images} alt="" />
                  <div className="wish">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="detail">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div onClick={()=>{addBasket(x)}} className="add_basket">
                    <p>Add basket</p>
                  </div>
                </div>
                <li>{x.title}</li>
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