import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer } from "react-konva";

import CanvasItem from "./item";

const Canvas = ({
  colors,
  activeColorId,
  onCellClick,
  cellSize,
  isComplete,
  image,
  positions
}) => {
  return (
    <Stage width={window.innerWidth} height={window.innerWidth}>
      <Layer ref={this.stageRef}>
        {image.map((item, index) => (
          <CanvasItem
            key={index}
            gridIndex={index}
            filled={item.filled}
            color={colors[item.color]}
            coords={positions[index]}
            cellSize={cellSize}
            isComplete={isComplete}
            activeColor={colors[activeColorId]}
            onItemClick={onCellClick}
            grayScale={item.grayScale}
          />
        ))}
      </Layer>
    </Stage>
  );
}

Canvas.propTypes = {};

Canvas.defaultProps = {
  fullsize: true
};

export default Canvas;
