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
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
    // <div className={styles.header}>
    //       <Header />
    //       <Drawings />
    //   </div>
      <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show Texas
        </button>
        {!this.state.isHidden && <Texas />}
        </div>
    )
  }
}

// const Texas = () => (
//   <h1>this is texas</h1>
// );

export default Gallery;
