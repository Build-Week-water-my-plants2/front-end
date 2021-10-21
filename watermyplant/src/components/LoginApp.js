import '../App.css';
import React, { useState, useEffect }  from 'react';
import {Route, Link } from 'react-router-dom';
import HomePage from './HomePage';

import Login from './Login';
import Signup from './Signup';
import Password from './Password';
import axios from 'axios';

import schema from '../validation/Schema';
import * as yup from 'yup';

const initialUsers = [];

//the shape of the state that drives the Signup form
const initialFormValues = {
  username: '',
  phone: '',
  password: ''
}

//the shape of the state that drives the form errors information
const initialLoginFormErrors = {
  username: '',
  password: '',  
}

// the flag state to enable or disable button
const initialDisabled = true

function LoginApp(props) {
const {
  login,
  toggle,  
  } = props

// console.log('login:', login);  

// THE STATEs TO HOLD ALL VALUES OF THE FORM!
const [users, setUsers] = useState(initialUsers); // array of user objects
const [userRegister, setUserRegister] = useState([]); // array of user objects
const [userlogin, setUserLogin] = useState([]); // array of user objects
const [formValues, setFormValues] = useState(initialFormValues) // object
// const [formLoginValues, setFormLoginValues] = useState(initialLoginFormValues) // object
const [formErrors, setFormErrors] = useState(initialLoginFormErrors) // object
// const [disabled, setDisabled] = useState(initialDisabled)       // boolean

//////////////// EVENT HANDLERS ////////////////
const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

// Helper function to set formValues after invoke inputChange() 
// which reset new name and value of formValues
const inputChange = (name, value) => {
  // RUN VALIDATION WITH YUP - later
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

// Helper function to register a new user 
const formSigninSubmit = () => {
  const newUser = {    
    username: formValues.username.trim(),
    password: formValues.password.trim(),     
    phone: formValues.phone.trim()       
  }   
  // [POST] /api/users/register requires an object in format { username, password, phone} 
  // and returns an object {user_id, username, hashed password, phone}
  axios.post('https://web46-watermyplants2.herokuapp.com/api/users/register', newUser)  
  .then(res => {      
    // debugger    
    setUserRegister(res.data)    
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    setFormValues(initialFormValues);
  })    
}

// Helper function to allow user login
const formLoginSubmit = () => {
  const newUser = {    
    username: formValues.username.trim(),
    password: formValues.password.trim(),              
  }    
  console.log('newUser:', newUser);    
  // [POST] /api/users/login requires an object in format {username, password} 
  // and replies with an object in the format {user_id, message, token}
  axios.post('https://web46-watermyplants2.herokuapp.com/api/users/login', newUser)  
  .then(res => {      
    // debugger
    setUserLogin(res.data); 
    // Set login true to allow user get in
    toggle();  
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    setFormValues(initialFormValues);
  })      
}

// Helper function to update user password
const formPasswordSubmit = () => {
  const newUser = {    
    oldPassword: formValues.oldPassword.trim(),
    newPassword: formValues.newPassword.trim(),
    newPasswordConfirm: formValues.newPasswordConfirm.trim(),           
  }    
  console.log('newUser:', newUser);    
  // [POST] /api/users/login requires an object in format {username, password} 
  // and replies with an object in the format {user_id, message, token}
  axios.post('https://web46-watermyplants2.herokuapp.com/api/users/update/:id', newUser)  
  .then(res => {      
    debugger
    setUsers([res.data, ...users]);
    // console.log('res.data in formPasswordSubmit',res.data); 
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    setFormValues(initialFormValues);
  })      
}

// useEffect(() => {
// ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
//   schema.isValid(formValues).then(valid => setDisabled(!valid))
// }, [formValues])

  return (
    // <Router>
        <div> 

        <Route exact path = "/signup" >
          <header> <h1 className='site-header'>WaterMyPlant 2.0</h1> 
            <div className='header-links'> <div>Already a member? </div> <Link to="/login"> Sign in </Link> </div>
          </header>  
          <Signup values={formValues} change={inputChange} submit={formSigninSubmit}
            register = {userRegister}
            // disabled={disabled}
            errors={formErrors} 
          />  
        </Route>   
        
        <Route exact path = "/login" >        
          <header> <h1 className='site-header'>WaterMyPlant 2.0</h1> <div className='header-links'> <div>Tell us what you think</div> </div>
          </header>   
          <Login values={formValues} change={inputChange} submit={formLoginSubmit}
            loginedUserInfo = {userlogin}
            login = {login} 
            // disabled={disabled}
            errors={formErrors}  
          />  
        </Route>

        <Route exact path = "/password" >        
          <header> <h1 className='site-header'>WaterMyPlant 2.0</h1> <div className='header-links'> <div>Tell us what you think</div> </div>
          </header>   
          <Password  values={formValues} change={inputChange} submit={formPasswordSubmit}
            // disabled={disabled}
            // errors={formErrors}  
          />  
        </Route>        
                
        <Route exact path="/">
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>Already a member? </div>       
              <Link to="/login"> Sign in </Link>           
            </div>
          </header> 
          <HomePage />
        </Route>

      </div>  
    // </Router>    
  );
}

export default LoginApp;
