import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// images
import image_1 from "../assets/glass.png"
import icon from "../assets/icons/Vector.svg"
const MediaSlide = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductSlideImage
            image={image_1}
            icon={icon}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlideImage
            image={image_1}
            icon={icon}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlideImage
            image={image_1}
            icon={icon}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlideImage
            image={image_1}
            icon={icon}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlideImage
            image={image_1}
            icon={icon}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlideImage
            image={image_1}
            icon={icon}
          />
        </SwiperSlide>
   
      </Swiper>
    </>
  );
};
const ProductSlideImage = ({ image, icon }) => {
  return (
    <div className="relative h-[278px]">
      <img src={image} alt="image" className="size-full object-cover" />
      <div className="w-full h-full bg-black/50 absolute top-0 left-0 cursor-pointer flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-all duration-300">
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default MediaSlide;
