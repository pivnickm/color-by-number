import React, { Component } from "react";
import { Rect } from 'react-konva';

const setBackgroundColor = (color, filled, activeColor) => {
  if (color === activeColor && !filled) {
    return "rgba(0, 0, 0, 0.25)";
  } else if (filled) {
    return color;
  } else {
    return "white"
  }
};

class CanvasItem extends Component {
  shouldComponentUpdate(newProps) {
    return (
      this.props.filled !== newProps.filled ||
      this.props.activeColor !== newProps.activeColor
    );
  }

  render() {
    const {
      gridIndex,
      onItemClick,
      color,
      filled,
      activeColor,
      cellSize,
      coords,
      isComplete
    } = this.props;
    const getCellSize = isComplete ? cellSize : cellSize - 2;
    const getStroke = (isComplete || !color) ? "transparent": "black";
    return (
      <Rect
        strokeHitEnabled={false}
        perfectDrawEnabled={false}
        x={coords.x}
        y={coords.y}
        width={getCellSize}
        height={getCellSize}
        stroke={getStroke}
        strokeWidth={2}
        fill={setBackgroundColor(color, filled, activeColor)}
        onClick={() => onItemClick(gridIndex)}
        onTap={() => onItemClick(gridIndex)}
      />
    );
  }
}

CanvasItem.displayName = "CanvasItem";

CanvasItem.propTypes = {};

CanvasItem.defaultProps = {};

export default CanvasItem;

