import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LandingContainer } from "./styles";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import AboutUs from "components/AboutUs";

const Landing = () => {
  return (
    <BrowserRouter>
      <LandingContainer>
        <Navbar />
        <Hero />
        <AboutUs />
      </LandingContainer>
    </BrowserRouter>
  );
};

export default Landing;
