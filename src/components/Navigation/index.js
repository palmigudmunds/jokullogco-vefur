import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';

import logo from '../../resources/logo.png';
import {ReactComponent as World} from '../../resources/world.svg';


const Navigation = () => {

    let activeClassName = 'text-maingold link max-md:hidden';

    const { t } = useTranslation();

    const { locale } = useContext(LocaleContext);

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        console.log('scrolling')
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    function changeLocale () {
        let l;
        if (locale === 'en') {
            l = 'is';
        } else {
            l = 'en';
        }
        if (locale !== l) {
          i18n.changeLanguage(l);
        }
    }

    return (
        <nav className={`mx-auto inset-x-0 h-16 md:h-28 z-40 w-full bg-slate-50 border-b border-maingold transition-all duration-300 sticky ${visible ? 'top-0' : '-top-16'} md:fixed md:top-0`}>
            <div className='max-w-screen-2xl flex md:mx-auto justify-center px-6 relative'>
                <div className='flex space-x-4 lg:space-x-10 justify-between items-center'>
                    <NavLink to={`/#tailor`}>
                        <button className='link text-maindarkblue max-md:hidden'>{t('nav-tailor')}</button>
                    </NavLink>
                    <NavLink to={`/#about-us`}>
                        <button className='link text-maindarkblue max-md:hidden'>{t('nav-about')}</button>
                    </NavLink>
                    <NavLink to={`/`}>
                        <img className="w-16 md:w-28 h-auto" src={logo} alt="Logo" />
                    </NavLink>
                    <NavLink to={`/#contact`}>
                        <button className='link text-maindarkblue max-md:hidden'>{t('nav-contact')}</button>
                    </NavLink>
                    <NavLink to={`/prices`} 
                            className={({ isActive }) =>
                                isActive ? activeClassName : 'text-maindarkblue link max-md:hidden'
                            }
                            >
                        {t('nav-prices')}
                    </NavLink>
                </div>
                <div className='absolute right-0 mt-5 md:mt-10 flex items-center w-16 space-x-1 cursor-pointer text-maindarkblue hover:text-maingold fill-maindarkblue hover:fill-maingold duration-100 ease-in-out' onClick={() => changeLocale()}>
                    <World className='mb-px w-3.5 h-auto'/>
                    <NavLink >
                        <button className='text-base lg:text-lg'>{t('language')}</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;