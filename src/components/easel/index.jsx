import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as changeColorActions from "../../actions/color";
import * as colorImageActions from "../../actions/image";
import Grid from '../grid';
import ColorList from '../colors';

// import './index.css';

class Easel extends Component {
  constructor(props) {
    super(props);

    this.setActiveColor = this.setActiveColor.bind(this);
  }

  componentDidMount() {
    console.log("match", this.props.match.params.id); // eslint-disable-line
    // dispatch action creator to set state.initialGameState[params.id]
    // and then set it on the active image and see what happens.
    // at some point there needs to be a state dump to localstorage
    this.props.colorImageActions.selectImage(this.props.match.params.id);
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

    return (
      <React.Fragment>
        { activeImage &&
          <Grid
            image={activeImage}
            colors={colorsArr}
            activeColorId={activeColorId}
            cellSize={100/Math.sqrt(activeImage ? activeImage.length : 1)}
            onCellClick={colorImageActions.doFillCell}
            isComplete={imageStats.every(x => x === 0)}
          />
        }
          <ColorList
            colors={colorsArr}
            activeColorId={activeColorId}
            setActiveColor={this.setActiveColor}
          />
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  const { activeImage, color } = state;
  return {
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
