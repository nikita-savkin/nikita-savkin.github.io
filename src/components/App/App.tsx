import { useState } from "react";

import ParticlesComp from "../Particles";
import MainMenu from "../MainMenu/MainMenu";
import InfoMenu from "../InfoMenu/InfoMenu";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";

import { middleBlocksTitles } from "../../data/data";
import "./App.scss";

const App = () => {
  const [showedInfoMenu, setShowedInfoMenu] = useState<string | null>(null);
  const [infoMenuTitle, setInfoMenuTitle] = useState("");

  const toggleInfoMenu = (id: string | null) => {
    setShowedInfoMenu(id);

    middleBlocksTitles.forEach((titleInfo) => {
      if (titleInfo.id === id) {
        setInfoMenuTitle(titleInfo.infoMenuTitle);
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="body-bg"></div>
      <div className="container">
        <MainMenu showInfoMenu={toggleInfoMenu} />
        <InfoMenu
          showedInfoMenu={showedInfoMenu}
          toggleInfoMenu={toggleInfoMenu}
          title={infoMenuTitle}
        >
          {showedInfoMenu === "01" && <AboutMe />}
          {showedInfoMenu === "02" && <Portfolio />}
          {showedInfoMenu === "03" && <Resume />}
        </InfoMenu>
        <ParticlesComp />
      </div>
    </div>
  );
};

export default App;
