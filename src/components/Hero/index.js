import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";
import AOS from "aos";
import "aos/dist/aos.css";

const hero1 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678990625/jokullogco/hero/hero_ncn5ch.jpg";
const hero2 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678990631/jokullogco/hero/hero2_niyzqs.jpg";
const hero3 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1684672481/jokullogco/hero/frodi_p0rmyw.jpg";
const hero4 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1684669066/jokullogco/sections/KSH00795-min_pvibys.jpg";

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HeroSlider
      height={"85vh"}
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
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <section
          id="opening-header"
          className="relative flex flex-col items-center justify-center text-center text-white py-0 px-3"
        >
          <div className="video-content space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
            <div className="w-full md:w-1/2">
              <h1 data-aos="fade-up" className="text-center">
                {t("header-main")}
              </h1>
            </div>
            <div data-aos="fade-up" className="pt-12">
              <a
                className="bg-maingold text-white text-lg md:text-xl py-3 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                href="https://noona.is/jokullogco/book"
              >
                {t("order-button")}
              </a>
            </div>
          </div>
        </section>
      </Overlay>

      <Slide
        background={{
          backgroundImageSrc: hero2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: hero1,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: hero3,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: hero4,
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default Hero;
