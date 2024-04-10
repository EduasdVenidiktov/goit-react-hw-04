import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageCard.module.css";

const ImageCard = ({ photo, alt_description, largePhoto }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <img
        className={css.image}
        src={photo}
        alt={alt_description}
        onClick={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          image={largePhoto}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ImageCard;
