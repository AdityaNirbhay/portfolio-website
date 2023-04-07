import React from 'react'
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import Work from '../Components/Work';


const Projects = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS." text="Some of my projects which I am developing right now"/>
        <Work />
        <Footer />
    </div>
  )
}

export default Projects
