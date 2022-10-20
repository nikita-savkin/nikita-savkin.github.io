import MenuBlock from "../MenuBlock/MenuBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "./MainMenu.scss";
import { middleBlocksTitles } from "../../data/data";

interface MainMenuType {
  showInfoMenu: CallableFunction;
}

const MainMenu = ({ showInfoMenu }: MainMenuType) => {
  return (
    <div className="main-menu">
      <div className="main-menu_left">
        <MenuBlock className="menu-block_large no-hover" dynamic={false}>
          <InfoBlock />
        </MenuBlock>
      </div>
      <div className="main-menu_center">
        <MenuBlock
          className="menu-block_medium transform-center-first"
          title={middleBlocksTitles[0]}
          showInfoMenu={showInfoMenu}
        />
        <MenuBlock
          className="menu-block_medium transform-center-second"
          title={middleBlocksTitles[1]}
          showInfoMenu={showInfoMenu}
        />
        <MenuBlock
          className="menu-block_medium transform-center-third"
          title={middleBlocksTitles[2]}
          showInfoMenu={showInfoMenu}
        />
      </div>
      <div className="main-menu_right">
        <MenuBlock
          className="menu-block_medium transform-right-first"
          title={middleBlocksTitles[3]}
          showInfoMenu={showInfoMenu}
        />
      </div>
    </div>
  );
};

export default MainMenu;
