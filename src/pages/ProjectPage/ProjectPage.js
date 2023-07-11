import { useEffect, useRef } from "react";
import "./ProjectPage.css";
import { useInView } from "framer-motion";

function ProjectPage({ setProjectsIsInView }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setProjectsIsInView(isInView);
  }, [isInView, setProjectsIsInView]);

  return (
    <div id="projects" className="projects-main-div">
      <div className="projects-title-div">
        <h2>Projects</h2>
      </div>
      <div className="projects-div"></div>
      <div ref={ref} className="div-ref projects-ref"></div>
    </div>
  );
}

export default ProjectPage;
