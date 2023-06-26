import React, { useState } from 'react'
import './Nav.css'
import logo from '../../Images/logo.png'
import {TiWeatherShower} from 'react-icons/ti'
import {SlCalender} from 'react-icons/sl'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiParentLine} from 'react-icons/ri'
import {BsPersonLinesFill} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'
import {MdOutlineDeviceHub} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCar} from 'react-icons/ai'
import {BsChatQuote} from 'react-icons/bs'
import {GiSelfLove} from 'react-icons/gi'
import {FaRegHandshake} from 'react-icons/fa'
import {GoPencil} from 'react-icons/go'
import harmb from '../../Images/hamb.jpg'

const Nav=()=>{
    const [toggle, setToggle] = useState(false);
    const handleClick=()=>{
        setToggle(!toggle)
    }
    return(
        <div className='nav'>
            <div className='top'>
                <a href=""><TiWeatherShower/>Summer</a>
                <a href=""><SlCalender/> Calender</a>
                <a href=""><BsFillPersonFill/>Students</a>
                <a href=""><RiParentLine/>Parents</a>
                <a href=""><BsPersonLinesFill/>Faculty/Staffs</a>
                <a href=""><FaUserGraduate/>Alumni</a>
                <a href=""><MdOutlineDeviceHub/>ChargerHub</a>
                <a href=""><AiOutlineSearch/></a>
            </div>
            <div className='nav-tab'>
                <img src={logo} alt="" />
                <div className='tabs'>
                    <a href="/apply"><h3>Apply</h3></a>
                    <a href=""><h3>Visit</h3></a>
                    <a href=""><h3>Get Info</h3></a>
                    <a href="/support"><h3>Support</h3></a>
                    <a href=""><h3>Contact Us</h3></a>
                    {/* <a href=""><AiOutlineSearch/></a> */}
                </div>
                <button onClick={handleClick}>{toggle?<img src={harmb} alt="" />:<img src={harmb} alt="" />}</button>
            </div>
            <div className='nav-tab-bellow'>
                <a href="/about">About</a>
                <a href="">Admission</a>
                <a href="">Academics</a>
                <a href="">Athletics</a>
                <a href="">Campus Life</a>
                <a href="">Community</a>
                <a href="">Employment</a>
            </div>
            <div className={`${toggle? "mobile-nav display":"mobile-nav"}`}>  
                <a href=""><TiWeatherShower/>Summer</a>
                <a href=""><SlCalender/> Calender</a>
                <a href=""><BsFillPersonFill/>Students</a>
                <a href=""><RiParentLine/>Parents</a>
                <a href=""><BsPersonLinesFill/>Faculty/Staffs</a>
                <a href=""><FaUserGraduate/>Alumni</a>
                <a href=""><MdOutlineDeviceHub/>ChargerHub</a>
                <a href=""><AiOutlineCar/>Visit</a>
                <a href=""><BsChatQuote/>Community</a>
                <a href=""><GiSelfLove/>support</a>
                <a href=""><FaRegHandshake/>Meet head of school Juliana</a>
                <a href=""><GoPencil/>Start your Applicaton</a>
                <a href=""><AiOutlineSearch/> Search</a>
            </div>

        </div>
    )
}
export default Nav;