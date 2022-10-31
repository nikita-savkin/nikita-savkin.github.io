import { useEffect, useState } from "react";
import MenuBlock from "../MenuBlock/MenuBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "./MainMenu.scss";
import { middleBlocksTitles } from "../../data";

interface MainMenuType {
  showInfoMenu: CallableFunction;
}

const MainMenu = ({ showInfoMenu }: MainMenuType) => {
  const [showFirstBlock, setShowFirstBlock] = useState(true);
  const [showSecondBlock, setShowSecondBlock] = useState(true);
  const [showThirdBlock, setShowThirdBlock] = useState(true);
  const [showFourthBlock, setShoWFourthBlock] = useState(true);
  const [showFifthBlock, setShowFifthBlock] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setShowFirstBlock(true);
    // }, 200);
    // setTimeout(() => {
    //   setShowSecondBlock(true);
    // }, 600);
    // setTimeout(() => {
    //   setShowThirdBlock(true);
    // }, 1000);
    // setTimeout(() => {
    //   setShoWFourthBlock(true);
    // }, 1400);
    // setTimeout(() => {
    //   setShowFifthBlock(true);
    // }, 1800);
  });

  return (
    <div className="main-menu">
      <div className="main-menu_left">
        <MenuBlock
          className={`menu-block_large no-hover ${
            showFirstBlock ? "showed-main-menu-block" : "hidden-main-manu-block"
          }`}
          dynamic={false}
        >
          <InfoBlock />
        </MenuBlock>
      </div>
      <div className="main-menu_center">
        <MenuBlock
          className={`menu-block_medium transform-center-first ${
            showSecondBlock ? "showed-main-menu-block" : "hidden-main-manu-block"
          }`}
          title={middleBlocksTitles[0]}
          showInfoMenu={showInfoMenu}
        />
        <MenuBlock
          className={`menu-block_medium transform-center-second ${
            showThirdBlock ? "showed-main-menu-block" : "hidden-main-manu-block"
          }`}
          title={middleBlocksTitles[1]}
          showInfoMenu={showInfoMenu}
        />
        <MenuBlock
          className={`menu-block_medium transform-center-third ${
            showFourthBlock ? "showed-main-menu-block" : "hidden-main-manu-block"
          }`}
          title={middleBlocksTitles[2]}
          showInfoMenu={showInfoMenu}
        />
      </div>
      <div className="main-menu_right">
        <MenuBlock
          className={`menu-block_medium transform-right-first ${
            showFifthBlock ? "showed-main-menu-block" : "hidden-main-manu-block"
          }`}
          title={middleBlocksTitles[3]}
          showInfoMenu={showInfoMenu}
        />
      </div>
    </div>
  );
};

export default MainMenu;
