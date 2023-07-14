import "./Project.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function RedditProject() {
  const [descOpen, setDescOpen] = useState(false);
  const [toolOpen, setToolOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [challOpen, setChallOpen] = useState(false);
  const [impOpen, setImpOpen] = useState(false);

  return (
    <div className="Modal-main-div">
      <div className="Modal-title-div">
        <h2>Reddit.min</h2>
        <p>Published - 04/23</p>
      </div>
      <div className="Modal-button-div">
        <FontAwesomeIcon
          className="close-button"
          role="button"
          onClick={() => {
            document.querySelector("#project-1").close();
          }}
          icon={faSquareXmark}
        />
      </div>
      <div className="Modal-thumbnail-div">
        <img
          src="/images/Reddit-min-thumbnail.png"
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
            Reddit.min is a simplified reddit clone that aims to recreate the
            core functionality of Reddit by utilising Reddit API. This project
            serves as my first front-end endeavor. The goal of this project was
            to build strong foundation in my react & GitHub skills.
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
                <li>HTML-react-parser</li>
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
                Home Page that shows 25 popular posts on reddit and 10 popular
                subreddits
              </li>
              <li>Render comments for each post</li>
              <li>Search bar feature allowing to search for subreddits</li>
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
            I started by making a rough sketch of the desired design for the
            website, I wanted to keep the design aspect of the app to a minimum
            as to fit with the core concept of the website but also to focus
            more on the functionality of the app. Throughout the development
            phase I used postman in order to test out endpoints to make sure I
            had an understanding of how the API worked and then proceeded to
            intergrate it into the app.
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
              Throughout this project I didn't come across any major problems,
              any minor problems that I came across I was able to solve by going
              through forums/docs/videos.
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
              This project served as suitable starting point to my web
              developing career
            </p>
            <br />
            <p>
              The reddit API was simple to integrate into the front-end which is
              perfect for a beginner project.
            </p>
            <br />
            <p>
              Skill wise this project was an excellent starting point for
              familirising with core react concepts such as redux and react
              router aswell as experience in using GitHub. The simplicity of the
              project also allowed me experiment with organizing file structure.
            </p>
          </motion.div>
        </div>
        <div className="Links">
          <a className="Git" target="_blank" rel="noreferrer" href="https://github.com/Gwazza23/Reddit-App">
            GitHub
          </a>
        </div>
        <div className="Links">
          <a className="Proj" target="_blank" rel="noreferrer" href="https://redditmin.netlify.app/">
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default RedditProject;
