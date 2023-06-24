import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import { ReactComponent as DownArrow } from "../../resources/icons/caret-down.svg";
import { ReactComponent as UpArrow } from "../../resources/icons/caret-up.svg";

const AboutUsPageView = () => {
  const { t } = useTranslation();
  const [isTextOneOpen, setIsTextOneOpen] = useState(false);
  const [isTextTwoOpen, setIsTextTwoOpen] = useState(false);
  const [isTextThreeOpen, setIsTextThreeOpen] = useState(false);
  const [isTextFourOpen, setIsTextFourOpen] = useState(false);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="max-w-screen-lg mx-auto px-3 space-y-16 mb-12">
          <section
            id="aboutus-header"
            className="relative -mt-5 flex flex-col items-center justify-center text-center text-white py-0 px-3"
          >
            <div className="space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
              <div className="w-full mt-5 md:mt-0">
                <h1 className="text-center">{t("nav-about")}</h1>
              </div>
            </div>
          </section>
          <div>
            <h2 className="text-start md:text-start">Hvað er Jökull & Co?</h2>
            <div className="mt-2">
              <p>
                Félagið Jökull & Co. stofnuðum við Ísak Einar Ágústsson & Fróði
                Kjartan Rúnarsson vegna brennandi áhuga okkar á formlegum
                klæðnaði herramanna. Þó lentum við alltaf í því sama þegar við
                ætluðum að versla herrafatnað. Flestar verslanir hérlendis taka
                ekki tillit til allra líkamsbygginga. Sumar eiga nóg til í
                stærri stærðunum en aðrar aðallega með “slim fit” snið. Að finna
                föt sem passa á menn sem eru mitt á milli eða hafa fætur í báðum
                heimum t.d. herðabreiðir eða með þver læri miðað við mitti &
                kálfa (og svo mætti lengi telja) getur reynst nær ómögulegt.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-start md:text-start">Innblástur</h2>
            <div className="mt-2">
              <p>
                Við höfum báðir fylgst mikið með bestu klæðskera húsum í heimi
                og höfum þar að auki ferðast til London & Ítalíu, rætt við
                reynslubolta geirans og drukkið í okkur eins mikla þekkingu og
                við mögulega gátum. Við vildum gera okkar besta í að flytja inn
                svipaða þjónustu á verði sem hentar sem flestum, því að okkar
                mati á öllum að geta liðið vel í góðum jakkafötum.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-start md:text-start">Stofnun félagsins</h2>
            <div className="mt-2">
              <p>
                Árið 2022 tókum við af skarið og stofnuðum við félag sem við
                myndum nefna Jökull & Co. Við félagarnir höllumst þó ekki alltaf
                að sama stíl en Fróði er meira í hinum afslappaða ítalska stíl á
                meðan Ísak sækir meira í hinn klassíska enska stíl. Ef þú kíkir
                til okkar í heimsókn færðu innsýn í báða heima og getum við
                leiðbeint þér nákvæmlega að því sem þú vilt. Eitt kunnum við þó
                báðir að meta en það eru gæði, hefðir & fallegt handverk.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-start md:text-start mb-5">Flíkurnar okkar</h2>
            <div className="w-full space-y-5">
              {/* Section one */}
              <div
                onClick={() => setIsTextOneOpen(!isTextOneOpen)}
                className="flex justify-between bg-gray-100 p-4 hover:cursor-pointer"
              >
                <h4>Ekki svo smá-atriði</h4>
                {isTextOneOpen ? (
                  <UpArrow className="mb-px w-7 h-auto" />
                ) : (
                  <DownArrow className="mb-px w-7 h-auto" />
                )}
              </div>
              {isTextOneOpen && (
                <p>
                  Þegar félagið var stofnað tókum við þá ákvörðun að frá okkur
                  kæmu einungis fagmannleg föt sem myndu þó leyfa persónuleika
                  hvers manns að skína og veita honum sjálfstraust. Hjá okkur
                  geta einstaklingar því ráðið næstum því hverju einasta
                  smáatriði sem sameinast í eina heild og gera hver jakkaföt
                  einstök. Allar þær útfærslur sem við bjóðum upp á hafa staðist
                  tímans tönn hvort sem talað er um boðungana, mismunandi
                  vasaútfærslur, festingar á buxur og svo mætti áfram telja.
                </p>
              )}
              {/* Section two */}
              <div
                onClick={() => setIsTextTwoOpen(!isTextTwoOpen)}
                className="flex justify-between bg-gray-100 p-4 hover:cursor-pointer"
              >
                <h4>Samræmi í mynstrum</h4>
                {isTextTwoOpen ? (
                  <UpArrow className="mb-px w-7 h-auto" />
                ) : (
                  <DownArrow className="mb-px w-7 h-auto" />
                )}
              </div>
              {isTextTwoOpen && (
                <p>
                  Ef skoðað er mynstraðar flíkur frá Jökli & Co. vandlega, má
                  sjá hversu mikil vinna er lögð í það að halda flæði
                  mynstursins á vösum, ermum, kraga, o.s.frv. Þetta dempar
                  flíkina og gleður augað án þess að maður taki endilega eftir
                  en hefur þó mikil áhrif á heildarmyndina. Samræmi í mynstrum
                  er eitthvað sem sést aðeins á vönduðum flíkum eins og má sjá á
                  fötum í hæsta gæðaflokki.
                </p>
              )}
              {/* Section three */}
              <div
                onClick={() => setIsTextThreeOpen(!isTextThreeOpen)}
                className="flex justify-between bg-gray-100 p-4 hover:cursor-pointer"
              >
                <h4>Handsaumað blómagat</h4>
                {isTextThreeOpen ? (
                  <UpArrow className="mb-px w-7 h-auto" />
                ) : (
                  <DownArrow className="mb-px w-7 h-auto" />
                )}
              </div>
              {isTextThreeOpen && (
                <p>
                  Handsaumað blómagat er það atriði sem eldri kynslóðir munu
                  kunna að meta hvað mest. Hjá okkur er hægt að fá blómagatið í
                  tveimur stílum, enskum og ítölskum. Við bjóðum einnig handsaum
                  á hnappagötin á ermum jakkana og þá gefst líka tækifæri að
                  velja lit saumsins.
                </p>
              )}
              {/* Section four */}
              <div
                onClick={() => setIsTextFourOpen(!isTextFourOpen)}
                className="flex justify-between bg-gray-100 p-4 hover:cursor-pointer"
              >
                <h4>Púði eða ekki púði?</h4>
                {isTextFourOpen ? (
                  <UpArrow className="mb-px w-7 h-auto" />
                ) : (
                  <DownArrow className="mb-px w-7 h-auto" />
                )}
              </div>
              {isTextFourOpen && (
                <p>
                  Jökull & Co. býður mönnum að velja hvort þeir hafi axlarpúða í
                  jakkanum enda er margur maðurinn sem forðast axlarpúða eins og
                  sótt. Við viljum þó færa rök fyrir því að axlarpúðar eru alls
                  ekki eins slæmir og menn halda enda eiga líklega flestir menn
                  jakka með púðum án þess að átta sig á því. Axlarpúðar geta
                  verið mjög góð lausn fyrir marga ef þeir vilja fá skarpara eða
                  formlegra útlit. Ef menn vilja aftur á móti léttara og
                  náttúrulegra útlit er ekkert mál að sleppa þeim. Þá má líka
                  nefna að axlarpúðar eru yfirleitt ósýnilegir nema þeir séu
                  illa gerðir eða jakkinn passi ekki.
                </p>
              )}
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default AboutUsPageView;
