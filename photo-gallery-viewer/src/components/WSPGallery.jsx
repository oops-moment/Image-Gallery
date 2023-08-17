import React, { useState } from "react";
import "./WSPGallery.css";
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the Carousel styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const nextSlide = () => {
    if (slideNumber !== galleryImages.length - 1) {
      setSlideNumber(slideNumber + 1);
    } else if (slideNumber === galleryImages.length - 1) {
      setSlideNumber(0);
    }
  };

  const prevSlide = () => {
    if (slideNumber !== 0) {
      setSlideNumber(slideNumber - 1);
    } else if (slideNumber === 0) {
      setSlideNumber(galleryImages.length - 1);
    }
  };

  return (
    <div>
      <Carousel
        showThumbs={true}
        showStatus={true}
        dynamicHeight={true}
        emulateTouch={true}
      >
        {/* Carousel preview at the bottom */}
        {galleryImages.map((slide, index) => (
          <div
            className="carouselImage"
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <img src={slide.img} alt="" />
          </div>
        ))}
      </Carousel>

      {openModal && (
        <div className="sliderWrap">
          {/* Photo viewer at the top */}
          <div className="fullScreenImage">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="btnClose"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
            />

            <img src={galleryImages[slideNumber].img} alt="" />
            <p>{galleryImages[slideNumber].name}</p>
          </div> 
        </div>
      )}
    </div>
  );
};

export default WSPGallery;
