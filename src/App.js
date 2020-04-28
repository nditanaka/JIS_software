import React, { Component } from "react";
import "./App.css";
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import WorkoutsPage from "./pages/workouts";
import NotFoundPage from "./pages/404";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import JournalPage from "./pages/journal";
import DiscoverPage from "./pages/discover";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*All our Routes goes here!*/}
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/discover" component={DiscoverPage} />
          <Route exact path="/workouts" component={WorkoutsPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/journal" component={JournalPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
