import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as changeColorActions from "../../actions/color";
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
    const { image, colors, activeColorId } = this.props;
    const colorsArr = Object.values(colors)
    return (
      <div className="App">
        <Grid
          image={image}
          colors={colorsArr}
          activeColorId={activeColorId}
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
  console.log(state.images[0]); // eslint-disable-line
  const { images, color } = state;
  return {
    image: images[0].image,
    activeColorId: color.activeColorId,
    colors: images[0].colors
  };
};

const mapDispatchToProps = dispatch => ({
  changeColorActions: bindActionCreators(changeColorActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
