import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Easel from '../easel';
import ImageCreator from '../admin/image-creator';

import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" render={() => (
              <div>
                Home!
                <Link to="/draw/0">0</Link><br />
                <Link to="/draw/1">1</Link><br />
                <Link to="/draw/2">2</Link><br />
                <Link to="/draw/3">3</Link><br />
              </div>
            )}/>
            <Route path="/draw/:id" component={Easel}/>
            <Route exact path="/admin" component={ImageCreator}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
