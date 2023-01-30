import React from 'react';
import { useTranslation } from 'react-i18next';


const PricesHeader = () => {

    const { t } = useTranslation();
    
    return (
        <section id='prices-header' className="relative -mt-5 flex flex-col items-center justify-center text-center text-white py-0 px-3">
            <div className="video-content space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                <div className="w-full mt-5 md:mt-0">
                    <h1 className="text-center">{t('prices-title')}</h1>
                </div>
            </div>
        </section>
    );
};

export default PricesHeader;