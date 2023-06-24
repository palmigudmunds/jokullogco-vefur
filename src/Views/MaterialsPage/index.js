import Loading from "../../components/Loading";
import { useTranslation } from 'react-i18next';
import ImageCarousel from "../../components/ImageCarousel";
import { Suspense } from "react";
import { jakkafotefniImages } from "../../resources/images/jakkafot";
import { fodranirefniImages } from "../../resources/images/fodranir";
import { skyrturefniImages } from "../../resources/images/skyrtur";

const MaterialsPageView = () => {
  const { t } = useTranslation();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="max-w-screen-lg mx-auto px-3 space-y-16 mb-12">
          <section
            id="materials-header"
            className="relative -mt-5 flex flex-col items-center justify-center text-center text-white py-0 px-3"
          >
            <div className="space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
              <div className="w-full mt-5 md:mt-0">
                <h1 className="text-center">{t('nav-materials')}</h1>
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center">
            <p className="text-center w-9/12 text-lg font-semibold">
              Við bjóðum upp á mikið úrval, bæði hvað varðar mynstur & efni,
              þannig að þú getir hannað jakkaföt & skyrtur nákvæmlega eftir þínu
              höfði. Hér fyrir neðan getur þú skoðað úrvalið & séð brot af því í
              myndum.
            </p>
          </div>
          <div>
            <h2 className="text-start md:text-start">Jakkaföt</h2>
            <div className="mt-7">
              <h3>Essentials</h3>
              <p>
                Essentials eða “nauðsynjaefnin” okkar eru í heild sinni úr
                gerviefnum eða pólýester & rayon blöndu. Þessi efni henta vel
                fyrir þá sem eru að stíga sín fyrstu skref í heim herramannsins
                & eru helstu eiginleikar efnanna meiri teygjanleiki & slitþol en
                ullar- &/eða bómullarfatnaðar. Athuga skal þó að gerviefni anda
                verr & endast ekki eins vel & föt úr ýmsum náttúrulegum efnum.
              </p>
            </div>
            <div className="mt-5">
              <h3>Pure wool</h3>
              <p>
                Í ullarflokki eitt hjá okkur er um að ræða efni gerð úr 90% ull
                & 10% gerviefnum fyrir aukinn styrk & teygjanleika. Í þessum
                flokki er mikið úrval hvað varðar mynstur. Hér getur þú fundið
                bæði einlit & mynstruð efni.
              </p>
            </div>
            <div className="mt-5">
              <h3>Pure wool 2</h3>
              <p>
                Ullarflokkur tvö er þrepi fyrir ofan þann fyrsta en hér má finna
                efni úr 97-100% merino ull sem ofin eru í Ástralíu. Efni sem
                þessi eru þekkt fyrir gæði en þau eru mjúk & hreyfast vel með
                klæðandanum. Einnig anda þau vel & eru vatnsfráhrindandi. Við
                höfum mikið úrval í þessum flokki.
              </p>
            </div>
            <div className="mt-5">
              <h3>Black tie</h3>
              <p>
                Ef tilefnið er með þeim fínustu & kallar jafnvel á smóking,
                getur þú fengið dressið hjá okkur. Black tie efnin koma í ýmsum
                litum, bæði hinum hefðbundnu miðnæturbláu & svörtu. Einnig er
                hægt að fá black tie efnin í öllum regnbogans litum & jafnvel
                með mynstrum.
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-3 italic">
                Hér getur þú rennt í gegnum brot af efnunum okkar í ofantöldum
                flokkum. Ath. þetta er aðeins brot af því sem við höfum upp á
                að bjóða.
              </p>
              <ImageCarousel images={jakkafotefniImages} />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-start md:text-start">Fóðranir</h2>
              <p className="mt-2">
                Fóðrunin getur verið eins stór hluti af fötunum & þú vilt. Sumir
                kjósa að hafa hana einlita en hér má einnig láta persónuleikann
                skína & láta fóðrunina vera teinótta, paisley mynstraða,
                blómótta eða jafnvel með áprentuðu mynstri. Við bjóðum líka upp
                á fóðrun úr silki sem gefur fötunum enn meiri mýkt & öndun.
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-3 italic">
                Hér færðu hugmynd um úrvalið en hafðu í huga að þetta er
                einungis brot af því.
              </p>
              <ImageCarousel images={fodranirefniImages} />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-start md:text-start">Skyrtur</h2>
              <p className="mt-2">
                Skyrtur eru undirstaðan í formlegum klæðnaði en þær geta líka
                verið hluti af hversdagslegum fatnaði. Skyrtuefnin okkar koma í
                ýmsum litum & gerðum & henta fyrir öll tilefni því við erum með
                allt frá flannel skyrtum til hawaii skyrta. Efnin ná ekki aðeins
                yfir allan litaskalann heldur eru líka mismunandi mynstur í
                hverjum lit. Skyrtur okkar eru gerðar úr bómull, hör eða ýmsum
                gerviefnum.
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-3 italic">
                Hér færðu hugmynd um úrvalið en hafðu í huga að þetta er
                einungis brot af því.
              </p>
              <ImageCarousel images={skyrturefniImages} />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default MaterialsPageView;
