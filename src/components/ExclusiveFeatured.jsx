import React from "react";
import ExclusiveFeaturedCard from "./ExclusiveFeaturedCard";
import exclusive_1 from "../assets/exclusive-1.png";
import exclusive_2 from "../assets/exclusive-2.png";
import exclusive_3 from "../assets/exclusive-3.png";
import exclusive_4 from "../assets/exclusive-4.png";
import color from "../assets/color.png"
import color_1 from "../assets/color-1.png"
const ExclusiveFeatured = () => {
  return (
    <section>
      <div className="container py-12">
        <h2 className="flex items-center justify-center font-medium text-[40px] ">
          Featured
        </h2>
        <div className="grid grid-cols-4 justify-between gap-8">
          <ExclusiveFeaturedCard
          title="Relaxed Stitch Shirt"
          img={exclusive_1}
          color={color}
          text="ADD TO CART"
          />
          <ExclusiveFeaturedCard
          title="Off-Duty Denim Set"
          img={exclusive_3}
          color={color_1}
          text="$179.000"
          />
          <ExclusiveFeaturedCard
          title="Utility Pocket Tee"
          img={exclusive_2}
          color={color_1}
          text="$278.000"
          />
          <ExclusiveFeaturedCard
          title="Retro Crop Tank & Cargo"
          img={exclusive_4}
          color={color_1}
          text="$223.000"
          />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeatured;
