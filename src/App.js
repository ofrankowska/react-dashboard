import React, { Component } from 'react'
import './App.css';
import Main from './Main';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Main/>} />
        </Switch>
      </div>
    );
  }

}

export default App;
