import React from "react";
import Slider from "react-slick";

import Image_1 from "../assets/brand-1.png";
import Image_2 from "../assets/brand-2.png";
import Image_3 from "../assets/brand-3.png";
const Brand = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
   autoplay: true,
//   speed: 1000,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  };

  return (
    <section>
      <div className="container py-25 ">
        <Slider {...settings}>
          <div>
            <Images image={Image_1} />
          </div>
          <div>
            <Images image={Image_2} />
          </div>
          <div>
            <Images image={Image_3} />
          </div>
          <div>
            <Images image={Image_2} />
          </div>
          <div>
            <Images image={Image_1} />
          </div>
          <div>
            <Images image={Image_2} />
          </div>
          <div>
            <Images image={Image_1} />
          </div>
          <div>
            <Images image={Image_3} />
          </div>
        </Slider>
      </div>
    </section>
  );
};
const Images = ({ image }) => {
  return (
    <div>
      <img src={image} alt="image" className="w-[117px] h-[92px] " />
    </div>
  );
};

export default Brand;
