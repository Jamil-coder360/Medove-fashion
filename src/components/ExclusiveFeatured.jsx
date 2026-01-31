import React from "react";
// components
import Button from "./Button";
import ExclusiveFeaturedCard from "./ExclusiveFeaturedCard";

//  all assets
// slide images

import left from "../assets/left.png";
import right from "../assets/right.png";
import fotter from "../assets/exclusive.png";
// card images
import exclusive_1 from "../assets/exclusive-1.png";
import exclusive_2 from "../assets/exclusive-2.png";
import exclusive_3 from "../assets/exclusive-3.png";
import exclusive_4 from "../assets/exclusive-4.png";

import color from "../assets/color.png";
import color_1 from "../assets/color-1.png";

// exclusive featured component

const ExclusiveFeatured = () => {
  return (
    // section start
    <section>
      <div className="container py-12 relative">

        {/* card header */}

        <h2 className="flex items-center justify-center font-medium text-[40px] ">
          Featured
        </h2>

        {/* card design */}

        <div className="grid grid-cols-4 justify-between gap-8 py-15">
          <ExclusiveFeaturedCard
            title="Relaxed Stitch Shirt"
            img={exclusive_1}
            color={color}
            text="ADD TO CART"
            showUnderline={true}
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

        {/* card slide button */}

        <span className="absolute left-[-2.5%] top-[45%] transform -translate-y-1/2">
          <Button>
            <img src={left} alt="Left" />
          </Button>
        </span>

        <span className="absolute right-[-2.5%] top-[45%] transform -translate-y-1/2">
          <Button>
            <img src={right} alt="Right" />
          </Button>
        </span>
        {/* card slide icon */}
        <div className="flex justify-center items-center">
            <img src={fotter} alt="slide" />
        </div>
      </div>
    </section>
    // section end
  );
};

export default ExclusiveFeatured;