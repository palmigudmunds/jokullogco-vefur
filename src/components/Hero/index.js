import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Hero = () => {

    let navigate = useNavigate();

    const { t } = useTranslation();
    
    return (
        <header id="opening-header" className='md:mt-28'>
            <div className="flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                <div className="w-full md:w-1/2 mt-20 md:mt-32">
                    <h1 className="text-center">{t('header-main')}</h1>
                </div>
                <div className="pt-12">
                    <button
                        className="bg-maingold text-white text-lg md:text-xl py-3 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('#contact')}>{t('order-button')}</button>
                </div>
            </div>
        </header>
    );
};

export default Hero;