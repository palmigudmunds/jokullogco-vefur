import Container from '../../components/container';
import Loading from '../../components/Loading';
import { Suspense } from 'react';

import Contact from '../../components/Contact';

const ContactPageView = () => {

	return (
		<>
			<Suspense fallback={<Loading/>}>
                <div className='space-y-12 md:space-y-32 mb-28'>
					<Container>
						<Contact/>
					</Container>
                </div>
			</Suspense>
		</>
	);
}

export default ContactPageView;