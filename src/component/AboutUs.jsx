import React from "react";
import Button from "./Button";
import bg from "../assets/techture.jpg"
import img from "../assets/about.png";
const AboutUs = () => {
  const Image = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section className="h-[640px] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div style={Image}  className="lg:pt-[155px] lg:pb-[132px]  lg:pr-[105px] lg:pl-[116px]  bg-red-300 h-full">
            <p className="pt-2">About us</p>
            <h1 className="text-black text-[22px] lg:text-[40px] font-medium font-jost leading-[55px] tracking-[0.46%] pt-2  ">
              Designed to Empower, Crafted to Last
            </h1>
            <p className="max-w-124.75 text-[#757575] font-jost text-[18px] font-normal leading-normal tracking-[0.46%] pt-4 pb-4 lg:pb-7.5 ">
              At Modevo, we blend timeless design with modern flair — creating
              pieces that inspire confidence, celebrate individuality, and
              redefine everyday elegance. From detail to silhouette, every piece
              tells a story of quality and character.
            </p>

            <Button className="bg-transparent !text-black border">EXPLORE MORE</Button>
          </div>
          <div className="pt-4 lg:pt-0  w-full">
            <img src={img} alt="Image" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
