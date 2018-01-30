import React from "react";
import Header from "./Header/Header";
import Menew from "./Menu/Menew";
import About from './About/About';
import Gallery from  './Gallery/Gallery';
import Body from  './Body/Body';
import Texas from './Gallery/Texas';
import styles from './styles.css';
import { Switch, Route } from 'react-router-dom';

function App(props){
  return (
    <div className = {styles.body}>
      <Menew />
      <Header />
      <Body />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/Texas" component={Texas} />
      </Switch>
    </div>
  );
}

export default App;
