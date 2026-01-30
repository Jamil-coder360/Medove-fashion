import React from "react";
import DiscountCard from "./DiscountCard";
import discount_1 from "../assets/discount-1.jpg";
import discount_2 from "../assets/discount-2.jpg";

const Discount = () => {
	return (
		<section className="py-6 bg-white">
			<div className="container">
				<div className="grid grid-cols-2 gap-6">
					<DiscountCard
						title={"It’s in the Bag: Limited Deals"}
						discount={"SALE UP TO 25%"}
						img={discount_1}
					/>
					<DiscountCard
						title={"Make a Statement This Season"}
						discount={"SALE UP TO 25%"}
						img={discount_2}
					/>
				</div>
			</div>
		</section>
	);
};

export default Discount;
