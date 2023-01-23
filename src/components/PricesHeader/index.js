import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const PricesHeader = () => {

    // let navigate = useNavigate();

    const { t } = useTranslation();
    
    return (
        // <header id="prices-header">
        //     <div className="flex flex-col justify-center items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
        //         <div className="w-full md:w-1/2 pt-5 md:pt-48 lg:pt-56">
        //             <h1 className="max-md:mt-5 text-center">{t('prices-title')}</h1>
        //         </div>
        //     </div>
        // </header>
        <section id='prices-header' className="relative -mt-5 md:mt-20 flex flex-col items-center justify-center text-center text-white py-0 px-3">
            <div className="video-content space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                <div className="w-full">
                    <h1 className="text-center">{t('prices-title')}</h1>
                </div>
            </div>
        </section>
    );
};

export default PricesHeader;