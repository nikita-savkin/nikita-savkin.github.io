import React, { useRef, useState, useEffect } from "react";
import { Title } from "../../data/types";

import "./MenuBlock.scss";

interface MenuBlockType {
  dynamic?: boolean;
  className?: string;
  title?: Title;
  children?: any;
}

const MenuBlock = ({ dynamic = true, className, title, children }: MenuBlockType) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const menuBlockRef = useRef<HTMLDivElement>(null);
  const menuBlockLineRef = useRef<HTMLSpanElement>(null);
  const menuBlockBracketsRef = useRef<HTMLSpanElement>(null);

  let blinkLineInterval: any;

  useEffect(() => {
    const blockHeight = menuBlockRef?.current?.clientHeight ?? null;
    const blockWidth = menuBlockRef?.current?.clientWidth ?? null;

    if (blockHeight) setHeight(blockHeight);
    if (blockWidth) setWidth(blockWidth);
  }, []);

  const handleMove = (e: any) => {
    const xVal = e.nativeEvent.layerX;
    const yVal = e.nativeEvent.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const transformStyle =
      "perspective(800px) scale(1.1) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";

    if (menuBlockRef.current && dynamic) {
      menuBlockRef.current.style.transform = transformStyle;
    }
  };

  const blinkLine = () => {
    const menuBlockLine = menuBlockLineRef.current;

    if (menuBlockLine) {
      menuBlockLine.style.opacity = "0";
      setTimeout(() => (menuBlockLine.style.opacity = "1"), 500);
    }
  };

  const onMenuBlockHover = () => {
    if (dynamic) {
      blinkLine();
      blinkLineInterval = setInterval(blinkLine, 1000);
    }
  };

  const onMouseMove = (event: any) => {
    if (dynamic) {
      handleMove(event);
    }
  };

  const onMenuBlockOut = () => {
    if (menuBlockLineRef.current && menuBlockRef.current && dynamic) {
      menuBlockLineRef.current.style.opacity = "0";
      menuBlockRef.current.style.transform = "";
    }

    clearInterval(blinkLineInterval);
  };

  const onMenuBlockDown = () => {
    if (menuBlockRef.current && dynamic) {
      menuBlockRef.current.style.transform = "perspective(800px) scale(0.9) rotateX(0) rotateY(0)";
    }
  };

  const onMenuBlockUp = () => {
    if (menuBlockRef.current && dynamic) {
      menuBlockRef.current.style.transform = "perspective(800px) scale(1.1) rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      ref={menuBlockRef}
      onMouseOver={onMenuBlockHover}
      onMouseOut={onMenuBlockOut}
      onMouseMove={onMouseMove}
      onMouseDown={onMenuBlockDown}
      onMouseUp={onMenuBlockUp}
      className={`menu-block ${className ?? "menu-block_medium"}`}
    >
      {!!Object.keys(title ?? {}).length && (
        <div className="menu-block__title">
          <span>{title?.number}</span>
          <span className="menu-block__title-dot">.</span>
          <span>{title?.title}</span>
          <span ref={menuBlockBracketsRef} className="menu-block__title-brackets">
            ()
          </span>
          <span ref={menuBlockLineRef} className="menu-block__title-line">
            _
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default MenuBlock;
