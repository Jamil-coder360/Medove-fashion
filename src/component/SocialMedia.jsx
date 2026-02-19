
import Button from "./Button";
import Section from "./Section";
import Container from "./Container";
import SectionHeading from "./SectionHeading";  
const GetInTouch = () => {
	return (
		<Section className={"py-35 mt-20"} bg="#f2f2f2">
			<Container>
				<SectionHeading
					title={"Stay Connected with Vereva"}
					description={
						"Be the first to know about new arrivals, exclusive offers, and style updates — straight to your inbox."
					}
					width="w-full lg:w-[528px]"
				/>
				<div>
					<form
						action=""
						className="w-full lg:w-125.75 mx-auto border border-black-222 px-1.5 py-1.25 grid grid-cols-[1fr_100px]"
					>
						<input
							type="text"
							className="border-none outline-none bg-none p-3 placeholder:text-[#a4a4a4]"
							placeholder="Enter Your Email Address"
						/>
						<Button>Send</Button>
					</form>
				</div>
			</Container>
		</Section>
	);
};

export default GetInTouch;