import "./Project.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function MusicNexusProject() {
  const [descOpen, setDescOpen] = useState(false);
  const [toolOpen, setToolOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [challOpen, setChallOpen] = useState(false);
  const [impOpen, setImpOpen] = useState(false);

  return (
    <div className="Modal-main-div">
      <div className="Modal-title-div">
        <h2>Music Nexus</h2>
        <p>Published - 08/23</p>
      </div>
      <div className="Modal-button-div">
        <FontAwesomeIcon
          className="close-button"
          role="button"
          onClick={() => {
            document.querySelector("#project-4").close();
          }}
          icon={faSquareXmark}
        />
      </div>
      <div className="Modal-thumbnail-div">
        <img
          src="/images/Music-nexus-thumbnail.png"
          alt="Music nexus Project thumbnail"
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
            The aim of this project is to make a spotify profile
            overview/analyzer by using the Spotify API, however the underlying
            goal of the project was to learning how to incorporate Oauth2.0 in
            order to access the API resources.
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
                <li>React Redux</li>
                <li>React router dom</li>
                <li>React player</li>
                <li>Chart.js</li>
                <li>React chart js 2</li>
                <li>Cypress</li>
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
                Home page displays profile overview, top tracks and top artists
              </li>
              <li>
                Artist page displays artist overview, top tracks, artist
                analysis
              </li>
              <li>
                Track page displays track overview, features and analysis{" "}
              </li>
              <li>
                Individual playlist page displays playlist overview, list of all
                tracks and analysis of the playlist
              </li>
              <li>
                Top artists page displays the top 20 artists for the user and
                can be sorted by a specified time length
              </li>
              <li>
                Top tracks page displays the top 20 tracks for the user and can
                be sorted by a specified time length. Also contains a suggested
                track section which recommends 3 tracks for the user
              </li>
              <li>
                Playlists page displays all playlist the user owns or is a part
                of/follows
              </li>
              <li>
                Recent page displays the 20 recent songs the user has listened
                to on spotify
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
            As with my other projects, I started off with basic sketches to get
            an idea of how I wanted my website to look, this time i decided to
            take inspiration from spotify itself with exception of using a dark
            background I wanted to use a light background to contrast the two
            websites.
            <br></br>
            <br></br>
            The coding section of the development was fairly simple (aside from
            the oauth implementation, further discussed below) as it involved
            basic html/javascript/css and react skills that I am proficient in
            by now
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
              The hardest/longest part of this project was setting up the oauth
              section of the website and deciding on how to store the tokens.
              When researching (stackoverflow, spotify community forums,YouTube
              videos) different ways to store the tokens securely I came to the
              conclusion that a backend would be required to store the
              refreshToken in a HTTPonly cookie however seeing as I wanted to
              created a pure front-end app and not having found any other way to
              store a refresh token on the front-end without exposing it to
              security attacks, I decided to not impliment an auto-refreshing
              function to the app instead opting to forcing the user to manually
              re authorize the web app.
            </p>
            <br />
            <p>
              In the future if I am to improve on this project or build another
              project using oauth I would include a backend in order to store
              the token in a more safe manner
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
              This project was very valuable in my journey as a web developer as
              Oauth implementation is a necessary skill to have in todays web
              landscape
            </p>
            <br />
            <p>
              It also helped me increase my knowledge about web security and
              counter measures that can be taken in order to prevent them.
            </p>
          </motion.div>
        </div>
        <div className="Links">
          <a
            className="Git"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gwazza23/musicnexus"
          >
            GitHub
          </a>
        </div>
        <div className="Links">
          <a
            className="Proj"
            target="_blank"
            rel="noreferrer"
            href="https://musicnexus.netlify.app/"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default MusicNexusProject;
