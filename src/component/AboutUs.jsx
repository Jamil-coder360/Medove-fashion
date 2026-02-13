import React from "react";
import Button from "./Button";
import img from "../assets/about.jpg";
const AboutUs = () => {
//   const Image = {
//     backgroundImage: `url(${img})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   };
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div  className="py-[155px] px-[120px] ">
            <p className="pt-2">About us</p>
            <h1 className="text-black text-[64px] font-medium font-jost leading-[1.3] tracking-[0.46%] pt-2 ">
              Designed to Empower, Crafted to Last
            </h1>
            <p className="max-w-124.75 text-[#757575] font-jost text-[16px] leading-normal tracking-[0.46%] pt-5 pb-10 ">
              At Modevo, we blend timeless design with modern flair — creating
              pieces that inspire confidence, celebrate individuality, and
              redefine everyday elegance. From detail to silhouette, every piece
              tells a story of quality and character.
            </p>

            <Button>EXPLORE MORE</Button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
