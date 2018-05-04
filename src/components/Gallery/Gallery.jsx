import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import Texas from './Texas';
import Drawings from './Drawings';
import { Link } from 'react-router-dom';

function Gallery(props) {
  return (
    <div className = {styles.header}>
      <Link className = {styles.link} to="/Texas"> let's see texas</Link>
      <Link className = {styles.linkAgain} to="/Drawings"> drawings</Link>
    </div>
  );
}

export default Gallery;
