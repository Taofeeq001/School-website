import './Spage.css'

import React from 'react';
import Slider from 'react-slick';
import gift from '../../Images/gift.gif'
import book from '../../Images/book.gif'
import glass from '../../Images/glass.gif'
import aud from '../../Images/Aud.gif'
import art from '../../Images/art.gif'
import first from '../../Images/Screenshot (14).png'
import sec  from '../../Images/Screenshot (15).png'
import second from '../../Images/art.gif'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Supportpage=()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
   <div>
    <div className='spage-img'>
                <h1>SUPPORT THE ACADEMY</h1>
      </div>
      <div className="one">
        <div className="two">
            <h3>A Message from the Advancement Team</h3>
            <p>Whether you measure your days as a Charger in months, years, or decades, we are grateful for the role you play in our community and the ways you add to the unique character of our school.
</p>
<p>
Albuquerque Academy was built on philanthropy. The Simms family and the future they envisioned are responsible for the community we enjoy today. When Albert and Ruth Hanna McCormick Simms bestowed their transformative gifts on this community, they did so knowing its fate and future would rest with the generations that followed. They knew we were coming and that it would be our responsibility to continue to join hands, hearts, and minds to continue the legacy laid out before us.
</p>
<p>
Especially in times of uncertainty and when there are big challenges to face, philanthropy and advocacy play essential roles in seeing our community through those times. Our collective participation in annual giving not only provides financial stability to weather financial setbacks, but signals our unity and commitment to the Academy community.
</p>
<p>Though it has certainly presented a variety of challenges, the pandemic has highlighted one of our strengths as a community and has illuminated our ability to adapt while continuing to deliver the Academy mission in new and meaningful ways.
</p>
<p>We are continually grateful for the variety of ways the Academy receives support each year. Whether you give your time as a volunteer, act as an advocate in the community, or make financial contributions to our programs, your commitments sustain us, and preserve the extraordinary learning environments that allow our students to thrive, no matter the format.
</p>
<p>Thank you, and go Chargers!</p>
        </div>
        <div className="three">
            <div className="for">
                <h4>Related links</h4>
                <h4 className='port'>Support the Academy</h4>
            </div>
           
            
          <ul className='hel'>
            <li><a href="/">Give online</a></li>
            <li><a href="/">Ways to Give </a></li>
            <li><a href="/">Support Academy Business</a></li>
            <li><a href="/">Event And Volunteers</a></li>
            <li><a href="/">Giving Tuesday</a></li>
            <li><a href="/"> Spring Day Of Giving</a></li>
            <li><a href="/">Impart Report</a></li>
            <li><a href="/">Our Team</a></li>
            
          </ul>
          <Slider {...settings} >
      <div className='aud'>
        <img src={gift} alt="Image 1" />
      </div>
      <div className='aud'>
        <img src={book} alt="Image 2" />
      </div>
      <div className='aud'>
        <img src={glass} alt="Image 3" />
      </div>
      <div className='aud'>
        <img src={aud} alt="Image 4" />
      </div>
      <div className='aud'>
        <img src={art} alt="Image 5" />
      </div>
    </Slider>
        </div>
      
      </div>
      <div className="supportimg">
        <div className="first">
         <img src={first} alt="" />  
        </div>
        <div className="second">
        <img src={sec} alt="" />  

        </div>
        <div className="third">

        </div>
      </div>
   </div>
   
   
    )
}
export default Supportpage;