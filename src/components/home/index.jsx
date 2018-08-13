import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from '../grid';

// import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay(image) {
    const newImage = image.map((item) => {
      return {
        ...item,
        filled: true
      }
    });
    return newImage;
  }

  render() {
    const { initialGameState } = this.props;
    const miniGridSize = 200;

    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        {initialGameState.map(item => (
          <div
            key={item.id}
            style={{
              width: `${miniGridSize}px`,
              height: `${miniGridSize}px`,
              margin: ".5rem 0"
            }}
          >
            <Link to={`/draw/${item.id}`}>
              <Grid
                fullsize={false}
                image={this.setDisplay(item.image)}
                colors={item.colors}
                cellSize={`${miniGridSize/Math.sqrt(item.image.length)}px`}
                onCellClick={() => {}}
                isComplete={true}
              />
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { initialGameState } = state;
  return {
    initialGameState
  };
};

export default connect(mapStateToProps, null)(Home);
