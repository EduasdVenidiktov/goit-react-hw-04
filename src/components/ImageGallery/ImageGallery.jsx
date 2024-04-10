import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.itemList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            photo={image.urls.small}
            largePhoto={image.urls.regular}
            description={image.alt_description}
          ></ImageCard>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
