// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU0avmPEcrWxznuIGXJVzqT8l9xlKzm0k",
  authDomain: "nitesout-website.firebaseapp.com",
  databaseURL: "https://nitesout-website-default-rtdb.firebaseio.com",
  projectId: "nitesout-website",
  storageBucket: "nitesout-website.appspot.com",
  messagingSenderId: "341238459745",
  appId: "1:341238459745:web:01322264723ba4c452e920",
  measurementId: "G-48CLLWEP5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);