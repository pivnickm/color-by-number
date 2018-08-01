import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as changeColorActions from "../../actions/color";
import * as colorImageActions from "../../actions/image";
import Grid from '../grid';
import ColorList from '../colors';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],//Object.values(test.colors),
      activeColorId: 0
    };

    this.setActiveColor = this.setActiveColor.bind(this);
  }

  setActiveColor(id) {
    console.log(id); // eslint-disable-line
    // this.setState({
    //   activeColorId: id
    // });
    this.props.changeColorActions.changeColor(id);
  }

  render() {
    const { activeImage, colors, activeColorId, colorImageActions } = this.props;
    const colorsArr = Object.values(colors)
    return (
      <div className="App">
        <Grid
          image={activeImage}
          colors={colorsArr}
          activeColorId={activeColorId}
          onCellClick={colorImageActions.changeColor}
        />
        <ColorList
          colors={colorsArr}
          activeColorId={activeColorId}
          setActiveColor={this.setActiveColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { activeImage, color } = state;
  return {
    activeImage: activeImage.image,
    activeColorId: color.activeColorId,
    colors: activeImage.colors
  };
};

const mapDispatchToProps = dispatch => ({
  changeColorActions: bindActionCreators(changeColorActions, dispatch),
  colorImageActions: bindActionCreators(colorImageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
