import React from "react";
import img from "../assets/special.png";
import Button from "./Button";
const Action = () => {
  const bgImage = {
    background: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section>
      <div className="container py-20">
        <div
          style={bgImage}
          className="flex flex-col items-start lg:items-center justify-center py-10 lg:py-25 pl-10 lg:pl-0 text-start lg:text-center"
        >
          <h1 className="font-jost font-medium text-[32px] lg:text-[64px] leading-[1.4] max-w-[597px] pb-5">
            Fresh Looks for Sunny Days
          </h1>
          <p className="font-jost font-normal text-[14px] lg:text-[20px] leading-[1.4] max-w-[597px] pb-10">
            From breezy suits to playful sets — this season is all about feeling
            good and looking better. Step into Spring/Summer with pieces that
            radiate confidence, color, and comfort.
          </p>
          <Button variant="white">SHOP NOW</Button>
        </div>
      </div>
    </section>
  );
};

export default Action;
