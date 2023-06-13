import React from "react";
import school from "../../Images/school.webm"
import staff from '../../Images/recent-videos.jpg'
import './Page1.css'
const Page1=()=>{
    return(
        <div className="page1">
            <div className="vid">
                <video src={school} autoPlay loop muted/>   
            </div>
            <div className="page-cont">
                <h2>Are you curious About Albuquerque Academy?</h2>
                <button>We are curious about you, too!</button>
            </div>
            <div className="staffs">
                <h1>We Are Albuquerque Academy</h1>
                <p>We are an independent, nonprofit, coeducational, college preparatory day school serving middle school and high school students in grades 6 through 12, located in Albuquerque, NM.</p>
                <div className="staff-img">
                    <div className="staff1">
                        <img src={staff} alt="" />
                    </div>
                    <div className="staff1">
                        <img src={staff} alt="" />
                    </div>
                    <div className="staff1">
                        <img src={staff} alt="" />
                    </div>
                    <div className="staff1">
                        <img src={staff} alt="" />
                    </div>
                </div>
                <h1>Curious About Albuquerque Academy?</h1>
                <p>Hear what it’s like in the words of our students.</p>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe> */}
            <iframe width="550" height="309" src="https://www.youtube.com/embed/CG1d22mKzJY" title="Grace &#39;27" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
export default Page1;