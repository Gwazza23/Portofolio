import { useEffect, useState } from "react";
import "./NavBar.css";

import { easeIn, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function NavBar({ AboutIsInView, ProjectsIsInView }) {
  const [over, setOver] = useState();
  const [isMobile, setIsMobile] = useState();
  const [section, setSection] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (AboutIsInView) {
      setSection(1);
    } else if (ProjectsIsInView) {
      setSection(2);
    }
  }, [AboutIsInView, ProjectsIsInView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: easeIn }}
        style={{ backgroundColor: isMobile && AboutIsInView ? "#254E58" : "" }}
      >
        <div onClick={() => scrollToSection("top")} className="logo">
          <img src={"./images/Logo.png"} alt="logo" />
        </div>
        <ul className={`nav-links ${AboutIsInView ? "white" : ""}`}>
          <li
            className="link"
            onMouseOver={() => setOver(1)}
            onClick={() => scrollToSection("about")}
          >
            About
            {over === 1 || section === 1 ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
          <li
            className="link"
            onMouseOver={() => setOver(2)}
            onClick={() => scrollToSection("projects")}
          >
            Projects
            {over === 2 || section === 2 ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
          <li
            className="link"
            onMouseOver={() => setOver(3)}
            onClick={() => scrollToSection("contact")}
          >
            Contact
            {over === 3 ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        </ul>
      </motion.nav>
      <Outlet />
    </>
  );
}

export default NavBar;
