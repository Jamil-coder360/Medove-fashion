import React, { useRef } from "react";
import Slider from "react-slick";
import Button from "./Button";
import FeaturedCard from "./FeaturedCard";
import Image_1 from "../assets/exclusive-1.png";
import Image_2 from "../assets/exclusive-2.png";
import Image_3 from "../assets/exclusive-3.png";
import Image_4 from "../assets/exclusive-4.png";

import left from "../assets/left.png";
import right from "../assets/right.png";

const Featured = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   
        customPaging: i => (
      <div className="dot">
      </div>
    ),
    
  };

  return (
    <section>
      <div className="container relative">
          <h2 className="flex items-center justify-center font-medium text-[40px] ">
          Featured
        </h2> 
          <div className="-mx-[10px] py-15"> 
        <Slider ref={sliderRef} {...settings}>
            <div className="px-[10px]">
              <FeaturedCard
               Image={Image_1}
              title="Relaxed Stitch Shirt"
              price="ADD TO CART"
              colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              />
            </div>
            <div className="px-[10px]">
              <FeaturedCard
            Image={Image_2}
              title="Off-Duty Denim Set"
              price="$179.000"
              colors={["#E6DDD6","#2B2A2F","#3A582C"]}
              />
            </div>
          <div className="px-[10px]">
            <FeaturedCard
              Image={Image_3}
              title="Utility Pocket Tee"
              price="$278.000"
             colors={["#E6DDD6","#2B2A2F","#3A582C"]}
            />
          </div>
          <div className="px-[10px]">
            <FeaturedCard
               Image={Image_4}
              title="Retro Crop Tank & Cargo"
              price="$223.000"
              colors={["#E6DDD6","#2B2A2F","#3A582C"]}
            />
          </div>
          <div className="px-[10px]">
            <FeaturedCard
               Image={Image_2}
              title="Relaxed Stitch Shirt"
              price="ADD TO CART"
              colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
            />
          </div>
          <div className="px-[10px]">
            <FeaturedCard
             Image={Image_3}
              title="Relaxed Stitch Shirt"
              price="ADD TO CART"
              colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
            />
          </div>
        </Slider>
        <div>

           <span
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-[-2.5%] top-1/2 transform -translate-y-1/2 z-10"
        >
          <Button>
            <img src={left} alt="Left" />
          </Button>
        </span>

        <span
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-[-2.5%] top-1/2 transform -translate-y-1/2 z-10"
        >
          <Button>
            <img src={right} alt="Right" />
          </Button>
        </span>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;
