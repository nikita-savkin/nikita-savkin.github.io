import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
// @ts-ignore
import AnimatedCursor from "react-animated-cursor";

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
  const [showedInfoMenu, setShowedInfoMenu] = useState<string | null>("02");
  const [infoMenuTitle, setInfoMenuTitle] = useState("");
  const [isShowedPageLoader, setIsShowedPageLoader] = useState(false);
  const [hideTypewriper, setHideTypewriper] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setHideTypewriper(true);
    // }, 5000);
    // setTimeout(() => {
    //   setHideTypewriper(true);
    //   setIsShowedPageLoader(false);
    // }, 5600);
  }, []);

  const toggleInfoMenu = (id: string | null) => {
    setShowedInfoMenu(id);

    middleBlocksTitles.forEach((titleInfo) => {
      if (titleInfo.id === id) {
        setInfoMenuTitle(titleInfo.infoMenuTitle);
      }
    });
  };

  const hideInfoMenu = () => {
    toggleInfoMenu(null);
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
      <AnimatedCursor
        innerSize={20}
        outerSize={10}
        color="255, 255 ,255"
        outerAlpha={1}
        innerScale={0.7}
        outerScale={5}
        hasOuterBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".clickable",
        ]}
      />
      <div className="body-bg"></div>
      {isShowedPageLoader && (
        <div className={`page-load ${hideTypewriper ? "hidden-typewriter" : ""}`}>
          <div className="blured-bg"></div>
          <Typewriter
            options={{
              wrapperClassName: "typewriter-wrapper",
              strings: ["Welcome to Nikita's portfolio."],
              autoStart: true,
              loop: false,
              deleteSpeed: 1,
              delay: 70,
            }}
          />
        </div>
      )}
      {showedInfoMenu && <div onClick={hideInfoMenu} className="bg-info-menu"></div>}
      <div className="container">
        {!isShowedPageLoader && <MainMenu showInfoMenu={toggleInfoMenu} />}
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
