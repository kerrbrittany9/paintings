import React from "react";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import About from './About/About';
import Gallery from  './Gallery/Gallery';
import Texas from './Gallery/Texas';
import styles from './styles.css';
import { Switch, Route } from 'react-router-dom';

function App(props){
  return (
    <div className = {styles.body}>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/Texas" component={Texas} />
      </Switch>
    </div>
  );
}

export default App;
