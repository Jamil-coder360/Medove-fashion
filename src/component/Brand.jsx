import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

import Image_1 from "../assets/brand-1.png";
import Image_2 from "../assets/brand-2.png";
import Image_3 from "../assets/brand-3.png";
const Brand = () => {


  return (
    <section>
      <div className="container py-25 ">
        <> 
        <Swiper
          spaceBetween={30}
               slidesPerView={2}
            mousewheel={true}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
         pagination={false}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          className={"mySwiper relative"}
          breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
           }}
        >
          <SwiperSlide>
            {" "}
            <Images image={Image_1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_2} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_3} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_2} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_3} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_2} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Images image={Image_3} />
          </SwiperSlide>
        
        </Swiper>
        </>
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
