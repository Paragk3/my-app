import React, { useState } from 'react';
import './GalleryComponent.css';

const GalleryComponent = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ]);

  const addImage = () => {
    const newImage = 'https://via.placeholder.com/150';
    setImages([...images, newImage]);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <button onClick={addImage} className="add-image-btn">+ Add Image</button>
      </div>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`gallery-${index}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
