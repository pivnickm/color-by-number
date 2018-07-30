import React from 'react';

import './index.css';

const GridItem = ({ text, gridIndex, onItemClick, color, filled }) => {
  console.log(color); // eslint-disable-line
  return (
    <div
      className="GridItem"
      style={{
        backgroundColor: color === "#000" ? color : filled ? color : "white" ,
        color: filled ? color : "#000"
      }}
      onClick={() => onItemClick(gridIndex)}
    >
      {text}
    </div>
  );
};

export default GridItem;
