import React from "react";
import Page1 from "./Page1";
import Nav from "./Nav";
import Scroll from "./Scroll";


const Home=()=>{
    return(
        <div>
            <Nav/>
            {/* <Scroll/> */}
            <Page1/>
        </div>
    )
}
export default Home;