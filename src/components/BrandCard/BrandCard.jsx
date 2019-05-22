import React from 'react';
import styles from './styles.module.scss';

const BrandCard = ({ name, url, photo }) => (
  <a
    className={styles.container}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
    style={{ backgroundImage: `url('${photo}')` }}
  >
    <div className={styles.name}>{name}</div>
  </a>
);

export default BrandCard;
