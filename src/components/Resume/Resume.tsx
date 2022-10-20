import { resume } from "../../data/data";
import "./Resume.scss";

const Resume = () => {
  const SubTitle = (subtitle: string) => {
    return <h3 className="resume__subtitle">{subtitle}</h3>;
  };

  const MiniBlock = (title: string, info: string) => {
    return (
      <div className="mini-block">
        <h4>{title}</h4>
        <span>{info}</span>
      </div>
    );
  };

  const ExperienceSingle = (experienceSingle: any) => {
    return (
      <div className="exp-single">
        <h4>{experienceSingle.title}</h4>
        <div className="gap">{experienceSingle.gap}</div>
        <div className="duties">
          {experienceSingle.duties.map((duty: string) => (
            <div className="duty">- {duty}</div>
          ))}
        </div>
        <div className="achievements">
          <h4>Achievements</h4>
          {experienceSingle.achievements.map((achievement: string) => (
            <div className="duty">- {achievement}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="resume">
      <div className="resume__skills">
        {SubTitle("Hard Skills")}
        <div className="skills">
          {resume.hardSkills.map((hardSkill) => MiniBlock(hardSkill.title, hardSkill.info))}
        </div>
        <div className="skills">
          {SubTitle("Soft Skills")}
          <div className="soft">
            {resume.softSkills.map((softSkill) => (
              <span>{softSkill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="resume__exp">
        {SubTitle("Experience")}
        <div className="exp-content">
          {resume.experience.map((exp) => {
            return ExperienceSingle(exp);
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
