import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Easel from '../easel';
import Home from '../home';
import ImageCreator from '../admin/image-creator';

import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/draw/:id" component={Easel}/>
            <Route exact path="/admin" component={ImageCreator}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
