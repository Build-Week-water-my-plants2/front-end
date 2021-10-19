import './App.css';
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import User from './components/User'
import Login from './components/Login';
import Signup from './components/Signup';
import Password from './components/Password';
import axios from 'axios';

import constants from './components/data/constants.js';

// BASE_URL,  API_KEY for GET and POST
const {BASE_URL,  API_KEY} = constants;
// open, close for page password, can be cancelled after transfer to page password
const {open, close} = constants;

//the shape of the state that drives the form
const initialFormValues = {
  // firstname: '',
  // lastname: '',
  username: '',
  phoneNumber: '',
  password: ''
}

//the shape of the state that drives the form errors information
const initialFormErrors = {
  // firstname: '',
  // lastname: '',
  username: '',
  phoneNumber: '',
  password: ''
}

// the shape of the state that drives the users data information 
// const initialUsers = []

// initialUsers data for test which can be delete later in placed by above 
// TEST TEST TEST !!!!!! - can be deleted after all requirements full filled
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
// THE STATEs TO HOLD ALL VALUES OF THE FORM!
const [users, setUsers] = useState(initialUsers); // array of user objects
const [formValues, setFormValues] = useState(initialFormValues) // object
const [formErrors, setFormErrors] = useState(initialFormErrors) // object
const [disabled, setDisabled] = useState(initialDisabled)       // boolean

// Helper function to get users date from database
const getUsers = () => {
  // IMPLEMENT! ON SUCCESS PUT USERS IN STATE
  // helper to [GET] all users from `BASE_URL` 
  axios.get('http://somewhere.com/api/users')
    .then(res => {
      setUsers(res.data);
    }).catch(err => {
      console.error(err);
    })
}

// Helper function to post users date to database and reset 
const postNewUser = newUser => {
  //    IMPLEMENT! ON SUCCESS ADD NEWLY CREATED USER TO STATE
  //    helper to [POST] `newUser` to `BASE_URL`
  //    and regardless of success or failure, the form should reset
  axios.post('http://somewhere.com/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
}

// Helper function to set formValues after invoke inputChange() which reset new name and value of formvalues
const inputChange = (name, value) => {
  // RUN VALIDATION WITH YUP - later
  // validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}

// Helper function to get name and value from form input 
const formSubmit = () => {
  const newUser = {
    // firstname: formValues.firstname.trim(),
    // lastname: formValues.lastname.trim(),
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    phoneNumber: formValues.phoneNumber.trim(),
    password: formValues.password.trim()    
  }  
  console.log(newUser);
  postNewUser(newUser);  
}

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
            // change={inputChange}
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
            change={inputChange}
            submit={formSubmit}
            // update={updateForm}            
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

        <Route exact path = "/users">

          <header>
            <h1 className='site-header'>WaterMyPlant - Users admin Page</h1>
            <div className='header-links'>   
              <div>Hi Admin, Name: </div>       
              <Link to="/signup"> Sign out </Link>           
            </div>
          </header> 

          {
            users.map(user => {
              return (
                <User key={user.id} details={user} />
              )
            })
          }  
        </Route>            
      </div>  
    </Router>    
  );
}

export default App;
