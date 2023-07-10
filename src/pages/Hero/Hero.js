import "./Hero.css";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-main-div">
      <div className="hero-div">
        
        <div className="hero-text-div">
          <p>Hello!</p>
          <p>
            My name is <span>Gayan</span> , an aspiring{" "}
            <span>web developer</span> based in Manchester<span>.</span>
          </p>
        </div>
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: "120%" }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
          className="hero-animation-div"
        ></motion.div>
      </div>
    </div>
  );
}

export default Hero;
