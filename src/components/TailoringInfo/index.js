import React from 'react';
import { useTranslation } from 'react-i18next';
import tailoring from '../../resources/tailoring.jpeg';
import materials from '../../resources/materials.png';

const TailoringInfo = () => {

    const { t } = useTranslation();
    
    return (
        <div id="tailor" className="flex flex-col md:flex-row justify-start max-w-none">
            <div className="md:w-1/2 flex flex-col items-center">
                <h2 className="text-start md:w-10/12 lg:w-8/12">{t('tailor-info-title')}</h2>
                <p className="pt-5 md:w-10/12 lg:w-8/12">
                    {t('tailor-info-text-1')}
                    <br></br><br></br>
                    {t('tailor-info-text-2')}
                    <br></br><br></br>
                    {t('tailor-info-text-3')}
                    <br></br><br></br>
                    {t('tailor-info-text-4')}
                    <br></br><br></br>
                    {t('tailor-info-text-5')}
                    <br></br><br></br>
                    {t('tailor-info-text-6')}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
                <img className="w-full h-auto object-cover md:max-w-[35rem] max-w-[24rem] mb-5" src={tailoring} alt="Tailoring"/>
                <img className="w-full h-auto object-cover md:max-w-[35rem] max-w-[24rem]" src={materials} alt="Materials"/>
            </div>
        </div>
    );
};

export default TailoringInfo;