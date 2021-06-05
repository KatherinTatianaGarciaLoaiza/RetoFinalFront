import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import ConfigurationPage from './pages/ConfigurationPage';
import HomePage from "./pages/HomePage";
import AllOKRSPage from "./pages/AllOKRSPage";
import MyOKRS from "./pages/MyOKRS";
import UserOKRS from "./pages/UserOKRS";
import ProfilePage from "./pages/ProfilePage";
import CreateOKR from "./pages/CreateOKR";
import ClippedDrawer from './components/prueba'

function App() {
 
  return (
    
  <ClippedDrawer/>
  );
}



export default App;
