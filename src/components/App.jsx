import React from "react";
import Header from "./Header/Header";
import Menew from "./Menu/Menew";
import About from "./routes/About/About";
import Home from "./routes/Home/Home";
import Gallery from "./routes/Gallery/Gallery";
import Texas from "./routes/Gallery/Texas";
import styles from "./styles.css";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }


  render() {
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
        fontSize: '1.15em',
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
      <div id="outer-container">
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => {this.handleStateChange(state)}} styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <div>
            <Link onClick={() => {this.closeMenu()}} className="navbar" id="home" to="/">Home</Link>
            <Link onClick={() => {this.closeMenu()}} className="navbar" id="about" to="/About">About</Link>
            <Link onClick={() => {this.closeMenu()}} className="navbar" id="gallery" to="/Gallery">Gallery</Link>
          </div>
        </Menu>

        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          {/* <Route path="/Texas" component={Texas} /> */}
          <Route path="/" component={Home} />
        </Switch>
        <main id="page-wrap">
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
