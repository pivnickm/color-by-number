import React from 'react';

import './index.css';

const ColorList = ({ colors, activeColorId, setActiveColor }) => {
  return (
    <div className="ColorList">
      {colors.map((color, index) => (
        <div
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
        />
      ))}
    </div>
  );
};

export default ColorList;
