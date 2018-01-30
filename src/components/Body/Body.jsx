import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';
import gas from './assets/gas1.jpg';

function Body(props) {
  return (
    <div>
      <img className={styles.cover} src={gas} alt='cover'/>
    </div>
  );
}

export default Body;
