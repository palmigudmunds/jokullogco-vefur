import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ImageCarousel = ({ images }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div className="hide-scroll-bar w-full flex overflow-x-scroll scroll-smooth pb-3">
      <div className="flex snap-x snap-proximity flex-nowrap">
        {images.map((image, i) => (
          <div className="inline-block snap-center pr-3">
            <button
              className="group relative h-56 w-56 sm:h-64 sm:w-64 max-w-xs items-end justify-start overflow-hidden duration-150 transform hover:scale-95 ease-in-out"
              onClick={() => openLightboxOnSlide(i + 1)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        ))}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images.map((image) => image.src)}
        slide={lightboxController.slide}
      />
    </div>
  );
};

export default ImageCarousel;
