import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext/WishlsitContext'
import { BasketContext } from '../../Context/BasketContext'
import "./wishlist.scss"

function Wishlistpage() {
    const {wishlist,addWish} = useContext(WishlistContext)
    const {addBasket} = useContext(BasketContext)



  return (
    <div>
        <div id="wishlist">
            <div className="container">
                <div className="container_up">
                    <h4>Wishlist ({wishlist.length})</h4>
                    <button>Move All To Bag</button>
                </div>
                <div className="container_down">
                    <div className="cards">
                        {
                            wishlist.map((x)=>(
                                <ul key={x.id}>
                                <div className="photo">
                                  <img src={x.image} alt="" />
                                  <div className="wish">
                                    <i onClick={()=>{addWish(x)}} className="fa-solid fa-trash-can"></i>
                                  </div>
                                  <div className="detail">
                                    <i className="fa-solid fa-eye"></i>
                                  </div>
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlistpage