import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
      <div className={styles.logo}>
        <div>Jo</div>
        <img src={logo} alt="logo"/>
        <div>bs</div>
      </div>
  );
};

export default Logo;