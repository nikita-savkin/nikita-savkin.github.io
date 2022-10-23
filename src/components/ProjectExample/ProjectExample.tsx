import { useState, useEffect } from "react";
import { techs } from "../../data";
import "./ProjectExample.scss";
import TechCircle from "../TechCircle/TechCircle";

const ProjectExample = ({ projectExample, index }: any) => {
  const [currentTechs, setCurrentTechs] = useState<any[]>([]);

  useEffect(() => {
    if (projectExample?.techs) {
      const projectTechs = techs.filter((tech) => projectExample?.techs.includes(tech.title));
      setCurrentTechs(projectTechs);
    }
  }, []);

  return (
    <div className={`project-example ${index % 2 !== 0 ? "project-example--reversed" : ""}`}>
      <div className="project-example__image">
        <img src={projectExample.imageUrl} alt="project-example-img" />
      </div>
      <div className="project-example__info">
        <div className="title">{projectExample.title}</div>
        <div className="about">{projectExample.description}</div>
        <div className="techs">
          {currentTechs.map((tech) => (
            <TechCircle tech={tech} smallType={true} key={tech.title} />
          ))}
        </div>
        <div className="links">
          <a href={projectExample.mainUrl} className="link-btn" rel="noreferrer" target="_blank">
            <img src="./img/icons/eye.svg" alt="link-logo" />
            <span className="">Link</span>
          </a>
          <a href={projectExample.githubUrl} className="link-btn" rel="noreferrer" target="_blank">
            <img src="./img/icons/github-white.svg" alt="github-logo" />
            <span className="">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectExample;
