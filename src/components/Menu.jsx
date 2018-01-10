import React from 'react';

function Menu(props) {
  var menu = {
    marginTop: 7,
  }
  return (
    <div style={menu}>
      <h3>about</h3>
      <h3>gallery</h3>
      <h3>drawings</h3>
    </div>
  );
}

export default Menu;
