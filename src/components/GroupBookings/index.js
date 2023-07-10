import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const custom =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1684669939/jokullogco/sections/50D4819A-750E-4DD6-9734-A54199DAA7EA_1_201_a-min_u988ae.jpg";

const GroupBookings = () => {
  const { t } = useTranslation();

  let navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="hopabokanir"
      className="flex flex-col-reverse md:flex-row justify-center max-w-none"
    >
      <div className="flex flex-col md:w-1/2 pt-8 md:pt-0 items-center md:items-start">
        <img
          className="w-full h-auto object-cover xl:max-w-[32rem] max-w-[24rem]"
          src={custom}
          alt="About"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-start md:items-center md:pt-10">
        <h2 className="text-start md:w-10/12 xl:w-8/12">
          {t("contact-group-title")}
        </h2>
        <p className="pt-5 md:w-10/12 xl:w-8/12">{t("contact-group-text")}</p>
        <div className="pt-7 flex flex items-start md:w-10/12 xl:w-8/12">
          <button
            className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
            onClick={() => navigate("/hafdu-samband")}
          >
            {t("contact-button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupBookings;
