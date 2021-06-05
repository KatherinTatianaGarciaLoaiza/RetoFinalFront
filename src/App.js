import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ConfigurationPage from './pages/ConfigurationPage';

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <ConfigurationPage/>
    </div>
  );
}

export default App;
