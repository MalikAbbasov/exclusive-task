import React from "react";
import "./newarrival.scss"

function Newarrival() {
  return (
    <div>
      <div id="newarrival">
        <div className="container">
          <div className="container_left">
            <img
              src="https://cdn.vcgamers.com/news/wp-content/uploads/2023/03/PS5-Pro.png"
              alt=""
            />
            <div className="text">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <h5>Shop Now</h5>
            </div>
          </div>
          <div className="container_right">
            <div className="right_up">
              <img src="https://www.cougar.com.pk/cdn/shop/articles/men_s_wear.webp?v=1663242281" alt="" />
             <div className="text">
             <h2>Men's Collections</h2>
              <p>Featured man collections that give you another vibe.</p>
              <h5>Shop Now</h5>
             </div>
            </div>
            <div className="right_down">
                <div className="down_left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByaDMKoCBev-BytUAWFwO0_151SlxXYCtDQ&usqp=CAU" alt="" />
                    <div className="text">
                    <h2>Speakers</h2>
                    <p>Amazon wireless speakers</p>
                    <h5>Shop Now</h5>
                    </div>
                </div>
              <div className="down_right">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRXiNvjKPUHw-fkdYw1zzJN53FkDZszueww&usqp=CAU"
                  alt=""
                />
                <div className="text">
                <h2>Perfume</h2>
                <p>GUCCI INTENSE OUD EDP</p>
                <h5>Shop Now</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newarrival;
