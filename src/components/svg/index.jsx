import React, { Component } from "react";
import {ReactSVGPanZoom} from "react-svg-pan-zoom";
import SvgItem from "./item";

class SvgGrid extends Component {
  render(){
    const {
      width,
      height,
      image,
      colors,
      activeColorId,
      cellSize,
      onCellClick,
      positions
    } = this.props;
    return (
      <ReactSVGPanZoom
        width={width}
        height={height}
        // toolbarPosition={"none"}
        detectAutoPan={false}
        miniaturePosition={"none"}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {image.map((item, index) => (
            <SvgItem
              key={index}
              index={index}
              x={positions[index].x}
              y={positions[index].y}
              item={item}
              colors={colors}
              activeColorId={activeColorId}
              onCellClick={onCellClick}
              cellSize={cellSize}
            />
          ))}
        </svg>
      </ReactSVGPanZoom>
    );
  }
}

export default SvgGrid;

