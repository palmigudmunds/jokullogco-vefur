import React from 'react';
import { useTranslation } from 'react-i18next';


const PricesItems = () => {

    const { t } = useTranslation();
    
    return (
        <div className='flex flex-col justify-center items-center -mt-5 md:-mt-10'>
            <div className="w-full md:w-3/6 mb-96">
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-9 lg:mb-10'>
                    <div className="flex flex-col justify-start w-full">
                        <ul className='leaders space-y-10'>
                            <li>
                                <span>{t('prices-suits')}</span>
                                <span>{t('prices-from')} 69.980,-</span>
                            </li>
                            <li>
                                <span>{t('prices-shirts')}</span>
                                <span>{t('prices-from')} 14.980,-</span>
                            </li>
                            <li>
                                <span>{t('prices-angora')}</span>
                                <span>99.980,-</span>
                            </li>
                            <li>
                                <span>{t('prices-cashmere')}</span>
                                <span>129.980,-</span>
                            </li>
                            <li>
                                <span>{t('prices-afiogeg-cufflinks')}</span>
                                <span>5.490,-</span>
                            </li>
                            <li>
                                <span>{t('prices-afiogeg-tieclip')}</span>
                                <span>12.490,-</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricesItems;