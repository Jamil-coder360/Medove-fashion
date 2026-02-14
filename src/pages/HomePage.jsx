import AboutUs from '../component/AboutUs';
import Banner from '../component/Banner';	
import Brand from '../component/Brand';
import Featured from '../component/Featured';
import Frame from '../component/Frame';
import Member from '../component/Member';
import Newarrival from '../component/Newarrival';
import SpecialOffer from '../component/SpecialOffer';
import StoreBenefits from '../component/StoreBenefits';
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
		</>
	);
};

export default HomePage;
