import ParticlesComp from "../Particles";
import MainMenu from "../MainMenu/MainMenu";
import InfoMenu from "../InfoMenu/InfoMenu";

import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <div className="body-bg"></div>
      <div className="container">
        <MainMenu />
        <InfoMenu />
        <ParticlesComp />
      </div>
    </div>
  );
};

export default App;
