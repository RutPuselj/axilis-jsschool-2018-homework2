import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rgb from './components/Rgb';
import Bw from './components/Bw';
import './App.css';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Rgb} />
            <Route path="/rgb" component={Rgb}  />
            <Route path="/bw" component={Bw} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
