import './App.css';
import React, { useState, useEffect }  from 'react';
import {Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Users from './components/Users'
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
  email:'',
  phoneNumber: '',
  password: ''
}

//the shape of the state that drives the form errors information
const initialFormErrors = {
  // firstname: '',
  // lastname: '',
  username: '',
  email:'',
  phoneNumber: '',
  password: ''
}

// the shape of the state that drives the users data information 
// const initialUsers = []

// initialUsers data for test which can be delete later in placed by above 

const initialUsers = [
  {
  // firstname: '',
  // lastname: '',
  username: 'beatlesm',
  email:'beatlesm@somecompany.com',
  phoneNumber: '707-123-4567',
  password: 'WSXedc123'
  },
  {
  // firstname: '',
  // lastname: '',
  username: 'soooj',
  email:'soooj@somecompany.com',
  phoneNumber: '415-123-4567',
  password: 'YHNtgb456'
  }
]

// TEST by API from Casebook2
// test https://randomuser.me/api/
const admin = {
  location: {
    state: "NY"
  },
  login: {
    uuid: "12345"
  },
  picture: {
    medium: "https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg"
  },
  name: {
    first: "CRHarding"
  },
  email: "C@c.com"
}

// the flag state to enable or disable button
const initialDisabled = true

function App() {
// THE STATEs TO HOLD ALL VALUES OF THE FORM!
const [users, setUsers] = useState([admin]); // array of user objects
const [formValues, setFormValues] = useState(initialFormValues) // object
// const [formErrors, setFormErrors] = useState(initialFormErrors) // object
// const [disabled, setDisabled] = useState(initialDisabled)       // boolean

// Helper function to get users date from database
// const getUsers = () => {
//   // IMPLEMENT! ON SUCCESS PUT USERS IN STATE
//   // helper to [GET] all users from `BASE_URL` 
//   axios.get('https://randomuser.me/api/?results=5')  
//     .then(res => {
//       // debugger
//       setUsers([...users, ...res.data.results]);
//       console.log('res.data.results:', res.data.results);
//     }).catch(err => {
//       console.error(err);
//     })
// }

//////////////// SIDE EFFECTS ////////////////
useEffect(() => {
  axios.get('https://randomuser.me/api/?results=5')
    .then(res => {
      // debugger
      setUsers([...users, ...res.data.results]);
      console.log('users:', users);
    }).catch(err => console.error(err));
}, [])


// Helper function to post users date to database and reset 
const postNewUser = newUser => {
  //    IMPLEMENT! ON SUCCESS ADD NEWLY CREATED USER TO STATE
  //    helper to [POST] `newUser` to `BASE_URL`
  //    and regardless of success or failure, the form should reset
  // axios.post('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', newUser)  
  //   .then(res => {
  //     console.log('res.date',res.date); 
  //     setUsers([res.data, ...users]);
  //   }).catch(err => {
  //     console.error(err);
  //   }).finally(() => {
  //     setFormValues(initialFormValues);
  //   })  
console.log('users: ', users);
  // setUsers([res.data, ...users]);
}

//////////////// EVENT HANDLERS ////////////////
// const validate = (name, value) => {
//   yup.reach(schema, name)
//     .validate(value)
//     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
// }

// Helper function to set formValues after invoke inputChange() 
// which reset new name and value of formValues
const inputChange = (name, value) => {
  // RUN VALIDATION WITH YUP - later
  // validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

// Helper function to get name and value from form input 
const formSubmit = () => {
  const newUser = {
    // firstname: formValues.firstname.trim(),
    // lastname: formValues.lastname.trim(),
    first:formValues.first.trim(),
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    phoneNumber: formValues.phoneNumber.trim(),
    password: formValues.password.trim()    
  }    
  console.log('newUser from formalVale:', newUser);   
  postNewUser(newUser);  
  
}

// useEffect(() => {
// ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
//   schema.isValid(formValues).then(valid => setDisabled(!valid))
// }, [formValues])


  return (
    // <Router>
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
            // change={inputChange}
            // submit={formSubmit}
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
            change={inputChange}
            submit={formSubmit}
            // disabled={disabled}
            // errors={formErrors}            
          />  
        </Route>     
        <Route path="/users/:id">
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              {/* <div>Already a member? </div>   */}
              <Link to="/users"> Back to Users</Link>   
              <div> or </div>
              <Link to="/Signup"> Logout </Link>           
            </div>
          </header> 
          <User users={users} />
        </Route>
        <Route exact path="/users">
          <header>
            <h1 className='site-header'>WaterMyPlant 2.0</h1>
            <div className='header-links'>   
              <div>Already a member? </div>       
              <Link to="/login"> Sign in </Link>           
            </div>
          </header> 
          <Users users={users} />
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

export default App;
