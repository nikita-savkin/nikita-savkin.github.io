import { useState, useEffect, createRef } from 'react'
import Typewriter from 'typewriter-effect'
// @ts-ignore

import AnimatedCursor from 'react-animated-cursor'

import ParticlesComp from '../Particles'
import MainMenu from '../MainMenu/MainMenu'
import InfoMenu from '../InfoMenu/InfoMenu'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Contacts from '../Contacts/Contacts'

import { middleBlocksTitles } from '../../data'
import './App.scss'

const App = () => {
  const [showedInfoMenu, setShowedInfoMenu] = useState<string | null>(null)
  const [infoMenuTitle, setInfoMenuTitle] = useState('')
  const [isShowedPageLoader, setIsShowedPageLoader] = useState(true)
  const [hideTypewriper, setHideTypewriper] = useState(false)

  const infoMenuContent = createRef<HTMLDivElement>()

  useEffect(() => {
    setTimeout(() => {
      setHideTypewriper(true)
    }, 4500)
    setTimeout(() => {
      setHideTypewriper(true)
      setIsShowedPageLoader(false)
    }, 5500)
  }, [])

  const toggleInfoMenu = (id: string | null) => {
    setShowedInfoMenu(id)

    middleBlocksTitles.forEach((titleInfo) => {
      if (titleInfo.id === id) {
        setInfoMenuTitle(titleInfo.infoMenuTitle)
      }
    })
  }

  const hideInfoMenu = () => {
    toggleInfoMenu(null)
  }

  const portfolioUpdated = () => {
    setTimeout(() => {
      if (infoMenuContent.current) infoMenuContent.current.scrollTo(0, 0)
    }, 500)
  }

  const renderInfoMenuContent = () => {
    switch (showedInfoMenu) {
      case '01':
        return <AboutMe />
      case '02':
        return <Portfolio portfolioUpdated={portfolioUpdated} />
      case '03':
        return <Resume />
      case '04':
        return <Contacts />
    }
  }

  return (
    <div className='wrapper'>
      <AnimatedCursor
        innerSize={7}
        outerSize={30}
        color='255, 255 ,255'
        outerAlpha={1}
        innerScale={1}
        outerScale={2}
        hasOuterBlendMode={false}
        outerStyle={{
          border: '1px solid rgba(255, 255, 255, 0.5)',
          backgroundColor: 'transparent',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.clickable',
        ]}
      />
      <div className='body-bg'></div>
      {isShowedPageLoader && (
        <div className={`page-load ${hideTypewriper ? 'hidden-typewriter' : ''}`}>
          <div className='blured-bg'></div>
          <Typewriter
            options={{
              wrapperClassName: 'typewriter-wrapper',
              strings: ['Hi there! It’s so nice to meet you here!'],
              autoStart: true,
              loop: false,
              deleteSpeed: 1,
              delay: 65,
            }}
          />
        </div>
      )}
      {showedInfoMenu && <div onClick={hideInfoMenu} className='bg-info-menu'></div>}
      <div className='container'>
        {!isShowedPageLoader && <MainMenu showInfoMenu={toggleInfoMenu} />}
        <InfoMenu
          contentRef={infoMenuContent}
          showedInfoMenu={showedInfoMenu}
          toggleInfoMenu={toggleInfoMenu}
          title={infoMenuTitle}
        >
          {renderInfoMenuContent()}
        </InfoMenu>
        <ParticlesComp />
      </div>
    </div>
  )
}

export default App
