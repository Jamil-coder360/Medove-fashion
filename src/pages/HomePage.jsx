// import Slide from '../component/slide';
import AboutUs from '../component/AboutUs';
import Action from '../component/Action';
import Banner from '../component/Banner';	
import Blog from '../component/Blog';
import Brand from '../component/Brand';
import Featured from '../component/Featured';
import Frame from '../component/Frame';
import MediaSlide from '../component/MediaSlide';
import Member from '../component/Member';
import Newarrival from '../component/Newarrival';
import SocialMedia from '../component/SocialMedia';
import SpecialOffer from '../component/SpecialOffer';
import StoreBenefits from '../component/StoreBenefits';
import Testimonial from '../component/Testimonial';
const HomePage = () => {
	return (
		<>
			<Banner />
			 <SpecialOffer />
			<StoreBenefits />
			<AboutUs />
			<Brand />
			<Featured />
			<Newarrival />
			<Frame />
			<Member />
			<Action />
			<Blog />
			<Testimonial />
			<SocialMedia />	 
			<MediaSlide />
			{/* <Slide /> */}
		</>
	);
};

export default HomePage;
