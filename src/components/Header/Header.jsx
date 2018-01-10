import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

function Header(props) {
  var title = {
    fontSize: 64,
    margin: 56
  }
  var subtitle = {
    fontSize: 40,
    margin: 30
  }
  var image = {
    margin: 5
  }
  return (
    <div>
      <h1 style={title}><img style={image} src='./favicon.png'/> BRITTANY MEGAN HARDISON</h1>
      <h2 style={subtitle}>the mechanics of growing up</h2>
    </div>
  );
}

export default Header;
