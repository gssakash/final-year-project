import React, { useRef, useState } from 'react';
import axios from 'axios';
import { StyleSheet, PDFDownloadLink, Image, Document, Page, Text } from '@react-pdf/renderer';
 
import './ImageUploader.css';
 
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    color: "purple"
  },
  date: {
    paddingLeft: "80%"
  }
});

  let date = new Date().toLocaleDateString();

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [pred,setPred] = useState(null);
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
  

  function MyDocument(props) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
        <Text style={styles.title}> ODIR - Eye Report</Text>
        <Text style={styles.gen}> Name : Jhon doe</Text>
        <Text style={styles.gen}> Date of Birth : 9/07/1995</Text>
        <Text style={styles.gen}> Blood Group : O -ve </Text>
        <Text style={styles.gen}> Consulted Doctor : Walter Green </Text>
        <Text style={styles.gen}> Address - 7th Avenue, New York Castle, New York, US - 60002904</Text>
        <Text style={styles.title}> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
        <Image style={styles.image} src={props.image} />
        <Text style={styles.title}> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
        <Text style={styles.subtitle}>API Response:</Text>
        <Text style={styles.text}>{props.data}</Text>
      </Page>
    </Document>
  );
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
      setPred(response.data.prediction)
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
          <img src={image} alt="Uploaded file" width="200" />
        </div>
      )}
      <button id="selector-btn" onClick={triggerFileInput}>Select Image</button>
      <button id="uploader-btn" onClick={handleImageSubmit}>Upload Image</button>
      <PDFDownloadLink document={<MyDocument data={pred} image={image} />} fileName="report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
 
      <h2>{pred}</h2>
    </div>
  );
}
 
export default ImageUploader;