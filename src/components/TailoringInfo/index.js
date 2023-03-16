import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sersaumur = 'https://res.cloudinary.com/dq2uenf18/image/upload/v1678990654/jokullogco/sections/sersaumur_rk5nbt.jpg';


const paragraphVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1
      }
    }
};

const headerVariants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8
      }
    }
};

const TailoringInfo = () => {

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
        <div id="sersaumur" className="flex flex-col md:flex-row justify-center max-w-none">
            <div className="md:w-1/2 flex flex-col items-start md:items-center">
                <motion.h2 
                className="text-start md:text-start md:w-10/12 xl:w-8/12"
                ref={ref}
                variants={headerVariants}
                initial="offscreen"
                animate={control}
                >
                    {t('tailor-info-title')}
                </motion.h2>
                <motion.p
                className="pt-5 md:w-10/12 xl:w-8/12"
                variants={paragraphVariants}
                initial="offscreen"
                animate={control}
                >
                    {t('tailor-info-text-1')}
                    <br></br><br></br>
                    <b>I. </b>{t('tailor-info-text-2')}
                    <br></br><br></br>
                    <b>II. </b>{t('tailor-info-text-3')}
                    <br></br><br></br>
                    <b>III. </b>{t('tailor-info-text-4')}
                    <br></br><br></br>
                    <b>IV. </b>{t('tailor-info-text-5')}
                    <br></br><br></br>
                    <b>V. </b>{t('tailor-info-text-6')}
                </motion.p>
                <motion.div 
                className="pt-7 flex flex items-start md:w-10/12 xl:w-8/12"
                variants={paragraphVariants}
                initial="offscreen"
                animate={control}
                >
                    <button
                        className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('/verdskra')}>{t('look-at-prices-button')}</button>
                </motion.div>
            </div>
            <div className="flex flex-col items-center md:w-1/2 pt-8 md:pt-0">
                <motion.img 
                className="w-full h-auto object-cover xl:max-w-[30rem] max-w-[24rem]" 
                src={sersaumur} 
                alt="Materials"
                variants={headerVariants}
                initial="offscreen"
                animate={control}/>
            </div>
        </div>
    );
};

export default TailoringInfo;