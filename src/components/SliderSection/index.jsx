import React from "react";
import "./slidersection.scss";
import { Carousel } from 'react-carousel-minimal';

function SliderSection() {
  const data = [
    {
      image:
        "https://www.apple.com/v/iphone-14-pro/g/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png",
      caption:
        "<div class='slider_text'><h1>Iphone Series</h1> <p class='text_name'>10% sales for Products</p> </div>",
    },
    {
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
      caption:
      "<div class='slider_text'><h1>Iphone Series</h1> <p class='text_name'>10% sales for Products</p> </div>",
    },
    {
      image:
        "https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/10/appleiphone12pro-1.jpg?fit=1960%2C1102&ssl=1",
      caption:
      "<div class='slider_text'><h1>Iphone Series</h1> <p class='text_name'>10% sales for Products</p> </div>",
    },
    {
        image:
          "https://images.macrumors.com/t/xq3jBq3yK0pzNnG6uyM25WwNbUY=/800x0/smart/article-new/2023/03/iPhone-16-Mock-Header-1.jpg?lossy",
        caption:
        "<div class='slider_text'><h1>Iphone Series</h1> <p class='text_name'>10% sales for Products</p> </div>",
      },
      {
        image:
          "https://www.cnet.com/a/img/resize/26669ed096be6299999fecf7fbfd5358a8233b73/hub/2020/09/22/a424a3ac-0d83-4e5e-89f2-f5d54774e81c/oldtv.jpg?auto=webp&fit=crop&height=675&width=1200",
        caption:
        "<div class='slider_text'><h1>Iphone Series</h1> <p class='text_name'>10% sales for Products</p> </div>",
      }
  ];

  return (
    <div>
      <div id="slidersection">
        <div className="container">
          <div className="categories">
            <ul>
              <li>
                Woman's Fashion
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                Men's Fashion
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdor</li>
              <li>Baby's & Toys</li>
              <li> Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="slider">
            <Carousel
              data={data}
              time={2500}
              width="100%"
              height="55vh"
              dots={true}
              radius="10px"
              automatic={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
