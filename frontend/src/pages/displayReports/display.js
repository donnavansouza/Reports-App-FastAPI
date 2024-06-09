import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles.module.css';
import '../../index.css'

const DisplayReports = () => {
  const [reports, setReports] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:5000/reports');
      setReports(response.data);
      console.log(response.data);
      console.log(reports);

    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteReport(id) {
    try {
      await axios.delete(`http://localhost:5000/reports/${id}`);
      setReports(reports.filter((report) => report.id !== id));
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Display Reports</h1>
      </div>
      <div className={styles.displayReports}>
        {reports.map((reportItem) => (
          <Card
            key={reportItem.id}
            id={reportItem.id}
            author={reportItem.author}
            title={reportItem.title}
            report={reportItem.report}
            municipality={reportItem.municipality}
            year={reportItem.year}
            population={reportItem.population}
            extreme_poverty_percentage={reportItem.extreme_poverty_percentage}
            idhm={reportItem.idhm}
            budget={reportItem.budget}
            onDelete={deleteReport}
            styles={styles}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DisplayReports;
