import Container from '../../components/container';
import Loading from '../../components/Loading';
import { Suspense } from 'react';
import Fade from 'react-reveal/Fade';

import Hero from '../../components/Hero';
import TailoringInfo from '../../components/TailoringInfo';
import AboutUs from '../../components/AboutUs';

const FrontPageView = () => {

	return (
		<>
			<Suspense fallback={<Loading/>}>
                <div className='space-y-12 md:space-y-24 mb-28'>
                    <Hero/>
					<Container>
						<Fade right duration={1700}>
							<TailoringInfo/>
						</Fade>
						<Fade left duration={1700}>
							<AboutUs/>
						</Fade>
					</Container>
                </div>
			</Suspense>
		</>
	);
}

export default FrontPageView;