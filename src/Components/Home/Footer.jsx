import React from 'react'
import './Footer.css'
import logo from '../../Images/logo.png'

const Footer=()=>{
    return(
        <div className='footer'>
            <div className='foot1'>
                <div>
                    <img src={logo} alt="" />
                    <p>6400 Wyoming Blvd NEABQ, New Mexico 87109-3899</p>
                    <p>Phone:505-828-3200</p>
                </div>
                <div>
                    <a href=""><h2>About</h2></a>
                    <a href="">Admission</a>
                    <a href="">Academics</a>
                    <a href="">Athletics</a>
                    <a href="">Campus Life</a>
                    <a href="">Community</a>
                </div>
                <div>
                    <a href="">Apply</a>
                    <a href="">Visit</a>
                    <a href="">Get Info</a>
                    <a href="">Give</a>
                    <a href="">Contact Us</a>
                    <a href="">Employment</a>
                </div>
            </div>
            <div className="foot2">
                <h5>Albuquerque Academy is an independent, college-preparatory day school for students in grades 6 through 12 and does not discriminate on the basis of race, color, gender, gender identity, sexual orientation, creed, religion, national origin, ethnicity, or disability in admissions, the administration of its educational policies, tuition assistance, athletics, and other school-administered programs.</h5>
                <h3>{
                     new Date().getFullYear + "Albuquerque Academy | Website by EnvisionIT Solutions | Login | Privacy Policy"   
                    }
                </h3>    
            </div>

        </div>
    )
}
export default Footer;