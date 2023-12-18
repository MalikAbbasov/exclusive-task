import React from 'react'
import "./topheader.scss"
function Topheader() {
  return (
    <div>
        <div id="topheader">
            <div className="container">
                <div className="container_text">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <h5>Shop Now</h5>
                </div>
                <div className="container_select">
                    <select name="language" id="">
                        <option value="english">English</option>
                        <option value="russian">Ru</option>
                        <option value="aze">Aze</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topheader