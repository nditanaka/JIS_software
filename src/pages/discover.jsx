import React from "react";
import { Link } from "react-router-dom";
import Navbarcustom from "../components/navMenu-login";
import Header from "../components/header/Header";
import dumbbells from "../images/dumbbells.jpg";
import WorkoutTable from "../components/workouttable";
import "../styles/workouttable.css";

//Functional Component
const DiscoverPage = () => {
  return (
    <div className="container">
      <Navbarcustom fixed="bottom" />
      <Header />
      <h3>Welcome to the workout journal</h3>
      <Link to="/workouts">Show Workout Progress</Link>
      <WorkoutTable />
    </div>
  );
};

export default DiscoverPage;
