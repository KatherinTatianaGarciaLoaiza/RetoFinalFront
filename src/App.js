import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from './components/Logging';

import LandingPage from './pages/LandingPage';
import ConfigurationPage from './pages/ConfigurationPage';
import HomePage from "./pages/HomePage";
import AllOKRSPage from "./pages/AllOKRSPage";
import MyOKRSPage from "./pages/MyOKRSPage";
import UserOKRSPage from "./pages/UserOKRSPage";
import ProfilePage from "./pages/ProfilePage";
import CreateOKRPage from "./pages/CreateOKRPage";

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

export default App;
