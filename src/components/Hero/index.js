import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Hero = () => {

    let navigate = useNavigate();

    const { t } = useTranslation();
    
    return (
        <header id="opening-header">
            <div className="flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                <div className="w-full md:w-1/2 pt-20 md:pt-48">
                    <h1 className="max-md:mt-5 text-center">{t('header-main')}</h1>
                </div>
                <div className="pt-12">
                    <button
                        className="bg-maingold text-white text-lg md:text-xl py-4 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('#contact')}>{t('order-button')}</button>
                </div>
            </div>
        </header>
    );
};

export default Hero;