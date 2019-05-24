import Logo from 'components/Logo';
import TagList from 'components/TagList';
import React from 'react';
import styles from './styles.module.scss';

const Sidebar = () => (
  <div className={styles.container}>
    <Logo className={styles.logo} />
    <TagList className={styles.tagList} />
  </div>
);

export default Sidebar;
