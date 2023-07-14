import "./Project.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function CineVerseProject() {
  const [descOpen, setDescOpen] = useState(false);
  const [toolOpen, setToolOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [challOpen, setChallOpen] = useState(false);
  const [impOpen, setImpOpen] = useState(false);

  return (
    <div className="Modal-main-div">
      <div className="Modal-title-div">
        <h2>CineVerse</h2>
        <p>Published - 06/23</p>
      </div>
      <div className="Modal-button-div">
        <FontAwesomeIcon
          className="close-button"
          role="button"
          onClick={() => {
            document.querySelector("#project-2").close();
          }}
          icon={faSquareXmark}
        />
      </div>
      <div className="Modal-thumbnail-div">
        <img
          src="/images/Cineverse-thumbnail.png"
          alt="Reddit Project thumbnail"
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
            The aim of this project is to make a movie database website powered
            by TMDB API, that allows users to explore and discover movies. The
            personal goal of this project is to further reinforce the front-end
            react skills from the previous project.
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
                <li>Axios</li>
                <li>Dotenv</li>
                <li>Framer motion</li>
                <li>React Redux</li>
                <li>React router dom</li>
                <li>React player</li>
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
                Home page displays popular films, genres and movies currently
                playing in cinemas
              </li>
              <li>Users can browse by different genres</li>
              <li>Users can browse by different categories</li>
              <li>
                Each movie page contains variety of information pertaining to
                the selected movie
              </li>
              <li>Each movie page contains reviews left by users of TMDB.</li>
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
            Prior to development I learned the basics of Framer motion as it was
            a library I was keen on implementing into my projects moving
            forward. The project started with wireframe to get an idea of the
            design, but this time bit more detail was added regarding hover
            states of different components. During the development phase I again
            employed the use of postman in order to test out various endpoints
            and then intergrating them into the app. Once I was happy that the
            core funcitonality of a component was working as I expected I moved
            onto adding animations in order to provide a seamless user
            experience.
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
              Throughout this project, most of the problems I encountered were
              to do with Framer motion, this was expected as this was my first
              time working with the library. The solution to the problems were
              mainly YouTube videos.Another problem was the API used was limited
              so a lot of time was spent trying to come up with (sometimes
              intricate) workarounds to these limitations which I feel could
              have been better handled by the API.
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
            <p>This project proved as good step up from my previous project.</p>
            <br />
            <p>
              TMDB API was not an easy API to work with but due to it's
              limitations I had to create workaround which helped me grow my
              JavaScript skills.
            </p>
            <br />
            <p>
              Skill wise this project was used to solidify my react skills but
              moreso to serve as starting point in using framer motion.
            </p>
          </motion.div>
        </div>
        <div className="Links">
          <a
            className="Git"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gwazza23/CineVerse"
          >
            GitHub
          </a>
        </div>
        <div className="Links">
          <a
            className="Proj"
            target="_blank"
            rel="noreferrer"
            href="https://cverse.netlify.app/"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default CineVerseProject;
