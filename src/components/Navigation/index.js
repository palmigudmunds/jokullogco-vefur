import React, { useContext, useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'
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

    const [isNavOpen, setIsNavOpen] = useState(false);

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
        <nav className={`mx-auto relative inset-x-0 h-20 md:h-28 z-40 w-full bg-white border-b border-maingold transition-all duration-300 sticky ${visible || isNavOpen? 'top-0' : '-top-20'} md:fixed md:top-0`}>
            <section className="MOBILE-MENU flex md:hidden">

                <div className="absolute left-0 mt-4 ml-6 z-20">
                    <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} color="#162135" direction="left" size={24} />
                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-screen ml-5 mt-40 -space-y-4">
                        <li className='nav-li'>
                            <NavLink to={`/prices`} 
                                className={({ isActive }) =>
                                    isActive ? 'text-maingold link' : 'text-maindarkblue link'
                                }
                                onClick={() => setIsNavOpen(false)}>
                            {t('nav-prices')}
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/#tailor`}>
                                <button className='link text-maindarkblue' onClick={() => setIsNavOpen(false)}>{t('nav-tailor')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/#about-us`}>
                                <button className='link text-maindarkblue' onClick={() => setIsNavOpen(false)}>{t('nav-about')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/#contact`}>
                                <button className='link text-maindarkblue' onClick={() => setIsNavOpen(false)}>{t('nav-contact')}</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="">
                <div className="logo-wrapper">
                    <div className="logo">
                        <NavLink to={`/`}>
                            <img className="logo" src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                </div>
                <div className="half">		
                    <ul className="left-navlist">
                        <li className='nav-li'>
                            <NavLink to={`/#tailor`}>
                                <button className='link text-maindarkblue max-md:hidden'>{t('nav-tailor')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/#about-us`}>
                                <button className='link text-maindarkblue max-md:hidden'>{t('nav-about')}</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="half">		
                    <ul className="right-navlist">
                        <li className='nav-li'>
                            <NavLink to={`/#contact`}>
                                <button className='link text-maindarkblue max-md:hidden'>{t('nav-contact')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/prices`} 
                                className={({ isActive }) =>
                                    isActive ? activeClassName : 'text-maindarkblue link max-md:hidden'
                                }
                                >
                            {t('nav-prices')}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='absolute right-0 mt-3 md:mt-0 flex items-center w-16 space-x-1 cursor-pointer text-maindarkblue hover:text-maingold fill-maindarkblue hover:fill-maingold duration-100 ease-in-out' onClick={() => changeLocale()}>
                <World className='mb-px w-3.5 h-auto'/>
                <NavLink >
                    <button className='text-base lg:text-lg'>{t('language')}</button>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;