// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCs8VNKOO0NS0if6owwBmRsB66r7cKaxZ0",
  authDomain: "varaghar-12ed3.firebaseapp.com",
  databaseURL: "https://varaghar-12ed3-default-rtdb.firebaseio.com",
  projectId: "varaghar-12ed3",
  storageBucket: "varaghar-12ed3.appspot.com",
  messagingSenderId: "253848806301",
  appId: "1:253848806301:web:f02f3952b2f32a70e04574",
  measurementId: "G-P9H3V3YEJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig