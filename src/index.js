// Imports:
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';


// Imports:
import store from './store';
import './index.css';


// Components:
import App from './App';


// Firebase Imports:
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";


// Firebase Initialize:
const firebaseConfig = {
    apiKey: "AIzaSyDpubGQk1EYTMPoIToJ-59oYEr6ttfDQiQ",
    authDomain: "prepare-karona.firebaseapp.com",
    databaseURL: "https://prepare-karona.firebaseio.com",
    projectId: "prepare-karona",
    storageBucket: "prepare-karona.appspot.com",
    messagingSenderId: "595348768198",
    appId: "1:595348768198:web:2112f6af7c4aacc0b5dec7",
    measurementId: "G-E5HXZNNT94"
};

firebase.initializeApp(firebaseConfig);


// Functions:
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();