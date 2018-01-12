import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

function Gallery(props) {
  var header = {
    textAlign: 'center',
  }
  var image = {
    display: 'block',
  }

  return (
    <div>
      <h3 style={header}>gallery</h3>
        <Slider
         dots
         infinite
         autoplay
         speed={500}
         slidesToShow={1}
         slidesToScroll={1}
         fade
         cssEase="linear"
         className="slick-slider-fade"
       >
         <div style={image}><img src='./favicon.png' alt="Art" /></div>
         <div style={image}><img src='./favicon.png' alt="Things" /></div>
         <div style={image}><img src='./favicon.png' alt="STuff" /></div>
         <div style={image}><img src='./favicon.png' alt="Be" /></div>
       </Slider>
    </div>
  );
}

export default Gallery;
