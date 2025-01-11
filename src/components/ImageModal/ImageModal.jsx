import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { useEffect } from 'react';

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('ReactModal__Body--open');
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName={styles.overlay}
      className={styles.modal}
      preventScroll
      ariaHideApp={false}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
