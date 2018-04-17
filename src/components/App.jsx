import React from "react";
import Header from "./Header/Header";
import Menew from "./Menu/Menew";
import About from './About/About';
import Gallery from  './Gallery/Gallery';
import Texas from './Gallery/Texas';
import styles from './styles.css';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div id="outer-container">
        <div className = {styles.body}>
          
          <Menew />
          <main id="page-wrap">
            <Header />
          </main>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/Texas" component={Texas} />
            <Route path="/#/" component={App} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
