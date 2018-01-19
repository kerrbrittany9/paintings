import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import Texas from './Texas';
import { Link } from 'react-router-dom';

function Gallery(props) {
  return (
    <div className = {styles.header}>
      <Link to="/Texas">Texas</Link>
    </div>
  );
}

export default Gallery;
