import { aboutMe } from "../../data";
import "./AboutMe.scss";

const AboutMe = () => {
  const techCircle = (tech: any) => (
    <div className="tech-circle">
      <div className="main">
        <div
          style={{ backgroundColor: tech.color, boxShadow: tech.shadow }}
          className="tech-circle__bg"
        ></div>
        <img src={tech.iconUrl} alt="tech-logo" />
      </div>
      <div className="tech-title">{tech.title}</div>
    </div>
  );

  return (
    <div className="about-me">
      <p className="text">
        {aboutMe.textBlocks.map((text) => (
          <div className="text-block">{text}</div>
        ))}
      </p>
      <h3>{aboutMe.techsTitle}</h3>
      <div className="about-me__techs">{aboutMe.techs.map((tech) => techCircle(tech))}</div>
    </div>
  );
};

export default AboutMe;
