import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  
  return (
    <Router>
      <div className = "App">
        <nav>
          <h1 className='site-header'>Welcome to WaterMyPlant 2.0</h1>
          <div className='nav-links'>          
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>        
        <Route exact path = "/login" >
          <Login  
            // values={formValues}
            // update={updateForm}
            // submit={submitForm}
            // errorText={errorText}
          />  
        </Route>
        <Route exact path = "/signup" components = {Signup} />        
      </div>  
    </Router>    
  );
}

export default App;
