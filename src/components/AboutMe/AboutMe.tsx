import { aboutMe, techs } from "../../data";
import TechCircle from "../TechCircle/TechCircle";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <p className="text">
        {aboutMe.textBlocks.map((text, idx) => (
          <span key={idx} className="text-block">
            {text}
          </span>
        ))}
      </p>
      <h3>{aboutMe.techsTitle}</h3>
      <div className="about-me__techs">
        {techs.map((tech, idx) => (
          <TechCircle tech={tech} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
