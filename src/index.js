import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';


ReactDOM.render(

  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// good for development purposes, keeps the page from refreshing, which means that as we develop cthe code it wont reset the state
if (module.hot) {
  module.hot.accept();
}
