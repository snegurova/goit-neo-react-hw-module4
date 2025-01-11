import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={() => onClick(image)}>
      <img
        className={styles.galleryImage}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
