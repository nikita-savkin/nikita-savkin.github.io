import React, { useRef, useState, useEffect } from 'react'
import { Title } from '../../data/types'

import './MenuBlock.scss'

interface MenuBlockType {
  dynamic?: boolean
  className?: string
  title?: Title
  children?: any
  showInfoMenu?: CallableFunction
}

const MenuBlock = ({ dynamic = true, className, title, children, showInfoMenu }: MenuBlockType) => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [hoveredBlock, setHoveredBlock] = useState(false)

  const menuBlockRef = useRef<HTMLDivElement>(null)
  const menuBlockLineRef = useRef<HTMLSpanElement>(null)
  const menuBlockBracketsRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const blockHeight = menuBlockRef?.current?.clientHeight ?? null
    const blockWidth = menuBlockRef?.current?.clientWidth ?? null

    if (blockHeight) setHeight(blockHeight)
    if (blockWidth) setWidth(blockWidth)
  }, [])

  useEffect(() => {
    const menuBlockLine = menuBlockLineRef.current
    let timeout: ReturnType<typeof setTimeout>
    let interval: ReturnType<typeof setInterval>

    const blinkLine = () => {
      if (menuBlockLine) {
        menuBlockLine.style.opacity = '0'
        timeout = setTimeout(() => (menuBlockLine.style.opacity = '1'), 500)
      }
    }

    if (hoveredBlock) {
      blinkLine()
      interval = setInterval(blinkLine, 1000)
    }

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [hoveredBlock])

  const handleMove = (e: any) => {
    const xVal = e.nativeEvent.layerX
    const yVal = e.nativeEvent.layerY

    const yRotation = 17 * ((xVal - width / 2) / width)
    const xRotation = -17 * ((yVal - height / 2) / height)

    const transformStyle = `perspective(800px) translate3d(0, 0, 10px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`

    if (menuBlockRef.current && dynamic) {
      menuBlockRef.current.style.transform = transformStyle
    }
  }

  const onMenuBlockEnter = () => {
    if (dynamic) setHoveredBlock(true)
  }

  const onMouseMove = (event: any) => {
    if (dynamic) handleMove(event)
  }

  const onMenuBlockLeave = () => {
    setHoveredBlock(false)

    if (menuBlockLineRef.current && menuBlockRef.current && dynamic) {
      menuBlockLineRef.current.style.opacity = '0'
      menuBlockRef.current.style.transform = ''
    }
  }

  const onMenuBlockDown = () => {
    if (menuBlockRef.current && dynamic) {
      menuBlockRef.current.style.transform = 'perspective(800px) scale(0.9) rotateX(0) rotateY(0)'
    }
  }

  const onMenuBlockUp = () => {
    if (menuBlockRef.current && dynamic) {
      menuBlockRef.current.style.transform = 'perspective(800px) scale(1.1) rotateX(0) rotateY(0)'
    }
  }

  const onClick = () => {
    if (showInfoMenu && dynamic) showInfoMenu(title?.id)
  }

  return (
    <div
      ref={menuBlockRef}
      onMouseEnter={onMenuBlockEnter}
      onMouseLeave={onMenuBlockLeave}
      onMouseMove={onMouseMove}
      onMouseDown={onMenuBlockDown}
      onMouseUp={onMenuBlockUp}
      onClick={onClick}
      className={`menu-block ${className ?? 'menu-block_medium'} ${dynamic ? 'clickable' : ''}`}
    >
      {!!Object.keys(title ?? {}).length && (
        <div className='menu-block__title'>
          <span>{title?.id}</span>
          <span className='menu-block__title-dot'>.</span>
          <span>{title?.title}</span>
          <span ref={menuBlockBracketsRef} className='menu-block__title-brackets'>
            ()
          </span>
          <span ref={menuBlockLineRef} className='menu-block__title-line'>
            |
          </span>
        </div>
      )}
      {children}
    </div>
  )
}

export default MenuBlock
