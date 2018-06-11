import React from 'react';
import About from '../routes/About/About';
import Gallery from  '../routes/Gallery/Gallery';
import styles from './styles.css';
import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';

function Menew(props) {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#9d9a9a'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#fff'
    },
    bmMenu: {
      background: '#B4C5D4',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (

    <Menu styles={ styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <div className="linking">
        <Link className="navbar" id="home" to="/">Home</Link> 
        <Link className="navbar" id="about" to="/About">About</Link>
        <Link className="navbar" id="gallery" to="/Gallery">Gallery</Link> 
      </div>
    </Menu>
  );
}

export default Menew;
