import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ConfigurationPage from './pages/ConfigurationPage';
import HomePage from "./pages/HomePage";
import AllOKRSPage from "./pages/AllOKRSPage";
import MyOKRSPage from "./pages/MyOKRSPage";
import UserOKRSPage from "./pages/UserOKRSPage";
import ProfilePage from "./pages/ProfilePage";
import CreateOKRPage from "./pages/CreateOKRPage";

function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/Home" component={() => {
            return <HomePage/>}} />
            <Route exact path="/AllOKRS" component={AllOKRSPage}/>
            <Route exact path="/MyOKRS" component={MyOKRSPage}/>
            <Route exact path="/Home" component={HomePage}/>
            <Route exact path="/UserOKRS" component={UserOKRSPage}/>
            <Route exact path="/ProfileUser" component={ProfilePage}/>
            <Route exact path="/CreateOKR" component={CreateOKRPage}/>
            <Route exact path="/ConfigurationNotifications" component={ConfigurationPage}/>
        </Switch> 
  </Router>   
  );
}



export default App;
