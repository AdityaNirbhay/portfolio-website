import React from 'react';
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="My contact details are in footer, do check there."/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
