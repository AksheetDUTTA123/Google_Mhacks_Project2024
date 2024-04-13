import React, { Component, useState, useEffect } from "react";

import { Button, Card } from "react-bootstrap";

import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
// import { ProfilePanel } from "../components/ProfilePanel";

import { useLocation } from "react-router-dom";

// import {doc, getDoc} from 'firebase/firestore';

// import {database} from '../firebase';

// import anish from '../anishc.jpeg'
// import { onValue, ref } from "firebase/database";

// import ProfileCard from "../components/ProfileCard";

import {useNavigation, Link} from 'react-router-dom';




let getDetails = async (uid) => {
    
}

function Home() {
    const loc = useLocation();

    const uid = loc.state.id;

    let details = {};

    //TODO FIX THIS

    // onValue(
    //     ref(
    //         database, 'users'
    //     ),  
    //     (snapshot) => {
    //         details = snapshot.val();
    //     }
    // )
    
    // console.log(details);

    const fullPage = {
        height: '200vh', // 100% of viewport height
        width: '100vw', // 100% of viewport width
        margin: 0,
        padding: 0,
        backgroundColor:'#141414',
    };

    var btns = []
    let text = ["Button"]
    let url = ['/button'];

    for(let i = 0; i < text.length; ++i) {
        btns.push(
            <Link to={url[i]}>
                <Button variant="transparent" className="mr-3 ml-3">
                    {text[i]}
                </Button>
            </Link>
        )
    }
    // return (
    //     <div className="" style={fullPage}>
    //         <LandingNavBar buttons={btns}/>
    //         <div style={{marginLeft:'45vw'}}>
    //             {/* <ProfileCard user={user1}/>
    //             <ProfileCard user={user2}/>
    //             <ProfileCard user={user3}/> */}
    //         </div>
            
    //         <div style={{position:'absolute', top:'0%', width:'30vw', height:'100vh'}}>
    //             <ProfilePanel img={anish} displayname={'Anish Chandra'} desc={'An Aspiring Software Engineering Looking for Their First Professional Experience'}/>
    //         </div>

            
    //     </div>
    // );
}


export default Home;