import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';

function Menu(props) {
  var menu = {
    marginTop: 7,
  }
  return (
    <div style={menu}>
        <About />
        <h3>gallery</h3>
        <h3>drawings</h3>
    </div>
  );
}

export default Menu;
