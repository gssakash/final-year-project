import React, { useRef, useState } from 'react';
import axios from 'axios';
import './ImageUploader.css';

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(); // Add this line to create a reference to the file input

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  }

  async function handleImageSubmit() {
    if (file) {
      const fileName = file.name;
      console.log('File name: ', fileName);
      let url = `http://localhost:8000/predict/${fileName}`
      const response = await axios.get(url,
        {
          'Access-Control-Allow-Origin':'*',
          }
          );
      console.log('API Response: ', response.data)
      console.log(response.data.prediction)
    }
  }

  function triggerFileInput() {
    fileInputRef.current.click(); // Trigger the hidden file input
  }

  return (
    <div>
      <h1 className="image-upload-text">Image Uploader</h1>
      <input
        type="file"
        ref={fileInputRef}
        accept=".jpg, .jpeg, .png"
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the file input element
      />
      {image && (
        <div>
          <h2>Preview:</h2>
          <img src={image} alt="Uploaded image" width="200" />
        </div>
      )}
      <button id="selector-btn" onClick={triggerFileInput}>Select Image</button>
      <button id="uploader-btn" onClick={handleImageSubmit}>Upload Image</button>
    </div>
  );
}

export default ImageUploader;
