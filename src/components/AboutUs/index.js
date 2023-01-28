import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import umokkur from '../../resources/images/umokkur.jpg';

const paragraphVariants = {
    offscreen: {
      x: -200,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2
      }
    }
};

const headerVariants = {
    offscreen: {
        x: -100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 2
        }
    }
};

const AboutUs = () => {

    const { t } = useTranslation();

    let navigate = useNavigate();

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("onscreen");
        } 
    }, [control, inView]);
    
    return (
        <div id="um-okkur" className="flex flex-col-reverse md:flex-row justify-center max-w-none">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
                <motion.img 
                className="w-full h-auto object-cover md:max-w-[30rem] max-w-[24rem] mb-5" 
                src={umokkur} 
                alt="About"
                whileHover={{ scale: 1.025 }} 
                whileTap={{ scale: 0.97 }}/>
            </div>
            <div className="md:w-1/2 flex flex-col items-start md:items-center">
                <motion.h2 
                className="text-start md:w-10/12 lg:w-8/12"
                ref={ref}
                variants={headerVariants}
                initial="offscreen"
                animate={control}
                >
                    {t('about-title')}
                </motion.h2>
                <motion.p 
                className="pt-5 md:w-10/12 lg:w-8/12"
                ref={ref}
                variants={paragraphVariants}
                initial="offscreen"
                animate={control}
                >
                    {t('about-text')}
                </motion.p>
                <motion.div 
                className="mt-5 md:mt-10 flex items-start"
                ref={ref}
                variants={paragraphVariants}
                initial="offscreen"
                animate={control}
                >
                    <button
                        className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('/verdskra')}>{t('look-at-prices-button')}</button>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;