import React from "react";
import DiscountCard from "./DiscountCard";
import fea_1 from "../assets/featur-1.png";
import fea_2 from "../assets/featur-2.png";
import fea_3 from "../assets/featur-3.png";
import fea_4 from "../assets/featur-4.png";
import FeatureCard from "./FeatureCard";

const Feature = () => {
	return (
		<section className="py-12 bg-white">
			<div className="container">
				<div className="grid grid-cols-4 gap-6">
					<FeatureCard
						image={fea_1}
						title={"Free Shipping"}
						des={"For all Orders Over $100"}
					/>
					<FeatureCard
						image={fea_2}
						title={"Secured Payment"}
						des={"Payment Cards Accepted"}
					/>
					<FeatureCard
						image={fea_3}
						title={"Free Shipping"}
						des={"For all Orders Over $100"}
					/>
					<FeatureCard
						image={fea_4}
						title={"Free Shipping"}
						des={"For all Orders Over $100"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Feature;
