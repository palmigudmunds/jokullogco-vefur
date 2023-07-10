import Loading from "../../components/Loading";
import { Suspense } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const PricesPageView = () => {
  const { t } = useTranslation();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="max-w-screen-md mx-auto px-3 space-y-16 mb-28">
          <section
            id="prices-header"
            className="relative -mt-5 flex flex-col items-center justify-center text-center text-white py-0 px-3"
          >
            <div className="space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
              <div className="w-full mt-5 md:mt-0">
                <h1 className="text-center">{t("prices-title")}</h1>
              </div>
            </div>
          </section>
          <div>
            <h2 className="text-start md:text-start">Flíkur</h2>
            <div className="mt-5">
              <ul className="leaders space-y-7">
                <li>
                  <span>{t("prices-suits-double")}</span>
                  <span>{t("prices-from")} 79.980,-</span>
                </li>
                <li>
                  <span>{t("prices-suits-triple")}</span>
                  <span>{t("prices-from")} 94.980,-</span>
                </li>
                <li>
                  <span>{t("prices-blazer")}</span>
                  <span>{t("prices-from")} 54.980,-</span>
                </li>
                <li>
                  <span>{t("prices-pants")}</span>
                  <span>{t("prices-from")} 27.980,-</span>
                </li>
                <li>
                  <span>{t("prices-vest")}</span>
                  <span>{t("prices-from")} 22.980,-</span>
                </li>
                <li>
                  <span>{t("prices-shirts")}</span>
                  <span>{t("prices-from")} 14.980,-</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-start md:text-start">Yfirhafnir</h2>
            <div className="mt-5">
              <ul className="leaders space-y-7">
                <li>
                  <span>{t("prices-overcoats")}</span>
                  <span>{t("prices-from")} 99.980,-</span>
                </li>
                <li>
                  <span>{t("prices-raincoats")}</span>
                  <span>{t("prices-from")} 64.980,-</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-start md:text-start">Aukahlutir</h2>
            <div className="mt-5">
              <ul className="leaders space-y-7">
                <li>
                  <span>{t("prices-italian-silk-tie")}</span>
                  <span>
                    <span>{t("prices-from")}</span> 14.980,-
                  </span>
                </li>
                <li>
                  <span>{t("prices-italian-silk-cloth")}</span>
                  <span>
                    <span>{t("prices-from")}</span> 6.490,-
                  </span>
                </li>
                <li>
                  <span>{t("prices-knitted-tie")}</span>
                  <span>
                    <span>{t("prices-from")}</span> 15.490,-
                  </span>
                </li>
                <li>
                  <span>{t("prices-afiogeg-cufflinks")}</span>
                  <span>
                    <span>{t("prices-from")}</span> 5.490,-
                  </span>
                </li>
                <li>
                  <span>{t("prices-afiogeg-tieclip")}</span>
                  <span>
                    <span>{t("prices-from")}</span> 12.490,-
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default PricesPageView;
