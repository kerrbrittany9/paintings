import React from "react";
import Header from "./Header/Header";
import Menu from "./Menu";



function App(props){
  var body = {
    margin: 20,
  }
  return (
    <div style={body}>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
