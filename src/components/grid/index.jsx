import React, { Component } from 'react';

import './index.css';
import GridItem from './item';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.image
    };
  }

  render() {
    const { colors, activeColorId, onCellClick, cellSize, isComplete, fullsize } = this.props;
    return (
      <div
        className="Grid"
        style={{
          width: fullsize ? "100vw" : "100%",
          height: fullsize ? "100vw": "100%"
        }}
      >
        {this.props.image.map((item, index) => (
          <GridItem
            key={index}
            gridIndex={index}
            text={!fullsize ? "" : item.color}
            filled={item.filled}
            color={colors[item.color]}
            cellSize={cellSize}
            isComplete={isComplete}
            activeColor={colors[activeColorId]}
            onItemClick={onCellClick}
            grayScale={item.grayScale}
          />
        ))}
      </div>
    );
  }
}

Grid.defaultProps = {
  fullsize: true
};

export default Grid;
