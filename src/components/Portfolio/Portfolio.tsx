import { ProjectExampleInfo } from "../../data/data";
import ProjectExample from "../ProjectExample/ProjectExample";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {ProjectExampleInfo.map((example, idx) => (
        <ProjectExample projectExample={example} index={idx} key={idx} />
      ))}
    </div>
  );
};

export default Portfolio;
