import React, { Component } from 'react';
import './index.css';


class TTTMobile extends Component {
  style1 = {
    overflow: "hidden",
    background: "#212733",
    border: "1px solid rgba(0,0,0,.08)",
    borderRadius: "4px",
    height: "700px",
    width: "100%"
  };

  render() {
    return (
      <div className="row">
          <div data-snack-id="@git/github.com/dcorvi/tic-tac-toe-mobile-app" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="dark" style={this.style1}></div>
      </div>
    );
  }
}

export default TTTMobile;
