import ProjectExample from "../ProjectExample/ProjectExample";
import "./InfoMenu.scss";

const InfoMenu = () => {
  const ProjectExampleData = [
    {
      title: "Launcher Inc",
      imageUrl: "./img/portfolio/launcher-inc.jpg",
      description:
        "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
      tools: "HTML CSS",
      githubUrl: "someurl",
      mainUrl: "url",
    },
    {
      title: "GYM Sports",
      imageUrl: "./img/portfolio/gymsports.jpg",
      description:
        "In this project, I created a convenient website for a fitness club, where you can find out all the information about training, schedule and payment terms.",
      tools: "HTML CSS",
      githubUrl: "someurl",
      mainUrl: "url",
    },
    {
      title: "Launcher Inc",
      imageUrl: "./img/portfolio/launcher-inc.jpg",
      description:
        "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
      tools: "HTML CSS",
      githubUrl: "someurl",
      mainUrl: "url",
    },
    // {
    //   title: "Launcher Inc",
    //   imageUrl: "./img/portfolio/launcher-inc.jpg",
    //   description:
    //     "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    //   tools: "HTML CSS",
    //   githubUrl: "someurl",
    //   mainUrl: "url",
    // },
  ];

  return (
    <div className="info-menu">
      <div className="info-menu__header">
        <div className="title">My Works</div>
        <div className="close">
          <img src="./img/icons/close.svg" alt="close-icon" />
        </div>
      </div>
      <div className="info-menu__content">
        {ProjectExampleData.map((example, idx) => {
          return <ProjectExample projectExample={example} index={idx} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default InfoMenu;
