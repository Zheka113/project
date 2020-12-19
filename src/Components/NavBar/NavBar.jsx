import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return (
      <div className="NavBar">
        <h1>NavBar</h1>  
        <div><NavLink to="/Music" activeStyle={{backgroundColor:'black', color: 'white'}}>Music</NavLink></div>
        <div><NavLink to="/Photo" activeStyle={{backgroundColor:'black', color: 'white'}}>Photo</NavLink></div>
        <div><NavLink to="/News" activeStyle={{backgroundColor:'black', color: 'white'}}>News</NavLink></div>
        <div><NavLink to="/Portfolio" activeStyle={{backgroundColor:'black', color: 'white'}}>Portfolio</NavLink></div>
      </div>
    );
  }

export default NavBar;