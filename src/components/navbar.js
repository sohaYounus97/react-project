
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand ">Fitness & Exercise Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item text-dark">
          <Link to="/" className="nav-link text-dark">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link text-dark">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/exercise" className="nav-link text-dark">Exercises</Link>
          </li>
          <li className="navbar-item text-dark">
          <Link to="/create" className="nav-link text-dark">Create Exercise Log</Link>
          </li>
          <li className="navbar-item text-dark">
          <Link to="/user" className="nav-link text-dark">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}