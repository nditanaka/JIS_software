import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/workouttable.css";
import { Table } from "react-bootstrap";

const WorkoutTable = () => (
  <div className="discovertable">
    <Table striped hover>
      <thead>
        <tr>
          <th>Muscle</th>
          <th>Exercise</th>
          <th>Sets x reps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Core</td>
          <td>Y Squats</td>
          <td>4 x 12</td>
        </tr>
        <tr>
          <td>Hamstrings / Core</td>
          <td>Bodyweight Forward Lunge</td>
          <td>4 x 10</td>
        </tr>
        <tr>
          <td>Shoulders, Chest, Back</td>
          <td>Bodyweight Shoulder Taps</td>
          <td>4 x 12</td>
        </tr>
        <tr>
          <td>Legs</td>
          <td>Bodyweight Lateral Squat</td>
          <td>3 x 10</td>
        </tr>
        <tr>
          <td>Glutes, Quads</td>
          <td>Bodyweight Static Lunge</td>
          <td>4 x 12</td>
        </tr>
        <tr>
          <td>Glutes, Back</td>
          <td>Bodyweight Back Extensions</td>
          <td>3 x to failure</td>
        </tr>
        <tr>
          <td>Shoulders, Chest, Triceps</td>
          <td>Push Ups</td>
          <td>4 x 12</td>
        </tr>
      </tbody>
    </Table>
    <div>Source: https://kettlebellsworkouts.com/bodyweight-exercises/</div>
  </div>
);

export default WorkoutTable;
