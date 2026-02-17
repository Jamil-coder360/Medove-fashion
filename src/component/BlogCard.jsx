import React from "react";
// import Image_1 from "../assets/brand-1.png";

const BlogCard = ({ title,text,img}) => {
  const date = new Date();

  return (
    <div className="bg-[#F3F3F3] max-w-[405px]">
      <div className="w-[405px] h-[354px] relative">
        <img className="w-full h-full object-cover" src={img} alt="image" />

        {/* Date Badge */}
        <div className="absolute top-3 left-3 bg-white px-3 py-2 text-center shadow">
          <p className="text-lg font-bold leading-none">{date.getDate()}</p>
          <hr className="my-1" />
          <p className="text-sm font-bold leading-none uppercase">
            {date.toLocaleString("en-US", { month: "short" })}
          </p>
        </div>
      </div>

      <div className="p-6 max-w-[353px]">
        <span className="text-xs text-red-500 font-semibold uppercase">
          News
        </span>

        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-500 text-sm">
         {text}
        </p>

        <span
          href="#"
          className="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline"
        >
          Read More
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
