import Button from 'components/Button';
import React from 'react';
import styles from './styles.module.scss';

const BurgerButton = ({ onClick }) => (
  <Button onClick={onClick} className={styles.container}>
    <div />
    <div />
    <div />
  </Button>
);

export default BurgerButton;
