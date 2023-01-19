// import MainMenu from '../../components/MainMenu';
// import AboutUs from '../../components/AboutUs';
// import HoursLocation from "../../components/HoursLocation";
// import ContactUs from '../../components/ContactUs';
// import Footer from '../../components/Footer';
import Container from '../../components/container';
import Loading from '../../components/Loading';
import { Suspense } from 'react';

import Hero from '../../components/Hero';
import TailoringInfo from '../../components/TailoringInfo';
import AboutUs from '../../components/AboutUs';
import Contact from '../../components/Contact';

const FrontPageView = () => {

	return (
		<>
			<Suspense fallback={<Loading/>}>
                <div className='space-y-12 md:space-y-24 mb-28'>
                    <Hero/>
					<Container>
						<TailoringInfo/>
						<AboutUs/>
						<Contact/>
					</Container>
                </div>
			</Suspense>
		</>
	);
}

export default FrontPageView;