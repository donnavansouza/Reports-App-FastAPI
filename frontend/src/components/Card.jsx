import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Card(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={props.styles.card}>
      <div>
        <h1>{props.title}</h1>
        <p>{props.municipality}</p>
        <p>{props.year}</p>
        <p>{props.author}</p>
      </div>
      <div>
        <button className={props.styles.btn} onClick={handleClick}>
          <DeleteIcon />
        </button>
        <form
          className={props.styles.editForm}
          action={`/viewAndEdit/${props.id}`}
          method="get"
        >
          <button className={props.styles.btn} type="submit">
            <VisibilityIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
