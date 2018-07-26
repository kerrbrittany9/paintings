import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';
import Header from '../../Header/Header';
import brittany from './assets/brittany.jpg';

function About(props) {
  return (
    <div className={styles.header}>
      <Header />
      <div className={styles.typing}>
        <h1>About</h1>
        <p>I started painting at the age of 4. My mother, grandmother, and great-grandmother are or were all painters. So when I make art it always gives me the sensation that I am having a secret conversation with the ladies of my family. It is something that I enjoy very much and the reason I try to bring a sense of happiness and humor to my pieces and depict exotic pieces of cozy from the world I have traveled. More often than not, color and texture pepper my work and my hope is that one walks away feeling like they have just visited a close friend's house.</p>
        <img src={brittany} alt='brittany'/>
      </div>
    </div>
  );
}

export default About;
