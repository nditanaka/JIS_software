import React from "react";
// import { fb, auth } from "./services/firebase";
import { db } from "../../services/firebase";

class FirebaseWorkoutsBlock extends React.Component {
  state = { users: null };

  componentDidMount() {
    console.log("mounted");
    db.collection("users")
      .get()
      .then(snapshot => {
        console.log(snapshot);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="firebaseworkouts">
        <h2>Fire Base workouts</h2>
      </div>
    );
  }
}

export default FirebaseWorkoutsBlock;
