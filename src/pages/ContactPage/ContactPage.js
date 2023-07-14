import "./ContactPage.css";

import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactPage({ setContactIsInView }) {
  const ref = useRef(null);
  const animationStart = useRef(null);
  const isInView = useInView(ref);
  const animationIsInView = useInView(animationStart);
  const mainControls = useAnimation();

  const divVariant = {
    initial: {
      left: 0,
    },
    visible: {
      left: "120%",
    },
  };

  useEffect(() => {
    if (animationIsInView) {
      mainControls.start("visible");
    }
  }, [animationIsInView, mainControls]);

  useEffect(() => {
    setContactIsInView(isInView);
  }, [isInView, setContactIsInView]);

  return (
    <div id="contact" className="contact-main-div">
      <div className="contact-wrapper-div">
        <div className="contact-title-div">
          <h2>Contact</h2>
        </div>
        <div className="contact-div">
          <p>Gayan Weerawarnakula</p>
          <p style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
            full-stack web developer
          </p>
          <div className="contact-info">
            <FontAwesomeIcon
              className="contact-icon"
              style={{ color: "#3aafa9" }}
              icon={faEnvelope}
            />
            <p>: gayanweerawarnakula@gmail.com</p>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon
              className="contact-icon"
              style={{ color: "#3aafa9" }}
              icon={faPhone}
            />
            <p>: 07956108424</p>
          </div>
          <div className="web-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/gayan-weerawarnakula-2ba702283/"
            >
              <img
                role="button"
                src="/images/Li-In-Bug.png"
                alt="Linkedin logo"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Gwazza23"
            >
              {" "}
              <img
                role="button"
                src="/images/github-mark.png"
                alt="GitHub logo"
              />
            </a>
          </div>
        </div>
        <motion.div
          variants={divVariant}
          initial="initial"
          animate={mainControls}
          transition={{ duration: 0.45, ease: "easeIn", delay: 0.4 }}
          className="contact-animation-div"
        ></motion.div>
      </div>
      <div ref={animationStart} className="div-ref animation-start"></div>
      <div ref={ref} className="div-ref contact-ref"></div>
    </div>
  );
}

export default ContactPage;
