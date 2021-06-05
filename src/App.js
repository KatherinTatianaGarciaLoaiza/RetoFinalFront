import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ConfigurationPage from './pages/ConfigurationPage';
import HomePage from "./pages/HomePage";
import AllOKRSPage from "./pages/AllOKRSPage";
import MyOKRS from "./pages/MyOKRS";
import UserOKRS from "./pages/UserOKRS";
import ProfilePage from "./pages/ProfilePage";
import CreateOKR from "./pages/CreateOKR";

function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={() => {
            return <HomePage/>}} />
            <Route exact path="/AllOKRS" component={AllOKRSPage}/>
            <Route exact path="/MyOKRS" component={MyOKRS}/>
            <Route exact path="/Home" component={HomePage}/>
            <Route exact path="/UserOKRS" component={UserOKRS}/>
            <Route exact path="/ProfileUser" component={ProfilePage}/>
            <Route exact path="/CreateOKR" component={CreateOKR}/>
            <Route exact path="/ConfigurationNotifications" component={ConfigurationPage}/>
        </Switch> 
  </Router>   
  );
}



export default App;
