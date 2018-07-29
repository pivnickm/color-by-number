import React, { Component } from 'react';

import './index.css';
import Grid from '../grid';
import ColorList from '../colors';

const test = [{
  filled: false
}, {
  filled: false
}, {
  filled: false
}, {
  filled: false,
  color: "#00FF00"
}, {
  filled: false,
  color: "#00FF00"
}, {
  filled: false,
  color: "#00FF00"
}, {
  filled: false,
  color: "#00FF00"
}, {
  filled: false
}, {
  filled: false
}, {
  filled: false
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#0000FF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#00FFFF"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}, {
  filled: false,
  color: "#ff0000"
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      activeColorId: 0
    };

    this.getColors = this.getColors.bind(this);
    this.setActiveColor = this.setActiveColor.bind(this);
  }

  componentDidMount() {
    if (this.state.colors.length < 1) {
      this.setState({
        colors: this.getColors()
      });
    }
  }

  getColors(){
    const colorList = test.reduce((acc, item) => {
      (item.color && acc.indexOf(item.color) < 0) ? acc.push(item.color) : null; //eslint-disable-line
      return acc;
    }, []);
    return colorList;
  }

  setActiveColor(id) {
    console.log(id); // eslint-disable-line
    this.setState({
      activeColorId: id
    });
  }

  render() {
    return (
      <div className="App">
        <Grid
          image={test}
          colors={this.state.colors}
          activeColorId={this.state.activeColorId}
        />
        <ColorList
          colors={this.state.colors}
          activeColorId={this.state.activeColorId}
          setActiveColor={this.setActiveColor}
        />
      </div>
    );
  }
}

export default App;
