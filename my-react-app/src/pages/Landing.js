import React from "react";
import { Button } from "react-bootstrap";
import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import backgroundImage from "./background.png";
import { Link } from 'react-router-dom';
import "./Landing.css"; // Import the CSS file

function Landing() {
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

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Process the uploaded file here, e.g., send it to a server
        console.log('Uploaded file:', file);
    };

    return (
        <div className="" style={fullPage}>
            <div className="bg-img" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                height: '120vh',
            }}>
                <LandingNavBar style={{}} buttons={btns} />
            </div>
            <div className="" style={{ position: 'absolute', top: '25%', left: '25%' }}>
                <LargeText text="Note.ai" />
                <h1 style={{ textAlign: 'left', color: 'ivory' }}>Insert motto here ✨</h1>
                <div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <input id="file-upload" type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
                        Choose file
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Landing;
