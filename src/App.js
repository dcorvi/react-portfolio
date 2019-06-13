import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Landing from './views/landing';
import About from './views/about';
import Contact from './views/contact';
import Blog from './views/blog';


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
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/contact' render={() => <Contact />} />
          <Route exact path='/blog' render={() => <Blog />} />
        </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
