import React from "react";
// import { faSave } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/fontawesome-free-solid";

import "../../styles/createWorkoutBlock.css";

const CreateWorkoutBlock = ({ onCreateWorkout }) => {
  const onSubmitHandler = event => {
    event.preventDefault();

    const { name, reps, date } = event.target.elements;

    if (name.value && reps.value && date.value) {
      onCreateWorkout(name.value, reps.value, date.value);
    }

    //resetting form inputs for createworkoutblock
    name.value = "";
    reps.value = "";
    date.value = "";
  };
  return (
    <form onSubmit={onSubmitHandler} className="create-workout-block">
      {/* <label for="name">Name</label> */}
      <input type="text" placeholder="Workout Name" name="name" />
      <input type="number" placeholder="Reps" name="reps" />
      <input type="date" name="date" />
      <button className="saveButton">
        {/* <FontAwesomeIcon icon={faSave} /> */}
        Save
      </button>
    </form>
  );
};

export default CreateWorkoutBlock;
