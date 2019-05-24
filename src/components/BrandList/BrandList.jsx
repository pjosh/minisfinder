import BrandCard from 'components/BrandCard';
import brands from 'data/brands';
import { withAppContext } from 'providers/AppProvider';
import React from 'react';
import styles from './styles.module.scss';

const BrandList = ({ context }) => (
  <ul className={styles.container}>
    {brands
      .filter(
        item =>
          context.tagsSelected.length < 1 || context.tagsSelected.every(r => item.tags.includes(r))
      )
      .map(brand => (
        <li key={brand.name}>
          <BrandCard {...brand} />
        </li>
      ))}
  </ul>
);

export default withAppContext(BrandList);
