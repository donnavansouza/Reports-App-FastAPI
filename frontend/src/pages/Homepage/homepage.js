import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles.module.css';
import '../../index.css'

const Homepage = () => (
  <div>
    <Header />
    <div className={styles.content}>
      <h2>Welcome to Reports App</h2>
      <div className={styles.links}>
        <form className={styles.homepageForm} action="/create">
          <button className={styles.homepageBtn} type="submit">New Report</button>
        </form>
        <form className={styles.homepageForm} action="/display">
          <button className={styles.homepageBtn} type="submit">View Reports</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

export default Homepage;
