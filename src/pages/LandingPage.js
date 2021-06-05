import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom'

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";

  firebase.initializeApp({
    apiKey: "AIzaSyCZ3227IZBEdOlaf_1bGxnJUBUaJiLSwH8",
    authDomain: "despliegueretofinal.firebaseapp.com",
    projectId: "despliegueretofinal",
    storageBucket: "despliegueretofinal.appspot.com",
    messagingSenderId: "957933930402",
    appId: "1:957933930402:web:0984f2015e9865858014fb",
    measurementId: "G-90ZG9ST9LW"
  });
  
  const auth = firebase.auth();

export default function LandingPage() {
    return (
        <div>
            
        </div>
    )
}
