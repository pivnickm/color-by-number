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
    const { colors, activeColorId } = this.props;
    if (!items[id].filled && items[id].color === colors[activeColorId]) {
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
    const { colors } = this.props;
    return (
      <div className="Grid">
        {this.state.items.map((item, index) => (
          <GridItem
            key={index}
            gridIndex={index}
            text={colors.indexOf(item.color) + 1}
            color={item.color}
            filled={item.filled}
            onItemClick={this.onItemClick}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
