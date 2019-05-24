import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

const Button = ({ children, className, onClick }) => (
  <button className={classnames(styles.container, className)} onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
