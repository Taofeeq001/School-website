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
            </div>
            <div className="curious">
                <div className="curious-head">
                    <h1>Curious About Albuquerque Academy?</h1>
                    <p style={{fontSize:'23px', fontWeight:600, color:'red'}}>Hear what it’s like in the words of our students.</p>
                </div>
                <div className="youtube">
                    <div className="youtube-details">
                        <iframe width="550" height="309" src="https://www.youtube.com/embed/CG1d22mKzJY" title="Grace &#39;27" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div>
                            <h1>Grace ’27</h1>
                            <p>“The best thing here is you’re going to feel like you belong. You’re never going to feel like an outsider.”</p>
                        </div>
                    </div>
                    <div className="youtube-details2">
                        <div className="details2-cont">
                            <div>
                                <h1>Akilan ’25</h1>
                                <p>“The main thing I’ve really come to appreciate about the teachers is they make learning approachable and enjoyable.”</p>
                            </div>
                            <div>
                                <h1>Sowmya ’27</h1>
                                <p>“The Academy is a place where you can do everything.”</p>
                            </div>
                        </div>
                        <iframe width="550" height="309" src="https://www.youtube.com/embed/Pv0ef7cdJJM" title="Akilan &#39;25 &amp; Sowmya &#39;27" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="youtube-details">
                        <iframe width="550" height="309" src="https://www.youtube.com/embed/ZFw5iOoOa6g" title="Kiki &#39;24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div>
                            <h1>Kiki ’24</h1>
                            <p>“Here, it’s just such a different experience… it’s so much more than just coming to class every day.”</p>
                        </div>
                    </div>
                    <div className="youtube-details2">
                        <div className="details2-cont">
                            <div>
                                <h1>Leah ’26</h1>
                                <p>“Everyone is here to lift each other up and help each other out, and I don’t think you can get that experience anywhere else.”</p>
                            </div>
                            <div>
                                <h1>Kira ’26</h1>
                                <p>“Transferring from a public school was a really big change for us. But once I got here, I really felt welcomed.”</p>
                            </div>
                        </div>
                        <iframe width="550" height="309" src="https://www.youtube.com/embed/Oq7WVz3vYKA" title="Leah &#39;26 &amp; Kira &#39;26" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="youtube-details">
                        <iframe width="550" height="309" src="https://www.youtube.com/embed/RHu3VYxryLc" title="Juniors" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div>
                            <h2 style={{width:"60%"}}>“I was really impressed by this block of four students who stuck together and built each other up.”</h2>
                            <p>~ Jason Zuffranieri, math teacher</p>
                        </div>
                    </div>
                </div>
                <button>LEARN FROM MORE OF OUR STUDENTS</button>
            </div>
            <div>
                
            </div>
            
            
        </div>
    )
}
export default Page1;