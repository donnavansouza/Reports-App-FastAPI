import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';

function SearchMunYearCard(props) {
  const [formData, setFormData] = useState({
    Municipality_name: props.municipality_name || "",
    Year: props.year || "",
  });

  useEffect(() => {
    setFormData({
      Municipality_name: props.municipality_name || "",
      Year: props.year || "",
    });
  }, [props.municipality_name, props.year]);

  const handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here (e.g., send data to a server or perform a search)
    props.functionRenderData(formData.Municipality_name, formData.Year);

    // Reset the form after submission
    setFormData({
      Municipality_name: "",
      Year: "",
    });
  };

  return (
    <div className={props.styles.SearchMunYearCard}>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="Municipality_name"
          onChange={handleInputChange}
          placeholder="Municipality Name"
          value={formData.Municipality_name}
          disabled={props.activated}
        />
        <input
          type="text"
          name="Year"
          onChange={handleInputChange}
          placeholder="Year"
          value={formData.Year}
          disabled={props.activated}
        />
        <button hidden={props.activated}  type="submit"><AddIcon/></button>
      </form>
    </div>
  );
}

export default SearchMunYearCard;
