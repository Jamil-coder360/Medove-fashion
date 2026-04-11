import React, { useRef } from "react";
import Button from "./Button";
import left from "../assets/left.png";
import right from "../assets/right.png";
import PortfolioCard from "./Portfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { Pagination } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="container">
        <div>
          <div className="flex items-end justify-between pb-12">
            <div className="flex flex-col items-start justify-between gap-5">
              <p className="font-regular text-[18px] leading-[1.5] text-[#757575]">
                Testimonial
              </p>
              <h1 className="font-medium text-[40px] leading-[1.5]">
                What our customers say
              </h1>
            </div>
            <div className="flex gap-3.5 hidden lg:flex">
              <span onClick={() => swiperRef.current?.slidePrev()}>
                <Button>
                  <img src={left} alt="" />
                </Button>
              </span>
              <span onClick={() => swiperRef.current?.slideNext()}>
                <Button>
                  <img src={right} alt="" />
                </Button>
              </span>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6"> */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={2}
            // mousewheel={false}
            spaceBetween={10}
            loop={true}
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <PortfolioCard />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioCard />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioCard />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioCard />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioCard />
            </SwiperSlide>
          </Swiper>

          {/* <PortfolioCard />
					<PortfolioCard />
					<PortfolioCard /> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
