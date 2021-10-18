import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className = "App">
        <h1>Welcome to WaterMyPlant 2.0</h1>
        <Route exact path = "/login" components = {Login} />
        <Route exact path = "/signup" components = {Signup} />
      </div>
    </Router>
  );
}

export default App;
