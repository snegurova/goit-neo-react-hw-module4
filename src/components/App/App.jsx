import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from '../../api/api';
import Loader from '../Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollBy({
      top: 680,
      left: 0,
      behavior: 'smooth',
    });
  }, [images]);

  const handleSearch = async (query) => {
    setQuery(query);
    setIsLoading(true);
    setError(null);
    setPage(1);
    setImages([]);
    try {
      const images = await fetchImages(query, 1);
      setImages(images);
    } catch {
      setError('Failed to fetch images');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const images = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...images]);
      setPage(nextPage);
    } catch {
      setError('Failed to fetch images');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery
        images={images}
        isLoading={isLoading}
        error={error}
        onImageClick={handleImageClick}
      />
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
