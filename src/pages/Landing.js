import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LandingContainer } from "./styles";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import AboutUs from "components/AboutUs";
<<<<<<< HEAD
import Bootcamps from "components/Bootcamps";
=======
import Stories from "components/Stories";
>>>>>>> 1d6a7c921f3eed799a464074b9112b4584c62da7

const Landing = () => {
  return (
    <BrowserRouter>
      <LandingContainer>
        <Navbar />
        <Hero />
        <AboutUs />
<<<<<<< HEAD
        <Bootcamps />
=======
        <Stories />
>>>>>>> 1d6a7c921f3eed799a464074b9112b4584c62da7
      </LandingContainer>
    </BrowserRouter>
  );
};

export default Landing;
