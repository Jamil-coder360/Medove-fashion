import React from "react";
import Slider from "react-slick";
import "../index.css";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

import BlogCard from "./BlogCard";
import Image_1 from "../assets/brand-1.png";
import Image_2 from "../assets/brand-2.png";
import Image_3 from "../assets/brand-3.png";
const Blog = () => {


  return (
    <section>
      <div className="container py-17 ">
        <h1 className="font-medium text-[40px] leading-[1.35] pb-4 text-center">
          Our Latest News & Blogs
        </h1>
        <p className="font-normal text-[18px] leading-[1.5] pb-10 text-center">
          Stay inspired with trend stories, expert styling tips, and fresh
          fashion insights — all curated just for you.
        </p>
        <div></div>
        <div className="">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            // centeredSlides={true}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
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
              {" "}
              <BlogCard
                text="Look stylish with minimal effort using versatile basics perfect for everyday wear."
                title="Effortless Style Made Easy"
                img={Image_1}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <BlogCard
                text="From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe.."
                title="Oversized Denim Looks Are In"
                img={Image_2}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <BlogCard
                text="Small in size, big on impact — mini bags are the ultimate accessory to complete your look."
                title="The Power of Mini Bags"
                img={Image_3}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <BlogCard
                text="Look stylish with minimal effort using versatile basics perfect for everyday wear."
                title="Effortless Style Made Easy"
                img={Image_1}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <BlogCard
                text="From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe.."
                title="Oversized Denim Looks Are In"
                img={Image_2}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <BlogCard
                text="From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe.."
                title="Oversized Denim Looks Are In"
                img={Image_2}
              />
            </SwiperSlide>
          </Swiper>
        
        </div>

      </div>
    </section>
  );
};

export default Blog;
