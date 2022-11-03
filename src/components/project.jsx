import React, { useState } from "react";
import $ from 'jquery';
import {Link} from 'react-scroll';

function Project(){
    const[proj, newprojname]=useState("PROJECTS")
    function changeproj(){
        newprojname("HOME")
        document.getElementById("projcolor").style.color="red"
    }
    function rollbackproj(){
        newprojname("PROJECTS")
    }
    function addlifesaverimg(){
        document.getElementById("projpic").src="images/lifesaver.png"
    }
    function TinDog(){
        document.getElementById("projpic").src="images/tindog.png"
    }
    function todolist(){
        document.getElementById("projpic").src="images/todolist.png"
    }
    function MySite(){
        document.getElementById("projpic").src="images/mysite.png"
    }
    function TantraFiesta(){
        document.getElementById("projpic").src="images/tantra.png"
    }

    const[prev,after]=useState("")
    function enable(){
        document.getElementById("projshowcase").style.visibility="visible"
    }
    function disable(){
        document.getElementById("projshowcase").style.visibility="hidden"
    }
    $(window).scroll(function() {

        if ($(this).scrollTop()>50)
         {
            disable()
         }
        else
         {
            enable()
         }
     });
      
    return(
        <div className="projparent">
        <div className="projtitle">
        <hr className="row5"/>
        <Link to="background" spy={true} smooth={true} offset={40} duration={500}><h1 className="project" id="projcolor" onMouseOver={changeproj} onMouseOut={rollbackproj}>{proj}</h1></Link>
        <hr className="row6"/>
        </div>
        <div className="projectlinks" onMouseOut={disable} onMouseOver={enable} >
            <div className="projshowcase" id="projshowcase"><img id="projpic" className="projpic" height="500px" width="760px"></img></div>
            <p className="projlink1"  onMouseOver={addlifesaverimg} ><b><a href="https://www.youtube.com/watch?v=k0h1mX1tRPI&t=12s" target="_blank">LifeSaver</a></b></p>
            <hr className="row7"/>
            <p className="projlink2" onMouseOver={todolist}><b><a href="https://github.com/mangalamraj/todolist" target="_blank">Todolist</a></b></p>
            <hr className="row8"/>
            <p className="projlink3" onMouseOver={TantraFiesta}><b><a href="https://www.tantrafiesta.in/" target="_blank">TantraFiesta</a></b></p>
            <hr className="row9"/>
            <p className="projlink4" onMouseOver={TinDog}><b><a href="https://github.com/mangalamraj/TinDog" target="_blank">TinDog</a></b></p>
            <hr className="row10"/>
            <p className="projlink5" onMouseOver={MySite}><b>MySite</b></p>
        </div>
        <div className="projectpreview"></div>
        </div>

    )
}

export default Project