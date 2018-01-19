import React from 'react';
import About from './About/About';
import Gallery from  './Gallery/Gallery';
import { Link } from 'react-router-dom';

function Menu(props) {
  var menu = {
    marginTop: 7,
  }
  return (
    <div style={menu}>
      <Link to="/About">About</Link> |
      <Link to="/Gallery">Gallery</Link> |
      <Link to="/Drawings">Drawings</Link>
    </div>
  );
}

export default Menu;
