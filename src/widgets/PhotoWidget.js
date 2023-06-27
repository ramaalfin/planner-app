import React, { useState } from 'react';

const PhotoWidget = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Photo Widget</h2>
      <input type="file" accept="image/*" onChange={handlePhotoSelect} />
      {selectedPhoto && <img src={selectedPhoto} alt="Selected Photo" />}
    </div>
  );
};

export default PhotoWidget;
