import React, { Component } from 'react';

import './index.css';
import GridItem from './item';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.image
    };

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(id) {
    const { items } = this.state;
    const { activeColorId } = this.props;
    if (!items[id].filled && items[id].color === activeColorId) {
      const newItems = items.slice();
      newItems[id] = {
        ...newItems[id],
        filled: true
      };

      this.setState({
        items: newItems
      });

      console.log("grid item", id); // eslint-disable-line
    }
  }

  render() {
    const { colors, activeColorId, onCellClick } = this.props;
    return (
      <div className="Grid">
        {this.props.image.map((item, index) => (
          <GridItem
            key={index}
            gridIndex={index}
            text={item.color}
            filled={item.filled}
            color={colors[item.color]}
            activeColor={colors[activeColorId]}
            onItemClick={onCellClick}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
