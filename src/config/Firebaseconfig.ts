// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFp_h1XUiE-EAGy3nBktDfHiw3H_JtbQI",
  authDomain: "fir-react-35734.firebaseapp.com",
  databaseURL: "https://fir-react-35734-default-rtdb.firebaseio.com",
  projectId: "fir-react-35734",
  storageBucket: "fir-react-35734.appspot.com",
  messagingSenderId: "952137588635",
  appId: "1:952137588635:web:c7be6a4b7d079f2d2c4b3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;