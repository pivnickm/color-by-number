import React, { Component } from 'react';
import BlockPicker from 'react-color/lib/Block';

import './index.css';
import GridItem from '../../grid/item';

class ImageCreator extends Component {
  constructor(props) {
    super(props);

    this.state={
      rangeValue: 50,
      color: "#000000",
      imageGrid: this.resetArray(50),
      uncoloredImageGrid: this.resetArray(50)
    };

    this.addColor = this.addColor.bind(this);
    this.fillCell = this.fillCell.bind(this);
    this.exportImage = this.exportImage.bind(this);
    this.resetArray = this.resetArray.bind(this);
  }

  resetArray(value) {
    return [...Array(Math.pow(value, 2)).fill({color: "bk", filled: false})];
  }

  addColor(color) {
    this.setState({
      color: color.hex
    });
  }

  fillCell(id) {
    const { color, imageGrid } = this.state
    const newImageGrid = imageGrid.slice();
    const uncoloredImageGrid = this.state.uncoloredImageGrid.slice();

    newImageGrid[id] = {
      color: color,
      filled: true
    };

    uncoloredImageGrid[id] = {
      color: color,
      filled: false
    };

    this.setState({
      imageGrid: newImageGrid,
      uncoloredImageGrid
    });
  }

  exportImage() {
    const { uncoloredImageGrid } = this.state;
    // create color pallet
    const colors = uncoloredImageGrid.reduce((acc, cell) => {
      if(!acc.includes(cell.color) && cell.color !== "bk") {
          acc.push(cell.color);
        }
      return acc
    }, []);

    // process the uncolored image:
    // (set the cells to color id, fill background [bk] cells)
    const processedImage = uncoloredImageGrid.map(cell => {
      const newCell =  { ...cell };
      const colorId = colors.indexOf(newCell.color);

      newCell.color = colorId > -1 ? colorId : "bk"
      newCell.filled = newCell.color === "bk" ? true : newCell.filled

      return newCell;
    });

    console.log({
      image: processedImage,
      colors,
      stats: colors.reduce((acc, item, index) => {
        acc[index] = 0;
        return acc;
      }, {})
    }); // eslint-disable-line
  }

  render() {
    const { rangeValue, color } = this.state;
    return (
      <div className="ImageCreator">
        <div className="Grid">
          {this.state.imageGrid.map((item, index) => (
            <GridItem
              key={index}
              gridIndex={index}
              // text={item.color}
              filled={item.filled}
              color={item.color}
              activeColor={color}
              cellSize={`${window.innerWidth/rangeValue}px`}
              onItemClick={this.fillCell}
            />
          ))}
        </div>
        <div className="ColorsList">
          <BlockPicker
            triangle={"hide"}
            width={"100%"}
            colors={['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8', "#ffffff", "#000000"]}
            color={this.state.color}
            onChangeComplete={this.addColor}
          />
        </div>
        <button
          onClick={this.exportImage}
        >
          Export
        </button>
      </div>
    );
  }
}

export default ImageCreator;
