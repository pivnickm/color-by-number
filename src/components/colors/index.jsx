import React from 'react';

import './index.css';

const ColorList = ({ colors, activeColorId, setActiveColor }) => {
  const nonBWColors = colors.filter((color) => (color !== "#fff" && color !== "#000"));

  return (
    <div className="ColorList">
      {nonBWColors.map((color, index) => (
        <div
          key={color}
          className={`${activeColorId === index
            ?
              "active"
            :
              null
            }
            ColorList__item`
          }
          style={{backgroundColor: color }}
          onClick={() => setActiveColor(index)}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default ColorList;
