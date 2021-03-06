import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as changeColorActions from "../../actions/color";
import * as colorImageActions from "../../actions/image";
import ColorList from '../colors';
import SvgGrid from '../svg';

class Easel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: null
    }

    this.setActiveColor = this.setActiveColor.bind(this);
    this.getCellPosition = this.getCellPosition.bind(this);
  }

  componentDidMount() {
    // dispatch action creator to set state.initialGameState[params.id]
    // and then set it on the active image and see what happens.
    // at some point there needs to be a state dump to localstorage
    this.props.colorImageActions.selectImage(this.props.match.params.id);
  }

  getCellPosition() {
    const cellSize = window.innerWidth / 50
    const maxPerRow = 50;
    let x;
    let y;
    const positions = [];

    for (let i = 0; i < maxPerRow; i++) {
      for (let j = 0; j < maxPerRow; j++) {
        x = cellSize * j;
        y = cellSize * i;
        positions.push({x, y});
      }
    }
    return positions;
  }

  setActiveColor(id) {
    this.props.changeColorActions.changeColor(id);
  }

  render() {
    const {
      activeImage,
      colors,
      activeColorId,
      colorImageActions,
      imageStats
    } = this.props;
    const colorsArr = Object.values(colors)
    const positions = this.getCellPosition()
    return (
      <React.Fragment>
        { activeImage &&
          <React.Fragment>
            <SvgGrid
              width={window.innerWidth}
              height={window.innerWidth}
              image={activeImage}
              colors={colorsArr}
              activeColorId={activeColorId}
              cellSize={window.innerWidth/50}
              positions={positions}
              onCellClick={colorImageActions.doFillCell}
              isComplete={imageStats.every(x => x === 0)}
            />
            <ColorList
              colors={colorsArr}
              activeColorId={activeColorId}
              setActiveColor={this.setActiveColor}
            />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  const { activeImage, color } = state;
  return {
    id: activeImage.id,
    activeImage: activeImage.image,
    imageStats: activeImage.stats,
    activeColorId: color.activeColorId,
    colors: activeImage.colors
  };
};

const mapDispatchToProps = dispatch => ({
  changeColorActions: bindActionCreators(changeColorActions, dispatch),
  colorImageActions: bindActionCreators(colorImageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Easel);
