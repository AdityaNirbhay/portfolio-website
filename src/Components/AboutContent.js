import "./AboutContentstyles.css";
import React from 'react';
import {Link} from "react-router-dom";

import about1 from "../assets/AboutUs.jpg";

const AboutContent = () => {
  return (
    <div className="about">
     <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a Student, currently learning Web Development</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
     </div>

     <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={about1} className = "img" alt="true"/>
            </div>
        </div>
     </div>

      
    </div>
  )
}

export default AboutContent
