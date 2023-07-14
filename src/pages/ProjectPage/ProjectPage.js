import { useEffect, useRef } from "react";
import "./ProjectPage.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { projects } from "./ProjectLists";

function ProjectPage({ setProjectsIsInView }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const projectRef = useRef(null);
  const projectsIsInView = useInView(projectRef);
  const mainControls = useAnimation();

  const divVariant = {
    initial: {
      opacity: 0,
      y: 75,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.15,
      },
    },
  };

  useEffect(() => {
    if (projectsIsInView) {
      mainControls.start("visible");
    }
  }, [projectsIsInView, mainControls]);

  useEffect(() => {
    setProjectsIsInView(isInView);
  }, [isInView, setProjectsIsInView]);

  return (
    <div id="projects" className="projects-main-div">
      <div className="projects-title-div">
        <h2>Projects</h2>
      </div>
      <div className="projects-div">
        {projects.map((project) => {
          return (
            <>
              <motion.div
                key={project.id}
                variants={divVariant}
                initial="initial"
                animate={mainControls}
                className="project-div"
                onClick={() =>
                  document.querySelector(`#project-${project.id}`).showModal()
                }
              >
                <img src={project.thumnail_url} alt={project.name} />
                <motion.h3>{project.name}</motion.h3>
              </motion.div>
              <dialog id={`project-${project.id}`} className="modal">
                {project.modal}
              </dialog>
            </>
          );
        })}
        <motion.div
          variants={divVariant}
          initial="initial"
          animate={mainControls}
          className="project-div"
          style = {{ margin: 'auto', cursor:"default"}}
        >
          <h3>Coming Soon...</h3>
        </motion.div>
      </div>
      <div ref={projectRef} className="div-ref projects-ref-animation"></div>
      <div ref={ref} className="div-ref projects-ref"></div>
    </div>
  );
}

export default ProjectPage;
