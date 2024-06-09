import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import '../../index.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CreateArea from '../../components/CreateArea';
import Municipality_Card from '../../components/Municipality_card';
import SearchMunYearCard from '../../components/SearchMunYearCard';


const ViewAndEdit = () => {
  const { id } = useParams();

  const [report, setReport] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:5000/reports/${id}`);
      setReport(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Could not resolve ',
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [editing, setEditing] = useState(true);

  async function editReport(editedReport) {
    try {
      const response = await axios.put(`http://localhost:5000/reports/${id}`, {
        title: String(editedReport.title),
        report: String(editedReport.content),
        author: String(editedReport.author),
        municipality: report.municipality,
        year: report.year
    })
    setReport(response.data);
    console.log(response.data);
    Swal.fire({
      icon: 'success',
      title: 'Report edited successfully!',
    });
  }catch (error) {
      console.error('Error editing report:', error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Could not resolve ',
      });
    }
  }

  const editFunction = () => {
    setEditing(!editing);
  };

  return (
    <div>
      <Header />
      <h1 className={styles.h1_viewAndEdit}>View and Edit Report</h1>
      <div className={styles.viewAndEdit}>
        <div className={styles.editArea}>
          <CreateArea
            title={report.title}
            author={report.author}
            report={report.report}
            styles={styles}
            rows="15"
            activated={editing}
            onAdd={editReport}
          />
        </div>
        <div className={styles.dataArea}>
          <SearchMunYearCard
            function_render_data={fetchData}
            municipality_name={report.municipality}
            year={report.year}
            styles={styles}
            activated={true}
          />
          <Municipality_Card
            data={report}
            styles={styles}
          />
          <button className={styles.edit_btn} onClick={editFunction} type="submit">Edit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAndEdit;