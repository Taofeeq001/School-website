import React from "react";
import school from "../../Images/school.webm"
import staff from '../../Images/recent-videos.jpg'
import './Page1.css'
import data from "./Prep";
import Scroll from "./Scroll";

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
                            <h2 className="jason" style={{width:"60%"}}>“I was really impressed by this block of four students who stuck together and built each other up.”</h2>
                            <p>~ Jason Zuffranieri, math teacher</p>
                        </div>
                    </div>
                </div>
                <button><a style={{color:'white', fontWeight:600}} href="">LEARN FROM MORE OF OUR STUDENTS</a></button>
            </div>
            
            {/* ============= ACADEMIC EXPERIENCE, TRADITIONAL EXCELLENCE AND OTHER================ */}
            
            <div className="experience">
                <div className="experience1">
                    <div className="img1">
                        <h1>The Academy Experience</h1>
                        <p>For more than 60 years, we have offered an education that broadens perspectives, sharpens minds, strengthens bodies, and engages hearts.</p>
                        <div>
                            <button><a style={{color:'grey', fontWeight:600, fontSize:"15px"}} href="">READ MORE</a></button>
                        </div>
                    </div>
                    <div className="img2">
                        <h1>A Tradition of Excellence</h1>
                        <p>Academy has a long, proud tradition of scholarly, artistic, and athletic excellence and is considered one of the nation’s top independent schools.</p>
                        <div>
                            <button><a style={{color:'grey', fontWeight:600, fontSize:"15px"}} href="">READ MORE</a></button>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="experience1">
                    <div className="img3">
                        <h1>The Academy Experience</h1>
                        <p>For more than 60 years, we have offered an education that broadens perspectives, sharpens minds, strengthens bodies, and engages hearts.</p>
                        <div>
                            <button><a style={{color:'grey', fontWeight:600, fontSize:"15px"}} href="">READ MORE</a></button>
                        </div>
                    </div>
                    <div className="img4">
                        <h1>A Tradition of Excellence</h1>
                        <p>Academy has a long, proud tradition of scholarly, artistic, and athletic excellence and is considered one of the nation’s top independent schools.</p>
                        <div>
                            <button><a style={{color:'grey', fontWeight:600, fontSize:"15px"}} href="">READ MORE</a></button>
                        </div>
                    </div>
                    <div className="img4">
                        <h1>A Tradition of Excellence</h1>
                        <p>Academy has a long, proud tradition of scholarly, artistic, and athletic excellence and is considered one of the nation’s top independent schools.</p>
                        <div>
                            <button><a style={{color:'grey', fontWeight:600, fontSize:"15px"}} href="">READ MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-news">
                <div className="news-content">
                    <h1>Latest News</h1>
                    <a style={{lineHeight:'2rem'}} href="">
                        <h2 style={{color:'red'}}>Academy Wins NMAA Director's Cup for Fifth Straight year</h2>
                        <p style={{color:'black'}}>Alburquerque Academy has been awarded the New Mexico Activities</p>
                    </a>
                    <a style={{lineHeight:'2rem'}} href="">
                        <h2 style={{color:'red'}}>Academy Wins NMAA Director's Cup for Fifth Straight year</h2>
                        <p style={{color:'black'}}>Alburquerque Academy has been awarded the New Mexico Activities</p>
                    </a>
                    <a style={{lineHeight:'2rem'}} href="">
                        <h2 style={{color:'red'}}>Academy Wins NMAA Director's Cup for Fifth Straight year</h2>
                        <p style={{color:'black'}}>Alburquerque Academy has been awarded the New Mexico Activities</p>
                    </a>
                </div>
                <div className="ddd">
                    <div className="news-image">
                        <img src={staff} alt="" />
                    </div>
                    <p style={{fontSize:20, width:'70%', marginTop:'20'}}>Made possible by a gift from the Reidy family, Common Grounds opened in January 2020.</p>
                </div>

            </div>
            <div className="academy-progress">
                <h1>Academy Prepares</h1>
                <p>How are we preparing your student for college and life?</p>
                <div className="map" style={{display:'flex', gap:'20', width:'60%', marginTop:'30px'}}>
                    {
                        data.map((data)=>(
                            <div className="mapper" style={{display:'flex', flexDirection:"column",alignItems:'center', width:'100%'}}>
                                <img src={data.img} alt="" />
                                <h3 style={{color:'red'}}>{data.heading}</h3>
                                <p style={{width:'90%', textAlign:'center'}}>{data.paragraph}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems: 'center'}}>
                    <h1 style={{width:'80%', textAlign:'center'}}>The Albuquerque Academy Class of 2022 will attend 85 colleges in 36 states, the District of Columbia, and British Columbia.</h1>
                    <p style={{fontSize:'29px'}}> <span><a href="">Click here</a></span> to see the full list</p>
                </div>
            </div>
            <div style={{marginTop:"20px"}}>
                <Scroll/>
            </div>
            <div className="acad-comm">
                <h1>The Academy Community</h1>
                <p>Share your Academy pride with the world!</p>
                <div>
                    <a href="">In</a>
                    <a href="">Tw</a>
                    <a href="">fb</a>
                    <a href="">yt</a>
                </div>
                <p>See our full social stream here!</p>
            </div>

        </div>
    )
}
export default Page1;