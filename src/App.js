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
import { auth } from './components/logging/Logging';
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
import EditOKRPage from './pages/EditOKRPage'
import KREditPage from './pages/EditKRPage';
import OkrForProgress from './pages/OkrForProgress';
import OkrsComplete from './pages/OkrsComplete';
import ReadjustPercentage from './pages/ReadjustPercentage';
import ShowMaxProgressDashboard from './pages/ShowMaxProgressDashboard';

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
              return <WelcomeMessage />
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
          <Route exact path='/OkrEditForm' component={EditOKRPage} />
          <Route exact path='/KREditForm' component={KREditPage} />
          <Route exact path='/ProgressOkr' component={OkrForProgress} />
          <Route exact path='/Complete' component={OkrsComplete} />
          <Route exact path='/ReadjustPercentage' component={ReadjustPercentage} />
          <Route exact path='/ShowMaxProgressOkr' component={ShowMaxProgressDashboard} />
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
