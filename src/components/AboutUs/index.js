import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const umokkur =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1684670252/jokullogco/sections/umokkur_ikq0k0.jpg";

const AboutUs = () => {
  const { t } = useTranslation();

  let navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="um-okkur"
      className="flex flex-col md:flex-row justify-center max-w-none"
    >
      <div className="md:w-1/2 flex flex-col items-start md:items-center md:pt-10">
        <h2 className="text-start md:w-10/12 xl:w-8/12">{t("about-title")}</h2>
        <p className="pt-5 md:w-10/12 xl:w-8/12">{t("about-text")}</p>
        <div className="pt-7 flex flex items-start md:w-10/12 xl:w-8/12">
          <button
            className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
            onClick={() => navigate("/um-okkur")}
          >
            {t("more-about-us-button")}
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
        <img
          className="w-full h-auto object-cover xl:max-w-[32rem] max-w-[24rem]"
          src={umokkur}
          alt="About"
        />
      </div>
    </div>
  );
};

export default AboutUs;
