import React from 'react';
import logo from './img/logo.svg';
import styles from './styles.module.scss';

const Logo = () => (
  <div className={styles.container}>
    <img src={logo} className={styles.logo} />
    <div className={styles.title}>MinisFinder</div>
  </div>
);

export default Logo;
