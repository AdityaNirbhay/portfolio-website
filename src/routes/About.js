import React from 'react';
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Hey, What's Up"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
