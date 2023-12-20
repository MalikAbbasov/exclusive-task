import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./detail.scss"

function Detail() {
  let { id } = useParams()
  const [detail, setDetail] = useState([])

  useEffect(() => {
    fetch(`https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetail(data)
      })
  }, [])

  return (
    <div>
      <div id="detail">
        <div className="container">
          <div className="container_images">

            <div className="mini_images">
              <div className="image"><img className='bir' src={detail.image} alt="" /></div>
              <div className="image"><img className='iki' src={detail.image} alt="" /></div>
              <div className="image"><img className='uc' src={detail.image} alt="" /></div>
              <div className="image"><img className='dord' src={detail.image} alt="" /></div>
            </div>

            <div className="main_image">
              <img src={detail.image} alt="" />
            </div>

          </div>

          <div className="container_info">

            <h1>{detail.name}</h1>

            <div className="raiting">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <p>(150 Reviews)</p>
              </div>
              <div className="instock">
                <p>In Stock</p>
              </div>
            </div>

            {detail.price}

            {detail.description}

            <div className="colors">
              <p>Colours:</p>
              <div className="blue"></div>
              <div className="red"></div>
            </div>

            <div className="size_line">
              <p>Size:</p>
              <div className="sizes">
                <div className="size">XS</div>
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
              </div>
            </div>

            <div className="buy_now">

              <div className="count">
                <div className="minus"></div>
                <div className="value"></div>
                <div className="plus"></div>
              </div>

              <div className="button">
                <button>Buy Now</button>
              </div>

              <div className="wish">
              <i className="fa-solid fa-heart"></i>
              </div>
            </div>

            <div className="delivery">
              <div className="delicery_up">
              <i className="fa-solid fa-truck-fast"></i>
              <div className="text">
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
              </div>
              <div className="delivery_down">
              <i className="fa-solid fa-arrows-rotate"></i>
              <div className="text">
                <h4>Return Delivery</h4>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Detail