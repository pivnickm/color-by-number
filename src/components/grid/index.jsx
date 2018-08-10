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
    const { colors, activeColorId, onCellClick, cellSize, isComplete } = this.props;
    return (
      <div className="Grid">
        {this.props.image.map((item, index) => (
          <GridItem
            key={index}
            gridIndex={index}
            text={item.color}
            filled={item.filled}
            color={colors[item.color]}
            cellSize={cellSize}
            isComplete={isComplete}
            activeColor={colors[activeColorId]}
            onItemClick={onCellClick}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
