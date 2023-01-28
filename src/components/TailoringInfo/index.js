import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sersaumur from '../../resources/images/sersaumur.jpg';


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

const TailoringInfo = () => {

    const { t } = useTranslation();

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("onscreen");
        } 
    }, [control, inView]);
    
    return (
        <div id="sersaumur" className="flex flex-col md:flex-row justify-center max-w-none">
            <div className="md:w-1/2 flex flex-col items-center">
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
                ref={ref}
                variants={paragraphVariants}
                initial="offscreen"
                animate={control}
                >
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
                </motion.p>
            </div>
            <div className="flex flex-col items-center md:w-1/2 pt-8 md:pt-0">
                <motion.img 
                className="w-full h-auto object-cover xl:max-w-[30rem] max-w-[24rem]" 
                src={sersaumur} 
                alt="Materials"
                whileHover={{ scale: 1.025 }} 
                whileTap={{ scale: 0.97 }}/>
            </div>
        </div>
    );
};

export default TailoringInfo;