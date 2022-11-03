import React, { useState } from "react";
import {Link} from 'react-scroll'


function Background(){


    const[name, setname]=useState("<MANGO>");
    function changename(){
        setname("<ABOUT>")
        document.getElementById("change").style.color="red";
        
    }
    function rollback(){
        setname("<MANGO>")
        document.getElementById("change").style.color="red";
        
    }


    const[text, setProj]=useState("THIS IS");
    function changetext(){
        setProj("PROJECTS")
        
    }
    function rollbacktext(){
        setProj("THIS IS")
       
    }

    const[spidey, setspidey]=useState("WEBDEVELOPER");
    function changespidey(){
        setspidey("CONTACT-ME")
        document.getElementById("changespidey").style.color="red";
    }
    function rollbackspidey(){
        setspidey("WEBDEVELOPER")
        document.getElementById("changespidey").style.color="white";
    }

    
    return(
      <div id="background">
       <div className="back">
            <img src="images/spider.jpeg" className="spider"></img>
       </div>
       <div className="divContent">
        <div className="backgroundman"><h1>MAN</h1></div>



        <h2 className="text"><Link to="project" spy={true} smooth={true} offset={-100} duration={500} ><p id="mango" onMouseOver={changetext} onMouseOut={rollbacktext}>{text}</p> </Link><Link to="about" spy={true} smooth={true} offset={-100} duration={500} ><p className="redmango" id="change" onMouseOver={changename} onMouseOut={rollback}>{name}</p></Link></h2>

        <hr className="row2" noshade/>
        <hr className="row1" noshade/>
        <Link to="contact" spy={true} smooth={true} offset={40} duration={500} ><h2 id="changespidey" onMouseOver={changespidey} onMouseOut={rollbackspidey}>{spidey}</h2></Link>
       </div>
       </div> 
    )

}
export default Background;