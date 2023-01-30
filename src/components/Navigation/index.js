import React, { useContext, useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';

import logo from '../../resources/images/logo.png';
import {ReactComponent as World} from '../../resources/icons/world.svg';


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
        <nav className={`mx-auto relative inset-x-0 h-20 md:h-28 z-40 w-full bg-white border-b border-maingold transition-all duration-300 sticky ${visible || isNavOpen? 'top-0' : '-top-20 md:h-20'} md:fixed md:top-0`}>
            <section className="MOBILE-MENU flex md:hidden">

                <div className="absolute left-0 mt-4 ml-6 z-20">
                    <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} color="#162135" direction="left" size={24} />
                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-screen ml-5 mt-40 -space-y-4">
                        <li className='nav-li'>
                            <NavLink to={`/#sersaumur`}>
                                <button className='link text-maindarkblue' onClick={() => setIsNavOpen(false)}>{t('nav-tailor')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/#um-okkur`}>
                                <button className='link text-maindarkblue' onClick={() => setIsNavOpen(false)}>{t('nav-about')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/verdskra`} 
                                className={({ isActive }) =>
                                    isActive ? 'text-maingold link' : 'text-maindarkblue link'
                                }
                                onClick={() => setIsNavOpen(false)}>
                            {t('nav-prices')}
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/hafdu-samband`} 
                                className={({ isActive }) =>
                                    isActive ? 'text-maingold link' : 'text-maindarkblue link'
                                }
                                onClick={() => setIsNavOpen(false)}>
                            {t('nav-contact')}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="">
                <div className="logo-wrapper">
                    <div className="">
                        <NavLink to={`/`}>
                            <img className={`logo w-20 transition-all ease-in-out duration-300 ${visible? 'md:w-28' : 'md:w-20'}`} src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                </div>
                <div className="half">		
                    <ul className="left-navlist">
                        <li className='nav-li'>
                            <NavLink to={`/#sersaumur`}>
                                <button className={`link text-maindarkblue max-md:hidden ${visible? '' : 'md:mt-4'}` }>{t('nav-tailor')}</button>
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/#um-okkur`}>
                                <button className='link text-maindarkblue max-md:hidden'>{t('nav-about')}</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="half">		
                    <ul className="right-navlist">
                        <li className={`nav-li ${visible? '' : 'md:mt-4'}`}>
                            <NavLink to={`/verdskra`} 
                                className={({ isActive }) =>
                                    isActive ? activeClassName : 'text-maindarkblue link max-md:hidden'
                                }
                                >
                            {t('nav-prices')}
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to={`/hafdu-samband`} 
                                className={({ isActive }) =>
                                    isActive ? activeClassName : 'text-maindarkblue link max-md:hidden'
                                }
                                >
                            {t('nav-contact')}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='absolute right-0 mt-3 md:mt-0 flex items-center w-16 space-x-1 cursor-pointer text-maindarkblue hover:text-maingold fill-maindarkblue hover:fill-maingold duration-100 ease-in-out' onClick={() => changeLocale()}>
                <World className='mb-px w-3.5 h-auto'/>
                <NavLink >
                    <button className='link-lang'>{t('language')}</button>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;