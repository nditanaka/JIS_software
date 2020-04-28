import React, { useState } from "react";
import { fb, auth } from "../services/firebase";
// import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/header/Header";
import WorkoutList from "../components/workoutList/WorkoutList";
import WorkoutItem from "../components/workoutList/WorkoutItem";
import CreateWorkoutBlock from "../components/createWorkoutBlock/CreateWorkoutBlock";
import { ID } from "../helpers/id";
import { randomFill } from "crypto";
import FirebaseWorkoutsBlock from "../components/firebaseWorkouts/FirebaseWorkoutsBlock";
import Navbarcustom from "../components/navMenu";
const WorkoutsPage = () => {
  const [exercises, setExercises] = useState([]);
  //add new workouts
  const createWorkoutSession = (name, reps, date) => {
    const newWorkoutSession = { id: ID(randomFill), name, reps, date };
    const newState = [...exercises];

    newState.push(newWorkoutSession);

    setExercises(newState);
  };
  //delete existing workouts
  const deleteItem = id => {
    const newExercises = exercises.filter(ex => ex.id !== id);
    setExercises(newExercises);
  };

  return (
    <div className="container">
      <Navbarcustom fixed="bottom" />
      <Header />
      <CreateWorkoutBlock onCreateWorkout={createWorkoutSession} />
      <WorkoutList>
        {exercises.map(({ id, name, reps, date }) => (
          <WorkoutItem
            key={id}
            id={id}
            name={name}
            reps={reps}
            date={date}
            onDelete={deleteItem}
          />
        ))}
      </WorkoutList>
      <FirebaseWorkoutsBlock />
    </div>
  );
};

export default WorkoutsPage;
