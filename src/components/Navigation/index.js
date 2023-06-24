import React, { useContext, useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";

import logo from "../../resources/logos/logo.png";
import { ReactComponent as World } from "../../resources/icons/world.svg";

const Navigation = () => {
  let activeClassName = "text-maingold link max-md:hidden";

  const { t } = useTranslation();

  const { locale } = useContext(LocaleContext);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // console.log('scrolling')
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  function changeLocale() {
    let l;
    if (locale === "en") {
      l = "is";
    } else {
      l = "en";
    }
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <nav
      className={`mx-auto relative inset-x-0 h-20 md:h-28 z-40 w-full bg-white border-b border-maingold transition-all duration-500 sticky ${
        visible || isNavOpen ? "top-0" : "-top-20 md:-top-28"
      } `}
    >
      <section className="MOBILE-MENU flex md:hidden">
        <div className="absolute left-0 mt-4 ml-6 z-20">
          <Hamburger
            toggled={isNavOpen}
            toggle={setIsNavOpen}
            color="#162135"
            direction="left"
            size={24}
          />
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-screen ml-5 mt-40 -space-y-4">
            <li className="nav-li">
              <NavLink
                to={`/verdskra`}
                className={({ isActive }) =>
                  isActive ? "text-maingold link" : "text-maindarkblue link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                {t("nav-prices")}
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/efnin`}
                className={({ isActive }) =>
                  isActive ? "text-maingold link" : "text-maindarkblue link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                {t("nav-materials")}
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/um-okkur`}
                className={({ isActive }) =>
                  isActive ? "text-maingold link" : "text-maindarkblue link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                {t("nav-about")}
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/hafdu-samband`}
                className={({ isActive }) =>
                  isActive ? "text-maingold link" : "text-maindarkblue link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                {t("nav-contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div className="">
        <div className="logo-wrapper">
          <div className="logo">
            <NavLink to={`/`}>
              <img className="logo" src={logo} alt="Logo" />
            </NavLink>
          </div>
        </div>
        <div className="half">
          <ul className="left-navlist">
            <li className="nav-li">
              <NavLink
                to={`/verdskra`}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-maindarkblue link max-md:hidden"
                }
              >
                {t("nav-prices")}
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/efnin`}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-maindarkblue link max-md:hidden"
                }
              >
                {t("nav-materials")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="half">
          <ul className="right-navlist">
            <li className="nav-li">
              <NavLink
                to={`/um-okkur`}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-maindarkblue link max-md:hidden"
                }
              >
                {t("nav-about")}
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/hafdu-samband`}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-maindarkblue link max-md:hidden"
                }
              >
                {t("nav-contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-md:hidden absolute -left-2 mt-3 md:mt-0 flex items-center justify-end w-16 space-x-1 cursor-pointer text-maindarkblue hover:text-maingold fill-maindarkblue hover:fill-maingold duration-100 ease-in-out">
        <a
          href="https://www.instagram.com/jokullogco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div
        className="absolute right-0 mt-3 md:mt-0 flex items-center w-16 space-x-1 cursor-pointer text-maindarkblue hover:text-maingold fill-maindarkblue hover:fill-maingold duration-100 ease-in-out"
        onClick={() => changeLocale()}
      >
        <World className="mb-px w-3.5 h-auto" />
        <NavLink>
          <button className="link-lang">{t("language")}</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
