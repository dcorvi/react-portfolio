import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Landing from './views/landing';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className="container">
      <div className="content">
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/index' render={() => <Landing />} />
        </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
