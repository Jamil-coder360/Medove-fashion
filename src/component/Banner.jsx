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
    <section>
      <div className="container">
        <div style={bgImage} className="pt-55 px-27.25 pb-60.5">
          <div className="flex flex-col items-start justify-center max-w-[624px] gap-5">
            <h1 className="text-[64px] font-medium font-jost leading-[85px] tracking-[0.46%] text-black-222">
              Fresh Looks for Warmer Days
            </h1>
            <p className="text-[20px] font-normal font-jost leading-[30px] tracking-[0.46%] text-black-222 max-w-[496px]">
              Unveil bold layers and timeless silhouettes — designed to define
              your Spring/Summer 2027 look.
            </p>
            <div className="flex items-center gap-5 pt-5">
              <Button>DISCOVER COLLECTION</Button>
              <Button>SHOP NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
