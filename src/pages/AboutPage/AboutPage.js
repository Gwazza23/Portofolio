import "./AboutPage.css";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function AboutPage({ setAboutIsInView }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setAboutIsInView(isInView);
  }, [isInView, setAboutIsInView]);

  return (
    <div id="about" className="about-main-div">
      <div className="about-title-div">
        <h2>About Me</h2>
      </div>
      <div className="about-div">
        <p>
          My name is Gayan Weerawarnakula, an aspiring web developer from
          Manchester.
        </p>
        <br></br>
        <p>
          During my last year of university I worked on a module that involved
          coding using python/matplotlib and fell in love with aspect of solving
          complex problems and the rewarding feeling of overcoming these
          challenges captivated me. This experience motivated me to take a leap
          of faith and pursue a career as a full-stack developer.
        </p>
        <br></br>
        <p>
          Over the course of a year I learned the core concepts of front-end
          development ,back-end development and database management. I've gained
          valuable experience in various programming languages such as HTML/CSS,
          JavaScript, Express and more. With a driven mindeset I am keen on
          staying up to date with the latest industry trends and exanding my
          knowledge of this industry even more.
        </p>
        <br></br>
        <p>
          Thank you for visiting my portofolio, and I look forward to working
          with you in the near future.
        </p>
      </div>
      <div ref={ref} className="div-ref"></div>
    </div>
  );
}

export default AboutPage;
