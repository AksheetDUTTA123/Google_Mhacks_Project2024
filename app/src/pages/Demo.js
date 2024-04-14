
// Demo.js
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import backgroundImage from "./bbe1c3.png";
import VideoPlayer from './VideoPlayer';


function DemoPage() {
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
        <LargeText text="DEMO" />
        {/* Button navigating to upload page */}
        <VideoPlayer />
        <Link to="/upload">
            <Button variant="success">Get Started!</Button>
        </Link>
    </div>
</div>
  );
}

export default DemoPage;