import React from "react";
import { Link } from "react-router-dom";
import Navbarcustom from "../components/navMenu-login";
import Header from "../components/header/Header";
import dumbbells from "../images/dumbbells.jpg";
import "../styles/signin.css";

//Functional Component
const LoginPage = () => {
  return (
    <div className="container">
      <Navbarcustom fixed="bottom" />
      {/* <Header /> */}
      <h3>Welcome to the workout journal</h3>
      {/* <Link to="/workouts">Show List of Workouts</Link> */}
      <img class="resize" src={dumbbells} alt="Dumbbells" />

      <h3>Login</h3>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
