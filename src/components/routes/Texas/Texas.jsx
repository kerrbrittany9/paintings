import React from 'react';
// import styles from './styles.css';
import PropTypes from 'prop-types';
import styles from "./styles.css";
import Header from '../../Header/Header';


// import Slider from 'react-slick';
// import asti from './assets/texas/asti1.jpg';
// import bartonsprings from './assets/texas/bartonsprings.jpg';
// import birdsonwires from './assets/texas/birdsondemwires.jpg';
// import bridge from './assets/texas/bridge1.jpg';

function Texas(props) {
  return (
    <div>
      <Header />
      {/* <Slider
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
        <div className = {styles.slider}><img src={asti} alt="Art" /></div>
        <div className = {styles.slider}><img src={bartonsprings} alt="Things" /></div>
        <div className = {styles.slider}><img src={birdsonwires} alt="STuff" /></div>
      </Slider>
      <div className = {styles.body}>
        <img className = {styles.image} src={bridge} alt="bridge"/>
        <img className = {styles.image} src={bridge} alt="bridge"/>
      </div> */}
      <h1 >this is texas</h1>
  </div>
  );
}

export default Texas;
