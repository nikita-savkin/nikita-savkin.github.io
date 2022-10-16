import "./InfoBlock.scss";

const InfoBlock = () => {
  const info = {
    name: "Nikita",
    surname: "Savkin",
    profession: "Front-End Developer",
    links: [
      {
        id: "email",
        url: "mailto:no.colour.you.like@gmail.com",
        icon: "./img/icons/email.svg",
      },
      {
        id: "github",
        url: "https://github.com/No-colour-you-like",
        icon: "./img/icons/github.svg",
      },
      {
        id: "linkedin",
        url: "https://www.linkedin.com/in/nikitasavkin",
        icon: "./img/icons/linkedin.svg",
      },
    ],
  };

  return (
    <div className="name-block">
      <div className="main__titles">
        <h1 className="name-title">
          {info.name}
          <br />
          <span>{info.surname}.</span>
        </h1>
        <p className="prof__title">{info.profession}</p>
        <div className="links">
          {info.links.map((link) => {
            return (
              <a
                href={link.url}
                className="links__link"
                target="_blank"
                rel="noreferrer"
                key={link.id}
              >
                <img src={link.icon} className="links__link-icon" alt="link-icon" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
