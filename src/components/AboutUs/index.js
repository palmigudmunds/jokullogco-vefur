import React from 'react';
import { useTranslation } from 'react-i18next';
import owner from '../../resources/owner.png';

const AboutUs = () => {

    const { t } = useTranslation();
    
    return (
        <div id="about-us" className="flex flex-col-reverse md:flex-row justify-center max-w-none">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
                <img className="w-full h-auto object-cover md:max-w-[35rem] max-w-[24rem] mb-5" src={owner} alt="Owners"/>
            </div>
            <div className="md:w-1/2 flex flex-col items-start md:items-center">
                <h2 className="text-start md:w-10/12 lg:w-8/12">{t('about-title')}</h2>
                <p className="pt-5 md:w-10/12 lg:w-8/12">
                    {t('about-text')}
                </p>
            </div>
        </div>
    );
};

export default AboutUs;