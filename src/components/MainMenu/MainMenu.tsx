import { useEffect, useState } from 'react'
import MenuBlock from '../MenuBlock/MenuBlock'
import InfoBlock from '../InfoBlock/InfoBlock'
import './MainMenu.scss'
import { middleBlocksTitles } from '../../data'

interface MainMenuType {
  showInfoMenu: CallableFunction
}

const MainMenu = ({ showInfoMenu }: MainMenuType) => {
  const [showFirstBlock, setShowFirstBlock] = useState(false)
  const [showSecondBlock, setShowSecondBlock] = useState(false)
  const [showThirdBlock, setShowThirdBlock] = useState(false)
  const [showFourthBlock, setShoWFourthBlock] = useState(false)
  const [showFifthBlock, setShowFifthBlock] = useState(false)
  const [screenWidth, seScreentWidth] = useState(window.innerWidth)

  const screenBreakpoints = {
    'laptop-medium': 1440,
    'laptop-small': 1024,
    tablet: 768,
    'mobile-medium': 411,
    'mobile-small': 360,
  }

  const updateScreenWidth = () => {
    seScreentWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth)
    return () => window.removeEventListener('resize', updateScreenWidth)
  })

  useEffect(() => {
    setTimeout(() => {
      setShowFirstBlock(true)
    }, 200)
    setTimeout(() => {
      setShowSecondBlock(true)
    }, 600)
    setTimeout(() => {
      setShowThirdBlock(true)
    }, 1000)
    setTimeout(() => {
      setShoWFourthBlock(true)
    }, 1400)
    setTimeout(() => {
      setShowFifthBlock(true)
    }, 1800)
  })

  return (
    <div className='main-menu'>
      <div className='main-menu_left'>
        <MenuBlock
          className={`menu-block_large no-hover ${
            showFirstBlock ? 'showed-main-menu-block' : 'hidden-main-menu-block'
          }`}
          dynamic={false}
        >
          <InfoBlock />
        </MenuBlock>
        {screenWidth < screenBreakpoints['laptop-medium'] && (
          <MenuBlock
            className={`menu-block_medium menu-block_additional ${
              showFifthBlock ? 'showed-main-menu-block' : 'hidden-main-menu-block'
            }`}
            title={middleBlocksTitles[3]}
            showInfoMenu={showInfoMenu}
          />
        )}
      </div>
      <div className='main-menu_center'>
        <MenuBlock
          className={`menu-block_medium transform-center-first ${
            showSecondBlock ? 'showed-main-menu-block' : 'hidden-main-menu-block'
          }`}
          title={middleBlocksTitles[0]}
          showInfoMenu={showInfoMenu}
        />
        <MenuBlock
          className={`menu-block_medium transform-center-second ${
            showThirdBlock ? 'showed-main-menu-block' : 'hidden-main-menu-block'
          }`}
          title={middleBlocksTitles[1]}
          showInfoMenu={showInfoMenu}
        />
        <MenuBlock
          className={`menu-block_medium transform-center-third ${
            showFourthBlock ? 'showed-main-menu-block' : 'hidden-main-menu-block'
          }`}
          title={middleBlocksTitles[2]}
          showInfoMenu={showInfoMenu}
        />
      </div>
      <div className='main-menu_right'>
        {screenWidth >= screenBreakpoints['laptop-medium'] && (
          <MenuBlock
            className={`menu-block_medium transform-right-first ${
              showFifthBlock ? 'showed-main-menu-block' : 'hidden-main-menu-block'
            }`}
            title={middleBlocksTitles[3]}
            showInfoMenu={showInfoMenu}
          />
        )}
      </div>
    </div>
  )
}

export default MainMenu
