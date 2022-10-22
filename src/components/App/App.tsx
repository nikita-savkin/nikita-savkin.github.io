import { useState } from "react";

import ParticlesComp from "../Particles";
import MainMenu from "../MainMenu/MainMenu";
import InfoMenu from "../InfoMenu/InfoMenu";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Contacts from "../Contacts/Contacts";

import { middleBlocksTitles } from "../../data";
import "./App.scss";

const App = () => {
  const [showedInfoMenu, setShowedInfoMenu] = useState<string | null>("01");
  const [infoMenuTitle, setInfoMenuTitle] = useState("");

  const toggleInfoMenu = (id: string | null) => {
    setShowedInfoMenu(id);

    middleBlocksTitles.forEach((titleInfo) => {
      if (titleInfo.id === id) {
        setInfoMenuTitle(titleInfo.infoMenuTitle);
      }
    });
  };

  const renderInfoMenuContent = () => {
    switch (showedInfoMenu) {
      case "01":
        return <AboutMe />;
      case "02":
        return <Portfolio />;
      case "03":
        return <Resume />;
      case "04":
        return <Contacts />;
    }
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
          {renderInfoMenuContent()}
        </InfoMenu>
        <ParticlesComp />
      </div>
    </div>
  );
};

export default App;
