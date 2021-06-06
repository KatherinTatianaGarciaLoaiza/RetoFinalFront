import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LandingPage from './pages/LandingPage';
import ConfigurationPage from './pages/ConfigurationPage';
import HomePage from "./pages/HomePage";
import AllOKRSPage from "./pages/AllOKRSPage";
import MyOKRSPage from "./pages/MyOKRSPage";
import UserOKRSPage from "./pages/UserOKRSPage";
import ProfilePage from "./pages/ProfilePage";
import CreateOKRPage from "./pages/CreateOKRPage";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

firebase.initializeApp({
  apiKey: "AIzaSyDTOXqAZxbGqbsgdqSj1wm87Gc_TnLJHD8",
  authDomain: "pruebafrontfinal.firebaseapp.com",
  projectId: "pruebafrontfinal",
  storageBucket: "pruebafrontfinal.appspot.com",
  messagingSenderId: "91143744808",
  appId: "1:91143744808:web:13d3666b00e71b97ea341d",
  measurementId: "G-66N6TDZVBF"
});


const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  if (user?.uid) {
    localStorage.setItem("uid", user?.uid);
  }
  return (
    <Router>
      {user ?

        <Switch>
          <Route exact path="/" component={() => {
            return <HomePage />
          }} />
          <Route exact path="/AllOKRS" component={AllOKRSPage} />
          <Route exact path="/MyOKRS" component={MyOKRSPage} />
          <Route exact path="/Home" component={HomePage} />
          <Route exact path="/UserOKRS" component={UserOKRSPage} />
          <Route exact path="/ProfileUser" component={ProfilePage} />
          <Route exact path="/CreateOKR" component={CreateOKRPage} />
          <Route exact path="/ConfigurationNotifications" component={ConfigurationPage} />
          <Redirect to="/" />
        </Switch>
        :
        <Switch>
          <Route exact path="/" component={() => {
            return <LandingPage />
          }} />
          <Redirect to="/" />
        </Switch>
      }
    </Router >
  );
}

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button className="button right" onClick={signInWithGoogle}>Sign in with google</button>;
}

export function SignOut() {
  return (
    auth.currentUser && (
      <ExitToAppIcon onClick={() => {
          localStorage.removeItem("uid");
          auth.signOut();
        }} style={{ color: 'white' }} fontSize="large" />
    )
  );
}

export default App;
