import React from 'react';
import herro from '../../../../assets/images/Image-herro.png';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
  return (
      <div className={styles.home_header}>
        <div className={styles.description}>
          <h1>Find the job of
            your Dreams</h1>
          <p>Find You New Job Today! New Job Postings Everyday just for you, browse the job you want and apply wherever you want</p>
        </div>
        <div>
          <img src={herro} alt="Herro"/>
        </div>
      </div>
  );
};

export default HomeHeader;