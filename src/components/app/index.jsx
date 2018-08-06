import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import * as changeColorActions from "../../actions/color";
import * as colorImageActions from "../../actions/image";
import Grid from '../grid';
import ColorList from '../colors';
import ImageCreator from '../admin/image-creator';

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
    this.props.changeColorActions.changeColor(id);
  }

  render() {
    const { activeImage, colors, activeColorId, colorImageActions } = this.props;
    const colorsArr = Object.values(colors)
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" render={() => (
              <React.Fragment>
                <Grid
                  image={activeImage}
                  colors={colorsArr}
                  activeColorId={activeColorId}
                  cellSize={100/Math.sqrt(activeImage.length)}
                  onCellClick={colorImageActions.doFillCell}
                />
                <ColorList
                  colors={colorsArr}
                  activeColorId={activeColorId}
                  setActiveColor={this.setActiveColor}
                />
              </React.Fragment>
            )}/>
            <Route exact path="/admin" render={() => (
              <ImageCreator />
            )}/>
          </React.Fragment>
        </Router>
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
