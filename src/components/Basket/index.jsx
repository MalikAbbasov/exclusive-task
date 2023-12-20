import React, { useContext } from 'react'
import { BasketContext } from "../../Context/BasketContext";
import "./basket.scss"
import { Link } from 'react-router-dom';
function Basket() {
  const { basket, removeBasket, setCountValue,getTotal } = useContext(BasketContext)




  return (
    <div>
      <div id="basket">
        <div className="container">
          <div className="container_up">
            <div className="table">
              <div className="table_names">
                <ul>
                  <li className='product'>Product</li>
                  <li className='price'>Price</li>
                  <li className='quantity'>Quantity</li>
                  <li className='subtotal'>Subtotal</li>
                </ul>
              </div>

              <div className="basket">

                <div className="basket_card card">
                  {basket.map((x) => (

                    <ul key={x.id}>
                      <li className="image_name">
                        <img src={x.image} alt="" />
                        <div>{x.name}</div>
                        <button className='del' onClick={() => removeBasket(x.id)}>
                          x
                        </button>
                      </li>
                      <li className='price'>{x.price}$</li>
                      <li className='number'>
                        <button
                          className="btn add"
                          onClick={() => {
                            setCountValue(true, x)
                          }}
                        >
                          +
                        </button>
                        {x.count}

                        <button
                          className="btn del"
                          onClick={() => {
                            setCountValue(false, x)
                          }
                          }
                        >
                          -
                        </button>
                      </li>
                      <div className="total">

                        <div>{(x.count) * (x.price)}</div>
                      </div>
                    </ul>
                  ))}
                </div>



              </div>

            </div>
            <div className="butons">
              <Link to="/"><button >Return To Shop</button></Link>
              <button>Update Cart</button>
            </div>
          </div>
          <div className="down">
            <div className="down_left">
              <input type="text" name="" id="" placeholder='Coupon Code' />
              <button>Apply Coupon</button>
            </div>
            <div className="down_right">
              <h5>Cart Total</h5>
              <div className="total">
                <h6>Subtotal:</h6>
                <p>{getTotal()}</p>
              </div>
              <div className="shipping">
                <h6>Shipping:</h6>
                <p>Free</p>
              </div>
              <div className="total">
                <h6>Total:</h6>
                <p>{getTotal()}</p>
              </div>
              <button>Procees to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket