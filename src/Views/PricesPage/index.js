import Container from '../../components/container';
import Loading from '../../components/Loading';
import { Suspense } from 'react';
import PricesHeader from '../../components/PricesHeader';
import PricesItems from '../../components/PricesItems';


const PricesPageView = () => {

	return (
		<>
			<Suspense fallback={<Loading/>}>
                <div className='space-y-12 md:space-y-24 mb-28'>
					<Container>
                        <PricesHeader />
						<PricesItems />
					</Container>
                </div>
			</Suspense>
		</>
	);
}

export default PricesPageView;