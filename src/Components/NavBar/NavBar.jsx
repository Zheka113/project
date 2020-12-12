import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return (
      <div className="NavBar">
        <h1>NavBar</h1>  
        <div><NavLink to="/Music" activeClassName="selected">Music</NavLink></div>
        <div><NavLink to="/Photo" activeClassName="selected">Photo</NavLink></div>
        <div><NavLink to="/News" activeClassName="selected">News</NavLink></div>
        <div><NavLink to="/Portfolio" activeClassName="selected">Portfolio</NavLink></div>
      </div>
    );
  }

export default NavBar;