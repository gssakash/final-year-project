import React, { useState } from 'react';
import axios from 'axios';
import './ImageUploader.css';

function ImageUploader() {
  const [image, setImage] = useState(null);

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  }

  //Reference : https://dev.to/shadid12/how-to-upload-images-to-s3-in-a-react-application-4lm
  function handleImageSubmit(event) {
    event.preventDefault();
    console.log('Uploading image:', image);
    
  }

  return (
    <div>
      <h1 className="image-upload-text">Image Uploader</h1>
      <form onSubmit={handleImageSubmit}>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
        {image && (
          <div>
            <h2>Preview:</h2>
            <img src={image} alt="Uploaded image" width="200" />
          </div>
        )}
      </form>
    </div>
  );
}

export default ImageUploader;
