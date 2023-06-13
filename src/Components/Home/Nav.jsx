import React from 'react'
import './Nav.css'
// import logo from '../../Images/logo'
// import {TfiShine} from 'react-icons/tf'
import logo from '../../Images/logo.png'
import {TiWeatherShower} from 'react-icons/ti'
import {SlCalender} from 'react-icons/sl'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiParentLine} from 'react-icons/ri'
import {BsPersonLinesFill} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'
import {MdOutlineDeviceHub} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
const Nav=()=>{
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
                    <a href="">Apply</a>
                    <a href="">Visit</a>
                    <a href="">Get Info</a>
                    <a href="">Support</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
            <div className='nav-tab-bellow'>
                <a href="">About</a>
                <a href="">Admission</a>
                <a href="">Academics</a>
                <a href="">Athletics</a>
                <a href="">Campus Life</a>
                <a href="">Community</a>
                <a href="">Employment</a>
            </div>

        </div>
    )
}
export default Nav;