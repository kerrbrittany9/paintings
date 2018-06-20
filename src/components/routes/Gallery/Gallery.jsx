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
      DrawingsisHidden: true
    }
  }
  toggleHiddenTexas () {
    this.setState({
      TexasisHidden: !this.state.TexasisHidden
    })
  }
  toggleHiddenDrawings() {
    this.setState({
      DrawingsisHidden: !this.state.DrawingsisHidden
    })
  }
  render () {
    return (
      <div className={styles.header}>
        <Header />
        <button onClick={this.toggleHiddenDrawings.bind(this)} >
          Click to show Drawings
        </button>
        {!this.state.DrawingsisHidden && <Drawings />}
        <button onClick={this.toggleHiddenTexas.bind(this)} >
          Click to show Texas
        </button>
        {!this.state.TexasisHidden && <Texas />}
      </div>
    )
  }
}

export default Gallery;
