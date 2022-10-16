import MenuBlock from "../MenuBlock/MenuBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "./MainMenu.scss";
import { middleBlocksTitles } from "../../data/data";

const MainMenu = () => {
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
        />
        <MenuBlock
          className="menu-block_medium transform-center-second"
          title={middleBlocksTitles[1]}
        />
        <MenuBlock
          className="menu-block_medium transform-center-third"
          title={middleBlocksTitles[2]}
        />
      </div>
      <div className="main-menu_right">
        <MenuBlock
          className="menu-block_medium transform-right-first"
          title={middleBlocksTitles[3]}
        />
      </div>
    </div>
  );
};

export default MainMenu;
