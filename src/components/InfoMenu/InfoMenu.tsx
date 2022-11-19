import React from 'react'
import './InfoMenu.scss'

interface InfoMenuType {
  contentRef: React.RefObject<HTMLDivElement>
  title: string | null
  showedInfoMenu: string | null
  toggleInfoMenu: CallableFunction
  children: any
}

const InfoMenu = ({ contentRef, title, showedInfoMenu, toggleInfoMenu, children }: InfoMenuType) => {
  const hideInfoMenu = () => {
    toggleInfoMenu(null)
  }

  return (
    <div className={`info-menu ${!showedInfoMenu ? 'info-menu--hidden' : 'info-menu--showed'}`}>
      <div className='info-menu__header'>
        <div className='title'>{title}</div>
        {showedInfoMenu === '03' && (
          <a
            download
            href='./resume/Nikita-Savkin-Frontend.pdf'
            className='download-btn'
            rel='noreferrer'
            target='_blank'
          >
            <img src='./img/icons/download.svg' alt='link-logo' />
            <span>Download CV</span>
          </a>
        )}
        <div onClick={hideInfoMenu} className='close clickable'>
          <img src='./img/icons/close.svg' alt='close-icon' />
        </div>
      </div>
      {children && (
        <div ref={contentRef} className='info-menu__content'>
          {children}
        </div>
      )}
    </div>
  )
}

export default InfoMenu
