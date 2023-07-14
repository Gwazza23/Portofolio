import React from "react";
import Hero from "../Hero/Hero";
import AboutPage from "../AboutPage/AboutPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";

function MainPage({ setAboutIsInView, setProjectsIsInView, setContactIsInView }) {
  return (
    <>
      <Hero />
      <AboutPage setAboutIsInView={setAboutIsInView} />
      <ProjectPage setProjectsIsInView={setProjectsIsInView} />
      <ContactPage setContactIsInView={setContactIsInView} />
    </>
  );
}

export default MainPage;
