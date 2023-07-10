import { useState } from "react";
import "./NavBar.css";

import { easeIn, motion } from "framer-motion";
import { Outlet, NavLink, Link } from "react-router-dom";

function NavBar() {
  const [over, setOver] = useState();

  console.log(over);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: easeIn }}
      >
        <div className="logo">
          <Link to={"/"}>
            <img src={"./images/Logo.png"} alt="logo" />{" "}
          </Link>
        </div>
        <ul className="nav-links">
          <NavLink className={"link"} to={"/about"}>
            <li onMouseOver={() => setOver(1)}>
              About
              {over === 1 ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          </NavLink>
          <NavLink className={"link"} to={"/projects"}>
            <li onMouseOver={() => setOver(2)}>
              Projects
              {over === 2 ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          </NavLink>
          <NavLink className={"link"} to={"/contact"}>
            <li onMouseOver={() => setOver(3)}>
              Contact
              {over === 3 ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          </NavLink>
        </ul>
      </motion.nav>
      <Outlet />
    </>
  );
}

export default NavBar;
