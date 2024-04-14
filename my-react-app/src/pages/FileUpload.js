
// Upload.js
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import backgroundImage from "./bbe1c3.png";
// import "./Landing.css"; // Import the CSS file
import axios from 'axios';
import FileUploadButton from './fileuploadbutton';
import { Row, Col } from 'react-bootstrap';
import pdf from "../test.pdf"
import tex from "../test.tex"

function UploadPage() {
    var btns = []
    let text = ["GitHub"]
    let url = ['https://github.com/AksheetDUTTA123/Google_Mhacks_Project2024'];

    for (let i = 0; i < 1; ++i) {
        btns.push(
            <Link to={url[i]} key={i}>
                <Button variant="transparent" className="mr-3 ml-3">
                    {text[i]}
                </Button>
            </Link>
        )
    }

    const fullPage = {
        height: '100vh', // 100% of viewport height
        width: '100vw', // 100% of viewport width
        margin: 0,
        padding: 0,
    };

    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    function handleMultipleChange(event) {
      setFiles([...event.target.files]);
    }
  
    function handleMultipleSubmit(event) {
      event.preventDefault();
      
      const url = 'http://localhost:3000/upload';
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('file', file);
      });
  
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      axios.post(url, formData, config)
        .then((response) => {
          console.log("response: " + response.data);
          setUploadedFiles(response.data.files);
        })
        .catch((error) => {
          console.error("Error uploading files: ", error);
        });
    }

    function getRequest(event) {
      event.preventDefault();
      
      const url = 'http://localhost:3000/generating';

        // await()
      axios.get(url)
        .then((response) => {
          console.log("response: " + response.data);
        })
        .catch((error) => {
          console.error("Error executing Python script: ", error);
        }); 
      console.log("end");
    }
  return (

    
    <div className="" style={fullPage}>
    <div className="bg-img" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: '120vh',
    }}>
        <LandingNavBar style={{}} buttons={btns} />
    {/* Row for text titles */}
    <div className="row">
      <div className="col-6">
        <h1>Upload PDF</h1>
        <form onSubmit={handleMultipleSubmit}>
                <input type="file" onChange={handleMultipleChange} className="custom-file-upload" />
                <Button type="submit" variant="primary" >Upload</Button>
            </form>
            {/* {uploadedFiles.map((file, index) => (
                <img key={index} src={file} alt={`Uploaded content ${index}`} />
            ))} */}
      </div>
      <div className="col-6">
        <h1>Upload Images</h1>
        <form onSubmit={handleMultipleSubmit}>
                <input type="file" multiple onChange={handleMultipleChange} className="custom-file-upload" />
                <Button type="submit" variant="primary" >Upload</Button>
            </form>
      </div>
    </div>
    </div>


    <div className="" style={{ position: 'absolute', top: '90%', left: '50%' }}>
        {/* <FileUploadButton />  */}
        {/* other way: */}
        {/* <div className="App">
            <form xonSubmit={handleMultipleSubmit}>
                
                <h1>Upload PDF</h1>
                <input type="file" onChange={handleMultipleChange} className="custom-file-upload" />
                <Button type="submit" variant="primary">Upload</Button>
            </form>
            {uploadedFiles.map((file, index) => (
                <img key={index} src={file} alt={`Uploaded content ${index}`} />
            ))}
        </div>
        <div className="App">
            <form xonSubmit={handleMultipleSubmit}>
                <h1>Upload Images</h1>
                <input type="file" multiple onChange={handleMultipleChange} className="custom-file-upload" />
                <Button type="submit" variant="primary">Upload</Button>
            </form>
            {uploadedFiles.map((file, index) => (
                <img key={index} src={file} alt={`Uploaded content ${index}`} />
            ))}

        </div> */}
    <div className="" style={{ position: 'relative', top: '20%', left: '-50%' }}>
        {/* <LargeText text="UPLOAD" /> */}
        {/* Button navigating to upload page */}
        <Link to="/demo">
            <Button variant="secondary">Confused? Watch the demo!</Button>
        </Link>
    </div>
    <div className="" style={{ position: 'fixed', top: '50%', left: '43%' }}>
        {/* <LargeText text="UPLOAD" /> */}
        {/* Button navigating to upload page */}
        <form onSubmit={getRequest}>
          <Button variant="secondary" type="submit">Generate Cheat Sheet</Button>
        </form>
    </div>
    <div className="row">
    <div className="" style={{ position: 'fixed', top: '70%', left: '55%' }}>
        {/* <LargeText text="UPLOAD" /> */}
        {/* Button navigating to upload page */}
        <a href={tex} download="cheat_sheet.tex" target='_blank'>
          <Button size="lg">Download .tex</Button>
        </a>
    </div>
    <div className="" style={{ position: 'fixed', top: '70%', left: '35%' }}>
        {/* <LargeText text="UPLOAD" /> */}
        {/* Button navigating to upload page */}
        <a href={pdf} download="cheat_sheet.pdf" target='_blank'>
          <Button size="lg">Download .pdf</Button>
        </a>

    </div>
    </div>
</div>
</div>
  );
}

export default UploadPage;