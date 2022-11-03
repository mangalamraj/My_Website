import React,{useRef,useState} from "react";
import emailjs from '@emailjs/browser';
import { error } from "jquery";
import {Link} from 'react-scroll';

function Contactme(){
    const[contact, newcontname]=useState("CONTACT")
    function changeproj(){
        newcontname("HOME")
        document.getElementById("projcolor").style.color="red"
    }
    function rollbackcont(){
        newcontname("CONTACT")
    }
    const form = useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
    emailjs.sendForm('service_m4lv0is','template_sy5szgh',form.current,'0dMViki8K4CNQW87_')
        .then((result)=>{
            console.log(result.text);
        },
        (error)=>{
            console.log(error.text);
        });
        e.target.reset()
    };
    
    return(
        <div className="contact">

        


        <div className="instadiv"><a href="https://www.instagram.com/mango.raj/" target="_blank"><img src="/images/newinsta.png" className="insta"></img></a></div>
        <div className="linkediv"><a href="https://www.linkedin.com/in/mangalam-raj-7b03b0241" target="_blank"><img src="/images/newlinked.png" className="linkedin"></img></a></div>
        <div className="facebookdiv"><a href="https://www.facebook.com/mangalam.raj" target="_blank"><img src="/images/newfb.png" className="facebook"></img></a></div>
        <div className="formBackground">
        <hr className="contactrow1"/>
        <hr className="contactrow2"/>
        <Link to="background" spy={true} smooth={true} offset={40} duration={500}><h1 className="contactme" onMouseOver={changeproj} onMouseOut={rollbackcont}>{contact}</h1></Link>
        <form  className="form" onSubmit={sendEmail} ref={form}>
            <input type="text" placeholder="  Name " name="name" ></input>
            <br/>
            <input type="email" id="email" placeholder="  Email  " name="email" ></input>
            <br/>
            <textarea placeholder="Your Message . . ." name="message" ></textarea>
            <br/>
            <button type="submit" className="btn" ><h3><b>SUBMIT</b></h3></button>

        </form>
        </div>
        
            

            
      
        <div className="goback"><h1>GO</h1></div>
        <p className="copyright">Copyright &copy; 2022 MANGALAM RAJ All Rights Reserved</p>
        </div>

    );
}
export default Contactme;