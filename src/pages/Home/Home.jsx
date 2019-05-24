import BrandList from 'components/BrandList';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import AppProvider from 'providers/AppProvider';
import React from 'react';
import styles from './styles.module.scss';

const Home = () => (
  <AppProvider>
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.background} />
        <BrandList />
      </div>
    </div>
  </AppProvider>
);

export default Home;
