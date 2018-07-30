import React from 'react';

import './index.css';

const setBackgroundColor = (color, filled, activeColor) => {
  if (color === "#000") {
    return color;
  } else if (color === activeColor && !filled ) {
    return "rgba(0, 0, 0, 0.35)";
  } else {
    if (filled) {
      return color;
    } else {
      return "#fff"
    }
  }
};

const GridItem = ({ text, gridIndex, onItemClick, color, filled, activeColor }) => {
  return (
    <div
      className="GridItem"
      style={{
        backgroundColor: setBackgroundColor(color, filled, activeColor),
        color: filled ? color : "#000"
      }}
      onClick={() => onItemClick(gridIndex)}
    >
      {text}
    </div>
  );
};

export default GridItem;
