import { ProjectExampleInfo } from "../../data";
import ProjectExample from "../ProjectExample/ProjectExample";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* <div className="test">hello</div> */}
      {ProjectExampleInfo.map((example, idx) => (
        <ProjectExample projectExample={example} index={idx} key={idx} />
      ))}
    </div>
  );
};

export default Portfolio;
