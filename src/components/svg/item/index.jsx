import React, { Component } from "react";

import "../index.css";

class SvgItem extends Component {
  constructor(props) {
    super(props);

    this.setBackgroundColor = this.setBackgroundColor.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.item.filled !== this.props.item.filled || (nextProps.activeColorId !== this.props.activeColorId);
  }

  setBackgroundColor(color, filled, activeColor) {
    if (color === activeColor && !filled) {
      return "rgba(0, 0, 0, 0.25)";
    } else if (color && filled) {
      return color;
    } else {
      return "white"
    }
  };

  render(){
    const {
      x,
      y,
      index,
      item,
      colors,
      activeColorId,
      onCellClick,
      cellSize
    } = this.props;

    return (
      <g >
        <text
          className="Text__unselectable"
          x={x + 2}
          y={y + (cellSize/2) + 2}
          fontFamily="Verdana"
          fontSize="8"
        >
          {(item.color !== "bk" && !item.filled) ? item.color : ""}
        </text>
        <rect
          fill={
            this.setBackgroundColor(colors[item.color], item.filled, colors[activeColorId])
          }
          stroke={!colors[item.color] ? "transparent": "black"}
          onClick={() => onCellClick(index)}
          x={x}
          y={y}
          width={cellSize}
          height={cellSize}
        />
      </g>
    );
  }
}

export default SvgItem;
