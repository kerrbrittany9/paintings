import React from "react";
import styles from "./styles.css";
import PropTypes from "prop-types";
import Texas from "./Texas";
import Drawings from "./Drawings";
import Header from '../../Header/Header';
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  constructor () {
    super()
    this.state = {
      TexasisHidden: true,
      DrawingsisHidden: true,
    }
  }

  render () {
    return (
      <div className={styles.header}>
        <Header />
        <div onClick={() => this.setState({ DrawingsisHidden: !this.state.DrawingsisHidden })}>
          {this.state.DrawingsisHidden ? (
            <button>
              Click to show Drawings
            </button> 
          ) : (
            <Drawings />
          )}
        </div>
        
        <div onClick={() => this.setState({ TexasisHidden: !this.state.TexasisHidden })} >
          {this.state.TexasisHidden ? (
            <button>
              Click to show Texas
            </button>
            ) : (
              <Texas />
           )}
        </div>
        
      </div>
    )
  }
}

export default Gallery;
