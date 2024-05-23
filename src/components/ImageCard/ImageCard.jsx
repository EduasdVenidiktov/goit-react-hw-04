import css from "./ImageCard.module.css";

const ImageCard = ({ photo, alt_description, onClick }) => {
  return (
    <div>
      <img
        className={css.image}
        src={photo}
        alt={alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
