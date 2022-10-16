import "./ProjectExample.scss";

const ProjectExample = ({ projectExample, index }: any) => {
  return (
    <div className={`project-example ${index % 2 === 0 ? "project-example--reversed" : ""}`}>
      <div className="project-example__image">
        <img src={projectExample.imageUrl} alt="project-example-img" />
      </div>
      <div className="project-example__info">
        <div className="title">{projectExample.title}</div>
        <div className="about">{projectExample.description}</div>
        <div className="links">
          <a href={projectExample.githubUrl} className="link" rel="noreferrer" target="_blank">
            <img src="./img/icons/github-white.svg" alt="github-logo" />
          </a>
          <a href={projectExample.mainUrl} className="link" rel="noreferrer" target="_blank">
            <img src="./img/icons/link.svg" alt="link-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectExample;
