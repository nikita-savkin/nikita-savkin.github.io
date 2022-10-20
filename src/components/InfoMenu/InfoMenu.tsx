import "./InfoMenu.scss";

interface InfoMenuType {
  title: string | null;
  showedInfoMenu: string | null;
  toggleInfoMenu: CallableFunction;
  children: any;
}

const InfoMenu = ({ title, showedInfoMenu, toggleInfoMenu, children }: InfoMenuType) => {
  const hideInfoMenu = () => {
    toggleInfoMenu(null);
  };

  return (
    <div className={`info-menu ${!showedInfoMenu ? "info-menu--hidden" : "info-menu--showed"}`}>
      <div className="info-menu__header">
        <div className="title">{title}</div>
        <div onClick={hideInfoMenu} className="close">
          <img src="./img/icons/close.svg" alt="close-icon" />
        </div>
      </div>
      {children && <div className="info-menu__content">{children}</div>}
    </div>
  );
};

export default InfoMenu;
