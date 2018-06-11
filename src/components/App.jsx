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

class App extends React.Component {
  render() {
    return (
      <div id="outer-container">
        <Menew />
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
