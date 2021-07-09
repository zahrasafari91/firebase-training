import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
import firebase from 'firebase/app'
import 'firebase/analytics';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

var firebaseConfig = {
  apiKey: "AIzaSyCq6Wsrsx4guiCsuE2U0ouKBfL2UwcjmwI",
  authDomain: "restaurant-reservations-da400.firebaseapp.com",
  projectId: "restaurant-reservations-da400",
  storageBucket: "restaurant-reservations-da400.appspot.com",
  messagingSenderId: "346936749908",
  appId: "1:346936749908:web:90cf19a6e2f5bb5453a2c1",
  measurementId: "G-TGCHEY4L6D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
