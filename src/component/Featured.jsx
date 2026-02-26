import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../style.css";

// import required components
import Button from "./Button";
import FeaturedCard from "./FeaturedCard";

// required Images
import Image_1 from "../assets/exclusive-1.png";
import Image_2 from "../assets/exclusive-2.png";
import Image_3 from "../assets/exclusive-3.png";
import Image_4 from "../assets/exclusive-4.png";

import left from "../assets/left.png";
import right from "../assets/right.png";

const Featured = () => {
 
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="container relative">
        <h2 className="flex items-center justify-center font-medium text-[40px] ">
          Featured
        </h2>
        <div className=" py-15">
          <>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            mousewheel={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Mousewheel]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_1}
                title="Relaxed Stitch Shirt"
                price="ADD TO CART"
                showUnderline={true}
                colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_2}
                title="Off-Duty Denim Set"
                price="$179.000"
                colors={["#E6DDD6", "#2B2A2F", "#3A582C"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_3}
                title="Utility Pocket Tee"
                price="$278.000"
                colors={["#E6DDD6", "#2B2A2F", "#3A582C"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_4}
                title="Retro Crop Tank & Cargo"
                price="$223.000"
                colors={["#E6DDD6", "#2B2A2F", "#3A582C"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_1}
                title="Relaxed Stitch Shirt"
                price="ADD TO CART"
                colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_1}
                title="Relaxed Stitch Shirt"
                price="ADD TO CART"
                colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_1}
                title="Relaxed Stitch Shirt"
                price="ADD TO CART"
                colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <FeaturedCard
                Image={Image_1}
                title="Relaxed Stitch Shirt"
                price="ADD TO CART"
                colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              />
            </SwiperSlide>
          </Swiper>
           </>
          {/* Custom Pagination */}
          {/* <div className="swiper-pagination"></div> */}

          <div className="hidden md:block lg:block ">
            <span
              onClick={() => swiperRef.current.slidePrev()}
              className="absolute left-[-2.5%] top-1/2 transform -translate-y-1/2 z-10"
            >
              <Button>
                <img src={left} alt="Left" />
              </Button>
            </span>

            <span
              onClick={() => swiperRef.current.slideNext()}
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
