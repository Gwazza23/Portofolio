import "./AboutPage.css";

import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function AboutPage({ setAboutIsInView }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const divVariant = {
    initial: {},
    hover: {},
  };

  const imgVariant = {
    initial: {},
    hover: { scale: 1.3 },
  };

  const pVariant = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  useEffect(() => {
    setAboutIsInView(isInView);
  }, [isInView, setAboutIsInView]);

  const icons = [
    ["./images/HTML.svg", "HTML icon", "HTML"],
    ["./images/CSS.svg", "CSS icon", "CSS"],
    ["./images/JavaScript.svg", "JavaScript icon", "JavaScript"],
    ["./images/JQuery.svg", "JQuery icon", "JQuery"],
    ["./images/React-Dark.svg", "React icon", "React"],
    ["./images/Redux.svg", "Redux icon", "Redux"],
    ["./images/Python-Dark.svg", "Python icon", "Python"],
    ["./images/GitHub-Dark.svg", "GitHub icon", "GitHub"],
    ["./images/Netlify-Dark.svg", "Netlify icon", "Netlify"],
    ["./images/NodeJs-Dark.svg", "NodeJs icon", "NodeJs"],
    ["./images/ExpressJs-Dark.svg", "ExpressJS icon", "ExpressJs"],
    ["./images/Supabase-Dark.svg", "Supabase icon", "Supabase"],
    ["./images/framer.png", "Framer icon", "Framer"],
  ];

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
          knowledge of this field even more.
        </p>
        <br></br>
        <p>
          Thank you for visiting my portofolio, and I look forward to working
          with you in the near future.
        </p>
        <div className="skill-section">
          {icons.map((logo) => {
            return (
              <motion.div
                variants={divVariant}
                initial="initial"
                whileHover="hover"
                className="logo-div"
              >
                {" "}
                <motion.img className="img" src={logo[0]} alt={logo[1]} variants={imgVariant} />
                <motion.p variants={pVariant}  >{logo[2]}</motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div ref={ref} className="div-ref about-ref"></div>
    </div>
  );
}

export default AboutPage;
