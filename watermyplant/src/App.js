import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/HomePage';

function App() {
  return (
    <Router>
      <div className = "App">
        <h1>Welcome to WaterMyPlant 2.0</h1>
        <Link to='/'> Home </Link>

        <Route exact path = '/' component={Home}/>
        <Route exact path = "/login" components = {Login} />
        <Route exact path = "/signup" components = {Signup} />
      </div>
    </Router>
  );
}

export default App;
