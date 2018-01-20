import React from 'react';
import About from '../About/About';
import Gallery from  '../Gallery/Gallery';
import styles from './styles.css';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className={styles.menu}>
      <Link to="/About">About</Link> |
      <Link to="/Gallery">Gallery</Link> |
      <Link to="/Drawings">Drawings</Link>
    </div>
  );
}

export default Menu;
