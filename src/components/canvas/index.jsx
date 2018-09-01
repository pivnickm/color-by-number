import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Line } from "react-konva";

import CanvasItem from "./item";
// import styles from "./_index.css";

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.stageRef = React.createRef();
    this.scaleStage = this.scaleStage.bind(this);
    this.scaleStageEndTouch = this.scaleStageEndTouch.bind(this);
  }

  componentDidMount() {
    if (this.stageRef.current) {
      this.stageRef.current.getStage().getContent().addEventListener("touchmove", this.scaleStage);
      this.stageRef.current.getStage().getContent().addEventListener("touchend", this.scaleStageEndTouch);
    }
  }

  componentWillUnmount() {
    this.stageRef.current.getStage().getContent().removeEventListener("touchmove", this.scaleStage);
    this.stageRef.current.getStage().getContent().removeEventListener("touchend", this.scaleStageEndTouch);
  }

  scaleStageEndTouch() {
    this.props.scaleStageEndTouch();
  }

  scaleStage(evt) {
    this.props.scaleStage(evt, this.stageRef.current);
  }

  render(){
    const {
      colors,
      activeColorId,
      onCellClick,
      cellSize,
      isComplete,
      image,
      x,
      y,
      height,
      width,
      offset,
      handleDragEnd,
      positions
    } = this.props;
    const gridSize = width/50;
    const isDraggable = this.stageRef.current ? this.stageRef.current.getStage().getScaleX() > 1 ? true : false : false;

    return (
      <Stage
        width={width}
        height={height}
        draggable={isDraggable}
        x={x}
        y={y}
        offset={offset}
        onDragEnd={handleDragEnd}
        onDragMove={handleDragEnd}
        ref={this.stageRef}
      >
        <Layer>
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
}

Canvas.propTypes = {};

Canvas.defaultProps = {
  fullsize: true
};

export default Canvas;
