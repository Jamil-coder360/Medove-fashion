import bannerImage from "../assets/banner.jpg";
import Button from "./Button";
const Banner = () => {
	const bgImage = {
		background: `url(${bannerImage})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};
	return (
		<section className="pb-6">
			<div className="container">
				<div style={bgImage} className="pt-55 px-27.25 pb-60.5">
					<div className="max-w-156">
						<h1 className="text-[#222222] text-[64px] font-jost tracking-[0.46%] leading-[1.3] font-medium">
							Fresh Looks for Warmer Days
						</h1>
						<p className="text-[#222222] text-[20px] font-jost tracking-[0.46%] leading-normal max-w-124 pt-5 pb-10">
							Unveil bold layers and timeless silhouettes — designed to define
							your Spring/Summer 2027 look.
						</p>
						<div className="flex gap-5">
							<Button
								TagName="button"
								type="button"
								title="This is a button tag"
							>
								DISCOVER COLLECTION
							</Button>
							<Button TagName="a" target="_black" href="/">
								SHOP NOW
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
