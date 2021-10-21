import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormDivStyle = styled.div`
    border: .75rem dotted #ba8759;
    background-color: ##d3d3d3;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin-left: 25%;
    width: 50%;
    font-family: 'Andada Pro', serif;
    padding: 1rem;
`

const HeaderTwo = styled.h2 `
    font-family: 'Andada Pro', serif;
    font-size: 2rem;
    color: #ba8759;
`


const initialPlantValues = {
    id: '',
    nickname: '',
    species: '',
    h2oFrequency: '',
    image: ''
}


const AddPlantForm = () => {
    const [plants, setPlants] = useState(initialPlantValues);
    const { push } = useHistory();

    return (

        
        
        <FormDivStyle>
        <div> 

            <HeaderTwo><h2>Add a Plant</h2></HeaderTwo>
            
            <div className = "add-plant-form">

                <form>

                    <label> Nickname:&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className = "text-form"
                            type = 'text'
                            id = 'nickname'
                            placeholder = "Enter Plant's Nickname"
                            name = 'nickname'
                            value = {plants.nickname}                            
                        />
                    </label><br></br>
                    <br></br>

                    <label> Species:&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className = "text-form"
                            type = 'text'
                            id = 'species'
                            placeholder = "Enter Plant's Species"
                            name = 'species'
                            value = {plants.species}                            
                        />
                    </label><br></br>
                    <br></br>

                    <label> H2O Frequency:&nbsp;&nbsp;&nbsp;&nbsp;
                        <select className = "select-options">
                            <option value = ''>-- Quench your Plant's Thirst --</option>
                            <option value = 'high'>Twice a Day</option>
                            <option value = 'medium-high'>Once a Day</option>
                            <option value = 'medium'>Twice a Week</option>
                            <option value = 'medium-low'>Once a Week</option>
                            <option value = 'low'>Once a Month</option>
                        </select>
                    </label><br></br>
                    <br></br>

                    <label> Image:&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className = "text-form"
                            type = 'string'
                            placeholder = "Add Image"
                            id = 'image'
                            name = 'image'
                            value = {plants.image}                            
                        />
                    </label><br></br>
                    <br></br>

                    <button className = "addBtn"><a href="/plantList">Add Plant to List</a></button>
                </form>
            </div>
        </div> 
        </FormDivStyle>
    )
}

export default AddPlantForm;