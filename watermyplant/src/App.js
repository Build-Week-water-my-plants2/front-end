import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

//the shape of the state that drives the form
const initialFormValues = {
  username: '',
  phoneNumber: '',
  password: '',
}

function App() {

  // THE STATE TO HOLD ALL VALUES OF THE FORM!
const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <Router>
      <div className = "App">     
        <Route exact path = "/login" >        
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>Tell us what you think</div>                        
            </div>
          </header>   
          <Login  
            values={formValues}
            // update={updateForm}
            // submit={submitForm}
            // errorText={errorText}
          />  
        </Route>
        <Route exact path = "/" >
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>already have a account: </div>       
              <Link to="/login"> Login here</Link>           
            </div>
          </header>  
          <Signup  
            values={formValues}
            // update={updateForm}
            // submit={submitForm}
            // errorText={errorText}
          />  
        </Route>                
      </div>  
    </Router>    
  );
}

export default App;
