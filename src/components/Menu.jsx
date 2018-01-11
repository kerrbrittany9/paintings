import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Gallery from  './Gallery/Gallery';

function Menu(props) {
  var menu = {
    marginTop: 7,
  }
  return (
    <div style={menu}>
        <About />
        <Gallery />
        <h3>drawings</h3>
    </div>
  );
}

export default Menu;
