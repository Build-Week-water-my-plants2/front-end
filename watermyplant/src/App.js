import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as yup from 'yup';
import Schema from './validation/Schema';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from './components/Signup';
import AddPlantForm from './components/AddPlantForm';

const initialPlantValues = {
  id: '',
  nickname: '',
  species: '',
  h2ofrequency: '',
  image: ''
}

const initialPlantErrors = {
  id: '',
  nickname: '',
  species: '',
  h2ofrequency: '',
  image: ''
}

const initialPlants = [];
const initialDisabled = true

function App() {

  const [plants, setPlants] = useState(initialPlants);
  const [formValues, setFormValues] = useState(initialPlantValues);
  const [formErrors, setFormErrors] = useState(initialPlantErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPlants = () => {
    axios.get('https://web46-watermyplants2.herokuapp.com/api/plants')
     .them(response => {
       setPlants([response.data, ...plants]);

     }).catch(error => {
       console.error(error);

     }).finally(() => {
       setFormValues(initialPlantValues);
     })
  }

  const postNewPlant = newPlant => {
    axios.get('https://web46-watermyplants2.herokuapp.com/api/plants/add', newPlant)
     .then(response => {
       setPlants([response.data, ...plants]);

     }).catch(error => {
       console.error(error);

     }).finally(() => {
       setFormValues(initialPlantValues);
     })
  }

  const validate = (nickname, value) => {
    yup.reach(Schema, nickname)
       .validate(value)
       .then(() => setFormErrors({ ...formErrors, [nickname]: ''}))
       .catch(error => setFormErrors({ ...formErrors, [nickname]: error.errors[0]}))
  }

  const inputChange = (nickname, value) => {
    validate(nickname, value)
    setFormValues({ ...formValues, [nickname]: value})
  }

  const formSubmit = () => {
    const newPlant = {
      id: formValues.id,
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      h2ofrequency: formValues.h2ofrequency.trim(),
      image: formValues.image
    }

    postNewPlant(newPlant)
  }

  useEffect(() => {
    getPlants()
  }, [])

  useEffect(() => {
    Schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <Router>
      <div className="App">
        <h1>Welcome to WaterMyPlants</h1>

        <Route exact path ="/login" component={Login} />
        <Route exact path ="/signup" component={Signup} />

        {/* <AddPlantForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        /> */}

<form>

<label> Nickname
    <input
        type = 'text'
        id = 'nickname'
        name = 'nickname'
        value = {plants.nickname}                            
    />
</label>

<label> Species
    <input
        type = 'text'
        id = 'species'
        name = 'species'
        value = {plants.species}                            
    />
</label>

<label> H2O Frequency
    <select>
        <option value = 'high'>Twice a Day</option>
        <option value = 'medium-high'>Once a Day</option>
        <option value = 'medium'>Twice a Week</option>
        <option value = 'medium-low'>Once a Week</option>
        <option value = 'low'>Once a Month</option>
    </select>
</label>

<label> Image
    <input
        type = 'string'
        id = 'image'
        name = 'image'
        value = {plants.image}                            
    />
</label>

<button>Add Plant to List</button>
</form>
      </div>
    </Router>
  );
}
export default App;