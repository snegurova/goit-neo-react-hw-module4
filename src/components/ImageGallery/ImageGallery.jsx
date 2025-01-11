import ImageCard from '../ImageCard/ImageCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, error, onImageClick }) => {
  if (error) return <ErrorMessage />;

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
