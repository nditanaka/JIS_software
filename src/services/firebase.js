import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJRC92Ot3hvM9vIuzs3cCV9M0kIVCR1WM",
  authDomain: "workout-journal-74b09.firebaseapp.com",
  databaseURL: "https://workout-journal-74b09.firebaseio.com",
  projectId: "workout-journal-74b09",
  storageBucket: "workout-journal-74b09.appspot.com",
  messagingSenderId: "859359126198",
  appId: "1:859359126198:web:97d080ab9712d5fb2a3c17",
  measurementId: "G-D985B2R4W6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
