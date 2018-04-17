import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import Texas from './Texas';
import { Link } from 'react-router-dom';

function Gallery(props) {
  return (
    <div className = {styles.header}>
      <p>let's see<Link to="/Texas"> texas</Link></p>
    </div>
  );
}

export default Gallery;
