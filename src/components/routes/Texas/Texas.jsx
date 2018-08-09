import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles.css";
import Header from '../../Header/Header';
import Slider from 'react-slick';
import mark from './assets/mark.jpg';
import vincent from './assets/vincent.jpg';


// import birdsonwires from './assets/texas/birdsondemwires.jpg';
// import bridge from './assets/texas/bridge1.jpg';

function Texas(props) {
  return (
    <div>
      <Header />
      <div className={styles.texas}>
        <p>welcome to texas</p>
        <Slider
        dots
        centerMode={true}
        infinite
        autoplay
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        fade
        cssEase="linear"
        className="slick-slider-fade"

        >
          <div><img src={mark} alt="Art" /></div>
          <div><img src={vincent} alt="Things" /></div>
        </Slider>
        <div className={styles.insert}>
          <img src={vincent} alt="vincent"/>
          <img src={vincent} alt="vincent"/>
      </div>
    </div>
  </div>
  );
}

export default Texas;
