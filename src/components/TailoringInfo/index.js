import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";

const sersaumur =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1684669632/jokullogco/sections/93B27C11-9F04-45B7-B967-10D7C6CB879D_1_201_a-min_dlnrke.jpg";

const TailoringInfo = () => {
  const { t } = useTranslation();

  let navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="sersaumur"
      className="flex flex-col md:flex-row justify-center max-w-none"
    >
      <div className="md:w-1/2 flex flex-col items-start md:items-center md:pt-10">
        <h2 className="text-start md:text-start md:w-10/12 xl:w-8/12">
          {t("tailor-info-title")}
        </h2>
        <p className="pt-5 md:w-10/12 xl:w-8/12">
          {t("tailor-info-text-1")}
          <br></br>
          <br></br>
          <b>I. </b>
          {t("tailor-info-text-2")}
          <br></br>
          <br></br>
          <b>II. </b>
          {t("tailor-info-text-3")}
          <br></br>
          <br></br>
          <b>III. </b>
          {t("tailor-info-text-4")}
          <br></br>
          <br></br>
          <b>IV. </b>
          {t("tailor-info-text-5")}
          <br></br>
          <br></br>
          <b>V. </b>
          {t("tailor-info-text-6")}
        </p>
        <div className="pt-7 flex flex items-start md:w-10/12 xl:w-8/12">
          <button
            className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
            onClick={() => navigate("/efnin")}
          >
            {t("look-at-materials-button")}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-1/2 pt-8 md:pt-0">
        <img
          className="w-full h-auto object-cover xl:max-w-[32rem] max-w-[24rem]"
          src={sersaumur}
          alt="Materials"
        />
      </div>
    </div>
  );
};

export default TailoringInfo;
