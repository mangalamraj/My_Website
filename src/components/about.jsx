import React, { useState } from "react";
import {Link} from 'react-scroll';
function About(){
    const [about, newabout]=useState("ABOUT");
    function changeabout(){
        newabout("HOME")
    }
    function rollbackabout(){
        newabout("ABOUT")
    }

    
    function rollbackimage(){
        document.getElementById("mycoverimage").src="images/mycover.jpg"
    }

    return(
        <div className="mainAbout">
            <div className="aboutdesigndiv"></div>
            <div className="aboutdesigndiv2"></div>
            <div className="myimagediv"><img src="images/mycover.jpg" className="mycoverimage" id="mycoverimage" ></img></div>
            <div className="aboutconhead">
            <hr className="row3" noshade/>
            <Link to="background" spy={true} smooth={true} offset={40} duration={500}><h1 className="about" onMouseOver={changeabout} onMouseOut={rollbackabout}>{about}</h1></Link>
            <hr className="row4" noshade/>
            
            <div className="aboutcontent" >
            I am Mangalam Raj currently doing Btech from Indian Institute Of Information Technology, Nagpur. I am Full Stack Webdeveloper. I have used ReactJS to build this whole website. <br/><br/>Skills I know : HTML, CSS, Node, Express, JavaScript, ReactJS, MongoDB  
            </div>
            </div>
        </div>
    )
}

export default About
