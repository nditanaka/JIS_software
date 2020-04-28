import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/fontawesome-free-solid";

import "../../styles/workoutItem.css";

const WorkoutItem = ({ name, reps, id, date, onDelete }) => (
  <li onClick={() => onDelete(id)}>
    <div className="workout-item">
      <span className="workout-item-name">{name}</span>
      <span className="workout-item-count">{reps} reps</span>
      <span className="workout-item-date">{date}</span>
      <span className="trash">
        {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
        Delete
      </span>
    </div>
  </li>
);

export default WorkoutItem;
