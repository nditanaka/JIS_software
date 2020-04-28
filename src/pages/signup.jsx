import React from "react";
import { Link } from "react-router-dom";
import Navbarcustom from "../components/navMenu-login";
import Header from "../components/header/Header";
import dumbbells from "../images/dumbbells.jpg";
import "../styles/signin.css";

//Functional Component
const SignupPage = () => {
  return (
    <div className="container">
      <Navbarcustom fixed="bottom" />
      <Header />
      <h3>Welcome to the workout journal</h3>
      <img class="resize" src={dumbbells} alt="Dumbbells" />
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

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

        <button
          // type="submit"
          className="btn btn-primary btn-block"
          href="/journal"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">sign in?</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
