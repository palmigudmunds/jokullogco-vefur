import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import umokkur from '../../resources/images/umokkur.jpg';

const AboutUs = () => {

    const { t } = useTranslation();

    let navigate = useNavigate();
    
    return (
        <div id="um-okkur" className="flex flex-col-reverse md:flex-row justify-center max-w-none">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
                <img className="w-full h-auto object-cover md:max-w-[30rem] max-w-[24rem] mb-5" src={umokkur} alt="About"/>
            </div>
            <div className="md:w-1/2 flex flex-col items-start md:items-center">
                <h2 className="text-start md:w-10/12 lg:w-8/12">{t('about-title')}</h2>
                <p className="pt-5 md:w-10/12 lg:w-8/12">
                    {t('about-text')}
                </p>
                <div className="mt-5 md:mt-10 flex items-start">
                    <button
                        className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('/verdskra')}>{t('look-at-prices-button')}</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;