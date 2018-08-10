import React from 'react';

import './index.css';

const setBackgroundColor = (color, filled, activeColor) => {
  if (color === activeColor && !filled) {
    return "rgba(0, 0, 0, 0.25)";
  } else if (filled) {
    return color;
  } else {
    return "#ffffff"
  }
};

const setForegroundColor = (color, filled, text) => {
  if (text === "bk") {
    return "#fff";
  } else if (filled) {
    return color;
  } else {
    return "#000"
  }
};

const GridItem = ({
  text,
  gridIndex,
  onItemClick,
  color,
  filled,
  activeColor,
  cellSize,
  isComplete
}) => {
  const getCellSize = isComplete ? `${cellSize}vw` : `calc(${cellSize}vw - 2px)`
  return (
    <div
      className="GridItem"
      style={{
        backgroundColor: setBackgroundColor(color, filled, activeColor),
        color: setForegroundColor(color, filled, text),
        border: isComplete ? "none" : "1px solid #000",
        height: getCellSize,
        width: getCellSize,
      }}
      onClick={() => onItemClick(gridIndex)}
    >
      {text}
    </div>
  );
};

GridItem.defaultProps = {
  cellSize: 4
};

export default GridItem;
