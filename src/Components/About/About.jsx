import react from 'react'
import Nav from '../Home/Nav'
import AbtPage from './AbtPage';
import Mission from './Mission';
import Footer from '../Home/Footer';

const About=()=>{
    return(
        <div>
            <Nav/>
            <AbtPage/>
            <Mission/>
            <Footer/>
        </div>
    )
}
export default About;