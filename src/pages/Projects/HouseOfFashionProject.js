import "./Project.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function HouseOfFashionProject() {
  const [descOpen, setDescOpen] = useState(false);
  const [toolOpen, setToolOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [challOpen, setChallOpen] = useState(false);
  const [impOpen, setImpOpen] = useState(false);

  return (
    <div className="Modal-main-div">
      <div className="Modal-title-div">
        <h2>House Of Fashion</h2>
        <p>Published - 07/23</p>
      </div>
      <div className="Modal-button-div">
        <FontAwesomeIcon
          className="close-button"
          role="button"
          onClick={() => {
            document.querySelector("#project-3").close();
          }}
          icon={faSquareXmark}
        />
      </div>
      <div className="Modal-thumbnail-div">
        <img
          src="/images/House-of-fashion-thumbnail.png"
          alt="House Of Fashion Project thumbnail"
        />
      </div>
      <div className="Modal-description-div">
        <div className="section">
          {descOpen ? (
            <FontAwesomeIcon
              onClick={() => setDescOpen(!descOpen)}
              className="button"
              icon={faAngleUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setDescOpen(!descOpen)}
              className="button"
              icon={faAngleDown}
            />
          )}
          <h3>Project Overview</h3>
          <motion.p
            initial={false}
            animate={{
              height: descOpen ? "auto" : 0,
              overflow: "hidden",
              padding: descOpen ? "1vh" : 0,
              border: descOpen ? "1px solid white" : 0,
              borderRadius: "5px",
            }}
          >
            This project is an online e-commerce website designed to mimic a
            fully functional online shopping platform. The goal in creating this
            project was to create a full stack application ( front-end,
            back-end, database ) and mesh each component in order to provide
            users with a complete online shopping experience.
          </motion.p>
        </div>
        <div className="section">
          {toolOpen ? (
            <FontAwesomeIcon
              onClick={() => setToolOpen(!toolOpen)}
              className="button"
              icon={faAngleUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setToolOpen(!toolOpen)}
              className="button"
              icon={faAngleDown}
            />
          )}
          <h3>Tools</h3>
          <motion.div
            initial={false}
            animate={{
              height: toolOpen ? "auto" : 0,
              overflow: "hidden",
              padding: toolOpen ? "1vh" : 0,
              border: toolOpen ? "1px solid white" : 0,
              borderRadius: "5px",
            }}
            className="tools"
          >
            <div>
              <p>Front-end: </p>
              <p>Hosted on : Netlify</p>
              <p>Framework : React </p>
              <p>Libraries:</p>
              <ul>
                <li>FontAwesome</li>
                <li>React Redux</li>
                <li>Axios</li>
                <li>Framer motion</li>
                <li>Js-cookie</li>
                <li>React router dom</li>
                <li>Cypress</li>
              </ul>
            </div>
            <br />
            <div>
              <p>Back-end: </p>
              <p>Hosted on : Render </p>
              <p>Built on NodeJs</p>
              <p>Framework : Express </p>
              <p>Libraries / Middleware :</p>
              <ul>
                <li>Bcrypt</li>
                <li>Cookie-parser</li>
                <li>Cors</li>
                <li>Dotenv</li>
                <li>Express-session</li>
                <li>Passport</li>
                <li>Passport-local</li>
                <li>Pg</li>
                <li>Nodemon</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="section">
          {featOpen ? (
            <FontAwesomeIcon
              onClick={() => setFeatOpen(!featOpen)}
              className="button"
              icon={faAngleUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setFeatOpen(!featOpen)}
              className="button"
              icon={faAngleDown}
            />
          )}
          <h3>Features</h3>
          <motion.div
            initial={false}
            animate={{
              height: featOpen ? "auto" : 0,
              overflow: "hidden",
              padding: featOpen ? "1vh" : 0,
              border: featOpen ? "1px solid white" : 0,
              borderRadius: "5px",
            }}
          >
            <ul>
              <li>
                Register Page - create user accounts and store in supabase
              </li>
              <li>
                Login Page - retrieve user from supabase and authenticated user
              </li>
              <li>Cart Page - users can add/remove items to/from the cart</li>
              <li>
                Profile Page - users can view user details + add more details
              </li>
            </ul>
            <p style={{ marginTop: "1vh" }}>
              Please visit the GitHub page (linked below) for more in-depth
              analysis of features
            </p>
          </motion.div>
        </div>
        <div className="section">
          {devOpen ? (
            <FontAwesomeIcon
              onClick={() => setDevOpen(!devOpen)}
              className="button"
              icon={faAngleUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setDevOpen(!devOpen)}
              className="button"
              icon={faAngleDown}
            />
          )}
          <h3>Development Process</h3>
          <motion.p
            initial={false}
            animate={{
              height: devOpen ? "auto" : 0,
              overflow: "hidden",
              padding: devOpen ? "1vh" : 0,
              border: devOpen ? "1px solid white" : 0,
              borderRadius: "5px",
            }}
          >
            I started by drawing a wireframe sketches in order to get a feel for
            the layout and functionality of the website, once I was happy with
            the overall design I moved onto the development phase. I divided the
            development phase into smaller tasks, my methodoloy was to build a
            backend route and database queries first and then the front-end
            components that would employ it. At the end of each backend +
            frontend component cycle I tested the whole unit using Cypress and
            postman.Once I felt the unit was secure and functional I deployed
            the code to GitHub/netlify/render.
          </motion.p>
        </div>
        <div className="section">
          {challOpen ? (
            <FontAwesomeIcon
              onClick={() => setChallOpen(!challOpen)}
              className="button"
              icon={faAngleUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setChallOpen(!challOpen)}
              className="button"
              icon={faAngleDown}
            />
          )}
          <h3>Challenges and solutions</h3>
          <motion.div
            initial={false}
            animate={{
              height: challOpen ? "auto" : 0,
              overflow: "hidden",
              padding: challOpen ? "1vh" : 0,
              border: challOpen ? "1px solid white" : 0,
              borderRadius: "5px",
            }}
          >
            <p>
              The main challenge that I came across during the making of this
              project was to do with cookies. I tried setting a user-id cookie
              from the backend but I couldn't get it to work, I spent hours
              trying to find the solution in websites such as stackoverflow and
              other similar forums, eventually I found that it is not possible
              to set cookies from a backend that is on a different domain to the
              front end so I opted to set the cookie on the front-end to
              circumvent this issue.
            </p>
            <p>
              Other minor challenges that I encountered were mostly to do with
              framer-motion but I was easily able to solve the issues after
              looking through the docs/videos.
            </p>
          </motion.div>
        </div>
        <div className="section">
          {impOpen ? (
            <FontAwesomeIcon
              onClick={() => setImpOpen(!impOpen)}
              className="button"
              icon={faAngleUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setImpOpen(!impOpen)}
              className="button"
              icon={faAngleDown}
            />
          )}
          <h3>Personal Growth</h3>
          <motion.div
            initial={false}
            animate={{
              height: impOpen ? "auto" : 0,
              overflow: "hidden",
              padding: impOpen ? "1vh" : 0,
              border: impOpen ? "1px solid white" : 0,
              borderRadius: "5px",
            }}
          >
            <p>
              This project provided me with the most growth so far in my web
              developer career.
            </p>
            <br />
            <p>
              This was the first time testing out my backend/database
              development skills and I think overall it was satisfactory with
              many positives that I can take away whilst also realising that
              there are areas that can be further improved for upcoming
              projects.
            </p>
            <br />
            <p>
              On the frontend side , I was pushing myself more than I had done
              in previous projects, striving to enhance user experience through
              niche quality-of-life features such as stock level displays and
              informative success/error messages for specific user interactions.
              I found myself advancing my frontend skills but also found a
              motivation to go that extra step further in each task.
            </p>
            <br />
            <p>
              Skill wise during this project I sensed a notable growth in my
              framer-motion skills whilst also soldifying my confidence in my
              overall react-app skills.
            </p>
          </motion.div>
        </div>
        <div className="Links">
          <a className="Git" target="_blank" rel="noreferrer" href="https://github.com/Gwazza23/HOF">
            GitHub - Frontend
          </a>
        </div>
        <div className="Links">
          <a className="Git" target="_blank" rel="noreferrer" href="https://github.com/Gwazza23/HOF-Backend">
            GitHub - Backend
          </a>
        </div>
        <div className="Links">
          <a className="Proj" target="_blank" rel="noreferrer" href="https://houseoffashion.netlify.app/">
            Project Link
          </a>
        </div>
        <div className="notice">
          <p>
            If you are opening this project for the first time, please allow 5 -
            10 seconds for the backend server to wake up and then refresh the
            page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HouseOfFashionProject;
