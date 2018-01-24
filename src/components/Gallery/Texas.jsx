import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import asti from './assets/texas/asti.jpg';
import bartonsprings from './assets/texas/barton-springs.jpg';

function Texas(props) {
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
       <div className = {styles.image}><img src={asti} alt="Art" /></div>
       <div className = {styles.image}><img src={bartonsprings} alt="Things" /></div>
       <div className = {styles.image}><img src={asti} alt="STuff" /></div>
     </Slider>
    </div>
  );
}

export default Texas;
