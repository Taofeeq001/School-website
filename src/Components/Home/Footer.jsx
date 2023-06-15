import React, { useEffect, useState } from 'react'
import './Footer.css'
import logo from '../../Images/logo.png'
import {BsInstagram} from  'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {ImFacebook2} from 'react-icons/im'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer=()=>{
    const [year, setYear] = useState("")
    const date = new Date().getFullYear();
    useEffect(()=>{
        setYear(date)
    })



    return(
        <div className='footer'>
            <div className='foot1'>
                <div className='ft1'>
                    <img src={logo} alt="" />
                    <h4>6400 Wyoming Blvd NEABQ, <br /> New Mexico 8710<br/>9-3899 Phone:505-828-3200</h4>
                </div>
                <div className='ft2'>
                    <a href=""><h3>About</h3></a>
                    <a href=""><h3>Admission</h3></a>
                    <a href=""><h3>Academics</h3></a>
                    <a href=""><h3>Athletics</h3></a>
                    <a href=""><h3>Campus Life</h3></a>
                    <a href=""><h3>Community</h3></a>
                </div>
                <div className='ft3'>
                    <a href=""><h4>Apply</h4></a>
                    <a href=""><h3>Visit</h3></a>
                    <a href=""><h3>Get Info</h3></a>
                    <a href=""><h3>Give</h3></a>
                    <a href=""><h3>Contact Us</h3></a>
                    <a href=""><h3>Employment</h3></a>
                </div>
                <div className='follow'>
                    <a href=""><BsInstagram/></a>
                    <a href=""><AiFillTwitterSquare/></a>
                    <a href=""><ImFacebook2/></a>
                    <a href=""><AiOutlineYoutube/></a>
                    <a href=""><FaLinkedinIn/></a>
                </div>
            </div>
            <div className="foot2">
                <h5><em>Albuquerque Academy is an independent, college-preparatory day school for students in grades 6 through 12 and does not discriminate on the basis of race, color, gender, gender identity, sexual orientation, creed, religion, national origin, ethnicity, or disability in admissions, the administration of its educational policies, tuition assistance, athletics, and other school-administered programs.</em></h5>
                <h3>{year} Albuquerque Academy | Website by EnvisionIT Solutions | Login | Privacy Policy</h3>    
            </div>

        </div>
    )
}
export default Footer;