import React from 'react';
import ReactDOM from "react-dom";
import Background from "./components/background"
import About from "./components/about"
import Project from "./components/project"
import Contactme from "./components/contact"

ReactDOM.render(
    <div className='back'>
        <Background/>
        <About/>
        <Project/>
        <Contactme/>
    </div>,
    document.getElementById("root")
);