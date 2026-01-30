import React from "react";
import Button from "./Button";

const DiscountCard = ({ discount, title, img }) => {
	const bgImage = {
		background: `url(${img})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};
	return (
		<div style={bgImage}>
			<div className="bg-white/70 px-[38px] py-[38px]">
				<p className="text-gray-75 font-medium">{discount}</p>
				<h3 className="text-black-222 font-medium text-[32px]  pb-6.5 max-w-[285px]">
					{title}
				</h3>
				<Button TagName="a" href="/shop">
					Shop Now
				</Button>
			</div>
		</div>
	);
};

export default DiscountCard;
