import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Password from './components/Password';

//the shape of the state that drives the form
const initialFormValues = {
  // firstname: '',
  // lastname: '',
  username: '',
  phoneNumber: '',
  password: '',
}

//the shape of the state that drives the form errors information
const initialFormErrors = {
  // firstname: '',
  // lastname: '',
  username: '',
  phoneNumber: '',
  password: '',
}

// the shape of the state that drives the users data information 
// const initialUsers = []

// initialUsers data for test which can be delete later in placed by above 
const initialUsers = [
  { 
    // firstname: '',
    // lastname: '',
    username: 'beatlesm',
    email: 'beatlesm@somecompany.com',
    phoneNumber: '4151234567',
    password:'4567WSXedc'
  },
  {
    // firstname: '',
    // lastname: '',
    username: 'soooj',
    email: 'soooj@somecompany.com',
    phoneNumber: '4151234568',
    password:'4568EDCrfv'
  }
]

// the flag state to enable or disable button
const initialDisabled = true

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

        <Route exact path = "/password" >        
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>Tell us what you think</div>                        
            </div>
          </header>   
          <Password  
            values={formValues}
            // update={updateForm}
            // submit={submitForm}
            // errorText={errorText}
          />  
        </Route>
        
        <Route exact path = "/signup" >
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>Already a member? </div>       
              <Link to="/login"> Sign in </Link>           
            </div>
          </header>  
          <Signup  
            values={formValues}
            // update={updateForm}
            // submit={submitForm}
            // errorText={errorText}
          />  
        </Route>     
        <Route exact path = "/homepage" >
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>Hi, Name </div>       
              <Link to="/signup"> Sign out </Link>           
            </div>
          </header>  
          <HomePage  
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
