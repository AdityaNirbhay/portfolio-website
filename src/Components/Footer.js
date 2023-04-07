import "./FooterStyles.css";
import React from 'react';
import {FaHome,FaPhone,FaMailBulk, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
           <div className="left">
               <div className="location">
                  <div>
                    <p><FaHome size={20} style={{color:"#fff",marginright: "2rem"}}/>  New Delhi, India</p>
                  </div>
               </div>
               <div className="phone">
                 <h4><FaPhone size={20} style={{color:"#fff",marginright: "2rem"}}/>
                      +91 8384093769</h4>
               </div>
               <div className="email">
                 <h4><FaMailBulk size={20} style={{color:"#fff",marginright: "2rem"}}/>
                     adityanirbhayinfo@gmail.com</h4>
               </div>
           </div>
           
           <div className="right">
               <h4>About Me</h4>
               <p>I am Aditya Nirbhay, currently pursuing BTech in Mathematics and Computing from Delhi Technological University</p>
               <div className="social">
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
               </div>
            </div>
       </div>
      
    </div>
  )
}

export default Footer
