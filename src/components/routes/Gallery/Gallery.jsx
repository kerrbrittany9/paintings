import React from "react";
import styles from "./styles.css";
import PropTypes from "prop-types";
import Texas from "./Texas";
import Drawings from "./Drawings";
import Header from '../../Header/Header';
import { Link } from "react-router-dom";

function Gallery(props) {
  return (
    <div className={styles.header}>
      <Header />
      <Link className={styles.link} to="/Texas">
        {" "}
        let's see texas
      </Link>
      <Drawings />
    </div>
  );
}

export default Gallery;
