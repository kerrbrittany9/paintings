import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';
import Body from  '../Body/Body';

function Header(props) {
  return (
    <div>
      <h1 className = {styles.title}>BRITTANY MEGAN HARDISON</h1>
      <Body />
    </div>
  );
}

export default Header;
