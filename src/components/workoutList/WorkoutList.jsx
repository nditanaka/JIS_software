import React from "react";

import "../../styles/workoutList.css";

const WorkoutList = ({ children }) => (
  <div className="workout-list">{children}</div>
);

// attempt to add keys to divs
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const WorkoutList = workouts.map((children, number) => (
//   <div className="workout-list" key={number.toString()}>
//     {children}
//   </div>
// ));
export default WorkoutList;
