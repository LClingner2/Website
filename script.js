// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKEm8DbNmRmFJaKDnFYTJ-9UPBAYSmH10",
  authDomain: "loganclingner-2947.firebaseapp.com",
  projectId: "loganclingner-2947",
  storageBucket: "loganclingner-2947.firebasestorage.app",
  messagingSenderId: "394246443636",
  appId: "1:394246443636:web:422fb6519f2691706eb721",
  measurementId: "G-3LG48WBBX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);