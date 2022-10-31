import { useState } from "react";
import { ProjectExampleInfo } from "../../data";
import ProjectExample from "../ProjectExample/ProjectExample";
import "./Portfolio.scss";

const Portfolio = () => {
  const [buttonActive, setButtonActive] = useState<string>("All");
  const [projects, setProjects] = useState(ProjectExampleInfo);
  const filterBtns = ["All", "Commercial", "My Lab"];

  const selectFilter = (btn: string) => {
    const filteredProjects = ProjectExampleInfo.filter((project) => {
      switch (btn) {
        case "My Lab":
          return project.type === "personal";
        case "Commercial":
          return project.type === "commercial";
        default:
          return project;
      }
    });

    setButtonActive(btn);
    setProjects(filteredProjects);
  };

  return (
    <div className="portfolio">
      <div className="portfolio__filter">
        {filterBtns.map((btn: string, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => selectFilter(btn)}
              className={`filter-btn ${buttonActive === btn ? "active-filter-btn" : ""} `}
            >
              <div className="translate-btn"></div>
              <span>{btn}</span>
            </button>
          );
        })}
      </div>
      {projects.map((example, idx) => (
        <ProjectExample projectExample={example} index={idx} key={idx} />
      ))}
    </div>
  );
};

export default Portfolio;
