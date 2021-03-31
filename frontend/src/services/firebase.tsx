import firebase from "firebase/app";
import "firebase/auth";
import { useCallback } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCXmNEAwJ7_aX9Df8BQCO282H74giY6how",
  authDomain: "mutlu-am.firebaseapp.com",
  projectId: "mutlu-am",
  storageBucket: "mutlu-am.appspot.com",
  messagingSenderId: "953049174208",
  appId: "1:953049174208:web:eb76437690d1e7e5911d25",
  measurementId: "G-HMN1PQMHL4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;