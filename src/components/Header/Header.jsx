import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

function Header(props) {
  return (
    <div className = {styles.body}>
      <h1 className = {styles.title}>BRITTANY MEGAN HARDISON</h1>
      <h2 className = {styles.subtitle}>the mechanics of growing up</h2>
    </div>
  );
}

export default Header;
