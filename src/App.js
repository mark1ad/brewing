import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import './App.css';

import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
