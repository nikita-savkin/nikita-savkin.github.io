import { personalInfo } from "../../data";

import "./InfoBlock.scss";

const InfoBlock = () => {
  return (
    <div className="name-block">
      <div className="main__titles">
        <h1 className="name-title">
          {personalInfo.name}
          <br />
          <span>{personalInfo.surname}</span>
        </h1>
        <p className="prof__title">{personalInfo.profession}</p>
        <div className="links">
          {personalInfo.links.map((link) => {
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
