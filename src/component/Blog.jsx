import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";
import Image_1 from "../assets/brand-1.png";
import Image_2 from "../assets/brand-2.png";
import Image_3 from "../assets/brand-3.png";
const Blog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
       customPaging: i => (
      <div className="dot">
      </div>
    ),
  };

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
          <Slider {...settings}>
            <div>
              <BlogCard
                text="Look stylish with minimal effort using versatile basics perfect for everyday wear."
                title="Effortless Style Made Easy"
                img={Image_1}
              />
            </div>
            <div>
              <BlogCard
                text="From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe.."
                title="Oversized Denim Looks Are In"
                img={Image_2}
              />
            </div>
            <div>
              <BlogCard
                text="Small in size, big on impact — mini bags are the ultimate accessory to complete your look."
                title="The Power of Mini Bags"
                img={Image_3}
              />
            </div>
            <div>
              <BlogCard
                text="Look stylish with minimal effort using versatile basics perfect for everyday wear."
                title="Effortless Style Made Easy"
                img={Image_1}
              />
            </div>
            <div>
              <BlogCard
                text="Look stylish with minimal effort using versatile basics perfect for everyday wear."
                title="Effortless Style Made Easy"
                img={Image_1}
              />
            </div>
            <div>
              <BlogCard
                text="Look stylish with minimal effort using versatile basics perfect for everyday wear."
                title="Effortless Style Made Easy"
                img={Image_1}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Blog;
