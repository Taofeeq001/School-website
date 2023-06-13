import React from "react";
import school from "../../Images/school.webm"
import './Page1.css'
const Page1=()=>{
    return(
        <div className="page1">
            <div className="vid">
                <video src={school} alt="" autoPlay loop muted/>   
            </div>
            <div className="page-cont">
                <h2>Are you curious About Albuquerque Academy?</h2>
                <button>We are curious about you, too!</button>
            </div>
        </div>
    )
}
export default Page1;