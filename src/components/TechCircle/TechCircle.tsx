import "./TechCircle.scss";

const TechCircle = ({ tech, smallType = false }: { tech: any; smallType?: boolean }) => {
  return (
    <div className={`tech-circle ${smallType ? "tech-circle--small" : ""}`}>
      <div className="main">
        <div
          style={{ backgroundColor: tech.color, boxShadow: tech.shadow }}
          className="tech-circle__bg"
        ></div>
        <img src={tech.iconUrl} alt="tech-logo" />
      </div>
      {!smallType && <div className="tech-title">{tech.title}</div>}
    </div>
  );
};

export default TechCircle;
