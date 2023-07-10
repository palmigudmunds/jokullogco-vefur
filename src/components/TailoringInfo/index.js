import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";

const sersaumur =
  "https://res.cloudinary.com/dq2uenf18/video/upload/v1689023934/jokullogco/sections/Pa%CC%81lmi_M%C3%A6ling_yfjgaz.mp4";

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
      <div className="md:w-full flex flex-col items-start">
        <h2 className="text-start">
          {t("tailor-info-title")}
        </h2>
        <p className="pt-5 md:w-10/12">
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
        <div className="pt-7 flex flex items-start">
          <button
            className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
            onClick={() => navigate("/efnin")}
          >
            {t("look-at-materials-button")}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-full pt-8 mt-14 md:pt-0">
        <video controls>
          <source src={sersaumur} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default TailoringInfo;
