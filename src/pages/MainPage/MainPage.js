import React from "react";
import Hero from "../Hero/Hero";
import AboutPage from "../AboutPage/AboutPage";

function MainPage({ setAboutIsInView }) {
  return (
    <>
      <Hero />
      <AboutPage setAboutIsInView={setAboutIsInView} />
    </>
  );
}

export default MainPage;
