import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyAtdY1gw_eN2SDU47Wg-AXCezPaIwZZ3CQ",
    authDomain: "cart-13ad7.firebaseapp.com",
    projectId: "cart-13ad7",
    storageBucket: "cart-13ad7.appspot.com",
    messagingSenderId: "664821451098",
    appId: "1:664821451098:web:e9a1989395442ad6e2cb63"

};


firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();