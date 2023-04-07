import "./HeroImgstyles.css";
import React from 'react'
import IntroImg from "../assets/heroImg.jpg";
import {Link} from "react-router-dom"; 

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg" />
       </div>
       <div className="content">
           <p>HI, I AM ADITYA.</p>
           <h1>Web Developer.</h1>
           <div>
              <Link to="/projects" className="btn">Projects</Link>
              <Link to="/contact" className="btn-light">Contact</Link>
           </div>

       </div>
    </div>
  )
}

export default HeroImg
