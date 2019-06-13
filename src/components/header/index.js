import React, { Component } from 'react';
import './index.css';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar topnav">
          <NavLink className="navbar-brand topnav" to="/">Dennis Corvi</NavLink>

            <ul className="nav justify-content-end">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blogs</NavLink>
              </li>
            </ul>

        </nav>
      </header>
    );
  }
}

export default Header;
