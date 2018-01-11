import React from 'react';
import Slider from 'react-slick';
// import vincent from './assets/vincent.jpg';

function Gallery(props) {
  var header = {
    textAlign: 'center',
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
         <div><img alt="Art" /></div>
         <div><img alt="Things" /></div>
         <div><img alt="STuff" /></div>
         <div><img alt="Be" /></div>
       </Slider>
    </div>
  );
}

export default Gallery;
