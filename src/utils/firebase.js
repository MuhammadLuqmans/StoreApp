// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYPBjh6mQhuk-qqv_NY88kPA5JggY0uPQ",
  authDomain: "react-e5132.firebaseapp.com",
  projectId: "react-e5132",
  storageBucket: "react-e5132.appspot.com",
  messagingSenderId: "828171294617",
  appId: "1:828171294617:web:35dd950df71c050a9fa508",
  measurementId: "G-MC91X6RL1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

// export default auth;

