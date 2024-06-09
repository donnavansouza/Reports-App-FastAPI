import React, { useState } from 'react';
import axios from 'axios';
import CreateArea from '../../components/CreateArea';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SerchMunYearCard from '../../components/SearchMunYearCard';
import styles from './styles.module.css';
import '../../index.css';
import Municipality_card from '../../components/Municipality_card';
import Swal from 'sweetalert2';

const CreateReport = () => {
  const [id, setId] = useState(0);

  const [municipalityFound, setMunicipalityFound] = useState(true);

  const [dataMunicipalityCard, setdataMunicipalityCard] = useState({
    municipality_name: "",
    year: "",
    population: "",
    extreme_poverty_percentage: "",
    idhm: "",
  });

  async function renderMunicipalityData(municipality_name, year) {
    try {
      const response = await axios.post('http://localhost:5000/reports', {
        title: "Some Title",
        report: "Some Report Content",
        author: "Author Name",
        municipality: municipality_name,
        year: year
      });
      setId(response.data.id);
      console.log(response.data);
      setdataMunicipalityCard({
        municipality_name: response.data.municipality,
        year: response.data.year,
        population: response.data.population,
        extreme_poverty_percentage: response.data.extreme_poverty_percentage,
        idhm: response.data.idhm,
        budget: response.data.budget
      });
      setMunicipalityFound(!municipalityFound);
    } catch (error) {
      console.error('Error fetching municipality data:', error);
      Swal.fire({
        title: "Error!",
        text: "Report not created! There is no data for this municipality!",
        icon: "error"
      });
    }
  }

  async function addReport(newReport) {
    try {
      const response = await axios.put(`http://localhost:5000/reports/${id}`, {
        title: newReport.title || "Some Title",
        report: newReport.content || "Some Report Content",
        author: newReport.author || "Author Name",
        municipality: dataMunicipalityCard.municipality_name,
        year: dataMunicipalityCard.year
      });
      setdataMunicipalityCard({
        municipality_name: response.data.municipality,
        year: response.data.year,
        population: response.data.population,
        extreme_poverty_percentage: response.data.extreme_poverty_percentage,
        idhm: response.data.IDHM,
        budget: response.data.budget
      });
      Swal.fire({
        title: "OK!",
        text: "Report created successfully!",
        icon: "success"
      });
      setMunicipalityFound(!municipalityFound);
    } catch (error) {
      console.error('Error fetching municipality data:', error);
      Swal.fire({
        title: "Error!",
        text: "Report not created!",
        icon: "error"
      });
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.createReport}>
        <h1>Create a New Report</h1>
        <div className={styles.topCreateArea}>
          <SerchMunYearCard functionRenderData={renderMunicipalityData} styles={styles} />
          <Municipality_card data={dataMunicipalityCard} styles={styles} />
        </div>
        <div className={styles.bottomCreateArea}>
          <CreateArea onAdd={addReport} styles={styles} activated={municipalityFound} title={""} author={""} report={""} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateReport;  
