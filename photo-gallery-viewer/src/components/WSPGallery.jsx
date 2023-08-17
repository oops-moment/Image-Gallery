import "./WSPGallery.css";
import { useState } from "react";
const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default WSPGallery;
