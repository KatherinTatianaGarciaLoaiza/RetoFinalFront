import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";

import { login } from './actions/okrActions';
import {auth} from './components/logging/Logging';
import WelcomeMessage from "./components/administration/WelcomeMessage";

import LandingPage from './pages/LandingPage';
import ConfigurationPage from './pages/ConfigurationPage';
import HomePage from "./pages/HomePage";
import AllOKRSPage from "./pages/AllOKRSPage";
import MyOKRSPage from "./pages/MyOKRSPage";
import UserOKRSPage from "./pages/UserOKRSPage";
import ProfilePage from "./pages/ProfilePage";
import CreateOKRPage from "./pages/CreateOKRPage";
import CreateKRPage from "./pages/CreateKRPage";

function App({ dispatch }) {
  const [user] = useAuthState(auth);
  if (user?.uid) {
    dispatch(login(user.uid));
  }
  return (
    <Router>
      {user ? (        
        <Switch>
          <Route
            exact
            path='/'
            component={() => {
              return <WelcomeMessage/>    
            }}
          />
          <Route exact path='/AllOKRS' component={AllOKRSPage} />
          <Route exact path='/MyOKRS' component={MyOKRSPage} />
          <Route exact path='/Home' component={HomePage} />
          <Route exact path='/UserOKRS' component={UserOKRSPage} />
          <Route exact path='/ProfileUser' component={ProfilePage} />
          <Route exact path='/CreateOKR' component={CreateOKRPage} />
          <Route
            exact
            path='/ConfigurationNotifications'
            component={ConfigurationPage}
          />
          <Route exact path='/CreateKR' component={CreateKRPage} />
          
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path='/'
            component={() => {
              return <LandingPage />;
            }}
          />
          <Redirect to='/' />
        </Switch>
      )}
    </Router>
  );
}

export default connect()(App);
