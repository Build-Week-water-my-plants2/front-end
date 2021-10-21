import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as yup from 'yup';
import Schema from './validation/Schema';
import LoginAPP from './components/LoginApp';
import AddPlantForm from './components/AddPlantForm';
import styled from 'styled-components';

const HeaderTwoStyle = styled.h2`
  font-size: 2rem;
  font-family: 'Andada Pro', serif;
  margin-left: 3%;
  color: #00a800;
`

const initialLogin = false

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

  const [login, setLogin] = useState(initialLogin);
  
  const [plants, setPlants] = useState(initialPlants);
  const [formValues, setFormValues] = useState(initialPlantValues);
  const [formErrors, setFormErrors] = useState(initialPlantErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const togglelogin = () => {
    setLogin(current => !current)
  }

  const getPlants = () => {
    axios.get('https://web46-watermyplants2.herokuapp.com/api/plants')
     .then(response => {
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

  console.log('login: ', login);
  return (
    <Router>
      <div className="App">

        <HeaderTwoStyle><h1>Welcome to WaterMyPlants</h1></HeaderTwoStyle>

        <AddPlantForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </div>
    </Router>
  );
}
export default App;