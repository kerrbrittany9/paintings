import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import vincent from  './assets/vincent.jpg';
import brand from './assets/mark.jpg';
import img from './assets/IMG_2687.jpg';

function Gallery(props) {
  return (
    <div className = {styles.header}>
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
       <div className = {styles.image}><img src='./favicon.png' alt="Art" /></div>
       <div className = {styles.image}><img src={vincent} alt="Things" /></div>
       <div className = {styles.image}><img src={brand} alt="STuff" /></div>
       <div className = {styles.image}><img src={img} alt="Be" /></div>
     </Slider>
    </div>
  );
}

export default Gallery;
