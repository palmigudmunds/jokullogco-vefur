import React from "react";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";

import hero1 from '../../resources/images/hero.jpeg';
import hero2 from '../../resources/images/hero2.jpg';
import hero3 from '../../resources/images/hero3.jpg';

const headerVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "ease",
            duration: 0.8
        }
    }
};

const buttonVariants = {
    offscreen: {
        y: 70,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "ease",
            duration: 1
        }
    }
};


const Hero = () => {

    const { t } = useTranslation();

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("onscreen");
        } 
    }, [control, inView]);
    
    return (
        <HeroSlider
            height={"75vh"}
            autoplay
            controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
                console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
                console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
                ),
            onAfterSliding: (nextSlide) =>
                console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
        >
            <Overlay>
                <section id="opening-header" className="relative flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <div className="video-content space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                        <div className="w-full md:w-1/2">
                            <motion.h1 
                            className="text-center"
                            ref={ref}
                            variants={headerVariants}
                            initial="offscreen"
                            animate={control}
                            >
                                {t('header-main')}
                            </motion.h1>
                        </div>
                        <motion.div 
                        className="pt-12"
                        ref={ref}
                        variants={buttonVariants}
                        initial="offscreen"
                        animate={control}>
                            <a
                            className="bg-maingold text-white text-lg md:text-xl py-3 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                            href="https://noona.is/jokullco/book">{t('order-button')}</a>
                        </motion.div>
                    </div>
                </section>
            </Overlay>
    
            <Slide
                background={{
                    backgroundImageSrc: hero2
                }}
            />
        
            <Slide
                background={{
                    backgroundImageSrc: hero1
                }}
            />
        
            <Slide
                background={{
                    backgroundImageSrc: hero3
                }}
            />
    
            <Nav />
        </HeroSlider>
      );
};

export default Hero;