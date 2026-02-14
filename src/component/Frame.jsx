import React from "react";
import { FaArrowRight } from "react-icons/fa";

import SpecialOfferCard from "./SpecialOfferCard";
import Image_1 from "../assets/kids.png";
import Image_2 from "../assets/cool.png";

import img from "../assets/rust.png";
import Button from "./Button";
const Frame = () => {
  const Images = () => ({
    background: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });
  return (
    <section>
      <div className="container py-20">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <p className="font-jost font-normal text-[18px] leading-[1.5] pb-2">
              Today Deal
            </p>
            <h1 className="font jost font-medium text-[40px] leading-[1.4] pb-4">
              Deal of the day
            </h1>
            <p className=" font-jost font-normal text-[18px] leading-[1.5] pb-11.25">
              Limited-time styles at unbeatable prices, Shop today’s hottest
              picks before they’re gone!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div style={Images()}>
              <div className="mt-12.5 ml-12.5">
                <p className="text-[18px] text-black-222 font-medium leading-[1.5] font-jost mb-1.25">
                  Flat 20% Discount
                </p>
                <h3 className=" text-[28px] font-medium leading-[1.5] text-black-222 mb-4  max-w-[320px]">
                  Don’t Miss Today’s Exclusive Picks
                </h3>
                <p className=" text-[18px] font-normal leading-[1.5] text-black-222 mb-7.5 ">
                  Casual, cool, and always in style.
                </p>
                <Button variant="white">

                  SHOP NOW <FaArrowRight className="inline-block ml-2" /> </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10">
              <SpecialOfferCard
                variant="white"
                img={Image_1}
                text={"$179.000"}
                button={<>
                  Shop now <FaArrowRight className="inline-block ml-2" />
                  </>}
              />
              <SpecialOfferCard
                variant="white"
                img={Image_2}
                text={"$179.000"}
                button={<>
                Shop now <FaArrowRight className="inline-block ml-2"/>
                </>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame;
