import React from "react";

const LargeText = ({text}) => {
    return (
        <div >
            <h1 style={{fontSize:'200px', color:'white'}}><b>{text}</b></h1>
        </div>
    )
}

export default LargeText;