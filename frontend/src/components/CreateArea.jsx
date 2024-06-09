import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [report, setReport] = useState({
    title: props.title || "",
    content: props.report || "",
    author: props.author || "",
  });

  useEffect(() => {
    setReport({
      title: props.title || "",
      content: props.report || "",
      author: props.author || "",
    });
  }, [props.title, props.report, props.author]);

  function handleChange(event) {
    const { name, value } = event.target;

    setReport((prevReport) => {
      return {
        ...prevReport,
        [name]: value,
      };
    });
  }

  function submitReport(event) {
    event.preventDefault();
    props.onAdd(report);
    setReport({
      title: "",
      content: "",
      author: "",
    });
  }

  return (
    <div className={props.styles.createArea}>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={report.title}
          disabled={props.activated}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={report.content}
          placeholder="Write a report..."
          rows={props.rows ? props.rows : 6}
          disabled={props.activated}
        />
        <input
          name="author"
          onChange={handleChange}
          value={report.author}
          placeholder="Author"
          disabled={props.activated}
        />
        <button hidden={props.activated} disabled={props.activated} onClick={submitReport}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
