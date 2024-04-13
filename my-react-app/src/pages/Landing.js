import React, { Component } from "react";

import { Button } from "react-bootstrap";
import LandingNavBar from "../components/LandingNavBar";

import LargeText from "../components/LargeText";
import backgroundImage from "./Landing_3.png";

// import { Login } from "../components/Login";

import {Link} from 'react-router-dom';


function Landing() {

        var btns = []
        let text = ["GitHub"]
        let url = ['https://github.com/AksheetDUTTA123/Google_Mhacks_Project2024'];

        for(let i = 0; i < 1; ++i) {
            btns.push(
                <Link to={url[i]}>
                    <Button variant="transparent" className="mr-3 ml-3">
                        {text[i]}
                    </Button>
                </Link>
            )
        }

        // btns.push(
        //     <Login />
        // )

        const fullPage = {
            height: '100vh', // 100% of viewport height
            width: '100vw', // 100% of viewport width
            margin: 0,
            padding: 0,
        };

        return (
            <div className="" style={fullPage}>
                <div className="bg-img" style = {{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    height: '120vh', 
                }}> 
                <LandingNavBar style={{}} buttons={btns} />
                </div>
                <div className="" style={{position:'absolute', top:'25%', left:'25%'}}>
                    <LargeText text="Note.ai" />
                    <h1 style={{textAlign:'left', color:'ivory'}}>Insert motto here ✨</h1>
                    <div>
                    {/* <h1>Landing Page</h1> */}
                    <Link to="/test">Upload files (test)</Link>
                    </div>
                </div>
            </div>




        
        );
    }

export default Landing;