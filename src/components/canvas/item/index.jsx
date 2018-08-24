import React from "react";
import PropTypes from "prop-types";
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

const setForegroundColor = (color, filled, text) => {
  if (text === "bk") {
    return "#fff";
  } else if (filled) {
    return color;
  } else {
    return "#000"
  }
};

const CanvasItem = ({
  gridIndex,
  onItemClick,
  color,
  gridSize,
  filled,
  activeColor,
  cellSize,
  coords,
  isComplete,
  grayScale
}) => {
  const getCellSize = isComplete ? cellSize : cellSize - 2;
  const getStroke = (isComplete || !color) ? "transparent": "black";
  return (
    <Rect
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

CanvasItem.displayName = "CanvasItem";

CanvasItem.propTypes = {};

CanvasItem.defaultProps = {};

export default CanvasItem;

