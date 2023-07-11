import React from "react";
import Hero from "../Hero/Hero";
import AboutPage from "../AboutPage/AboutPage";
import ProjectPage from "../ProjectPage/ProjectPage";

function MainPage({ setAboutIsInView, setProjectsIsInView }) {
  return (
    <>
      <Hero />
      <AboutPage setAboutIsInView={setAboutIsInView} />
      <ProjectPage setProjectsIsInView={setProjectsIsInView} />
    </>
  );
}

export default MainPage;
