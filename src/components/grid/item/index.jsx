import React from 'react';

import './index.css';

const GridItem = ({ text, gridIndex, onItemClick, color, filled }) => {
  return (
    <div
      className="GridItem"
      style={{backgroundColor: filled ? color : "white" }}
      onClick={() => onItemClick(gridIndex)}
    >
      {text}
    </div>
  );
};

export default GridItem;
