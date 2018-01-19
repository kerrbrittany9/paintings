import React from "react";
import Header from "./Header/Header";
import Menu from "./Menu";
import About from './About/About';
import Gallery from  './Gallery/Gallery';
import { Switch, Route } from 'react-router-dom';

function App(props){
  var body = {
    margin: 100,
    textAlign: 'center',
  }
  return (
    <div style={body}>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
