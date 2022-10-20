import { ProjectExampleInfo } from "../../data/data";
import ProjectExample from "../ProjectExample/ProjectExample";
import "./InfoMenu.scss";

interface InfoMenuType {
  showedInfoMenu: string | null;
  toggleInfoMenu: CallableFunction;
}

const InfoMenu = ({ showedInfoMenu, toggleInfoMenu }: InfoMenuType) => {
  const hideInfoMenu = () => {
    toggleInfoMenu(null);
  };

  return (
    <div className={`info-menu ${!showedInfoMenu ? "info-menu--hidden" : "info-menu--showed"}`}>
      <div className="info-menu__header">
        <div className="title">My Works</div>
        <div onClick={hideInfoMenu} className="close">
          <img src="./img/icons/close.svg" alt="close-icon" />
        </div>
      </div>
      <div className="info-menu__content">
        {ProjectExampleInfo.map((example, idx) => (
          <ProjectExample projectExample={example} index={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default InfoMenu;
