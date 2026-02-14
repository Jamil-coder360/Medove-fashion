import React from "react";
import SpecialOfferCard from "./SpecialOfferCard";
import Image_1 from "../assets/exclusive-4.png";
import img from "../assets/exclusive-3.png";
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
              {/* <SpecialOfferCard 
                 img={ Images}
                 text={"$179.000"}
                 button={"Shop now"}
                 /> */}
              <Button variant="white">shop now</Button>
            </div>
            <div className="grid grid-cols-1 gap-10">
              <SpecialOfferCard
                variant="white"
                img={Image_1}
                text={"$179.000"}
                button={"Shop now"}
              />
              <SpecialOfferCard
                variant="white"
                img={Image_1}
                text={"$179.000"}
                button={"Shop now"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame;
