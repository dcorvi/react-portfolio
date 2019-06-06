import React, { Component } from 'react';
import './index.css';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Dennis Corvi</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/index">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/maboard">Projects</NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
