import React from "react";
import { Link } from "react-router-dom";
import ohno from "../images/ohno.jpg";
import Navbarcustom from "../components/navMenu";
import "../styles/404.css";

//Functional Component
const MainPage = () => {
  return (
    <div className="lostpage, container">
      <Navbarcustom fixed="bottom" />
      <div className="pagecontent">
        <h3>Oops! We can't find that page!</h3>
        <img class="resize" src={ohno} alt="Logo" />
        <br></br>
        <Link to="/">Go back to homepage</Link>
      </div>
    </div>
  );
};

export default MainPage;
