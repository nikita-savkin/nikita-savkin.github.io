import { useState } from "react";

import ParticlesComp from "../Particles";
import MainMenu from "../MainMenu/MainMenu";
import InfoMenu from "../InfoMenu/InfoMenu";

import "./App.scss";

const App = () => {
  const [showedInfoMenu, setShowedInfoMenu] = useState<string | null>(null);

  const toggleInfoMenu = (id: string | null) => {
    setShowedInfoMenu(id);
  };

  return (
    <div className="wrapper">
      <div className="body-bg"></div>
      <div className="container">
        <MainMenu showInfoMenu={toggleInfoMenu} />
        <InfoMenu showedInfoMenu={showedInfoMenu} toggleInfoMenu={toggleInfoMenu} />
        <ParticlesComp />
      </div>
    </div>
  );
};

export default App;
