import React, { useState } from 'react';
import './GalleryComponent.css';

const GalleryComponent = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100'
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file); // This reads the file as a Data URL (base64)
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <label className="add-image-label">
          + Add Image
          <input type="file" onChange={handleImageUpload} accept="image/*" className="file-input" />
        </label>
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
