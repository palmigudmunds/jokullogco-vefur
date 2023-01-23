import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};
  
const mainVideo =
    "https://josecuono.dev/video1.mp4";

const backupImage =
    "https://media.gq-magazine.co.uk/photos/61fd48f29e6a5729a6108d71/3:2/w_1620,h_1080,c_limit/03022022_3_HP.jpeg";


const Hero = () => {

    let navigate = useNavigate();

    const { t } = useTranslation();

    const videoParentRef = useRef();
    const [shouldUseImage, setShouldUseImage] = useState(false);

    useEffect(() => {
        // check if user agent is safari and we have the ref to the container <div />
        if (isSafari() && videoParentRef.current) {
            // obtain reference to the video element
            const player = videoParentRef.current.children[0];

        // if the reference to video player has been obtained
        if (player) {
            // set the video attributes using javascript as per the
            // webkit Policy
            player.controls = false;
            player.playsinline = true;
            player.muted = true;
            player.setAttribute("muted", ""); // leave no stones unturned :)
            player.autoplay = true;

            // Let's wait for an event loop tick and be async.
            setTimeout(() => {
            // player.play() might return a promise but it's not guaranteed crossbrowser.
            const promise = player.play();
            // let's play safe to ensure that if we do have a promise
            if (promise.then) {
                promise
                .then(() => {})
                .catch(() => {
                    // if promise fails, hide the video and fallback to <img> tag
                    videoParentRef.current.style.display = "none";
                    setShouldUseImage(true);
                });
            }
            }, 0);
        }
        }
    }, []);
    
    
    return shouldUseImage ? (
        <section id='opening-header' className="relative md:mt-28 flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img className="min-w-full min-h-full absolute object-cover" src={backupImage} alt="Muted video"/>
                </div>
                <div className="video-content space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center">{t('header-main')}</h1>
                    </div>
                    <div className="pt-12">
                        <button
                        className="bg-maingold text-white text-lg md:text-xl py-3 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('#contact')}>{t('order-button')}</button>
                    </div>
                </div>
            </section>
    ) : (
            <section id='opening-header' className="relative md:mt-28 flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <div
                        className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"
                        ref={videoParentRef}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <video
                            class="min-w-full min-h-full absolute object-cover"
                            loop
                            muted
                            autoplay
                            playsinline
                            preload="metadata"
                            src="${mainVideo}" type="video/mp4"
                            >
                            </video>`
                        }}
                    />
                <div className="video-content space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center">{t('header-main')}</h1>
                    </div>
                    <div className="pt-12">
                        <button
                        className="bg-maingold text-white text-lg md:text-xl py-3 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                        onClick={()=> navigate('/contact')}>{t('order-button')}</button>
                    </div>
                </div>
            </section>
    );
};

export default Hero;