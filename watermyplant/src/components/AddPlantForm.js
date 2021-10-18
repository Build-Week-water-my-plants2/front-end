import React, { useState, useEffect, useParams } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialPlantValues = {
    id: '',
    nickname: '',
    species: '',
    h2ofrequency: '',
    image: ''
}


const AddPlantForm = () => {
    const [plants, setPlants] = useState(initialPlantValues);

    return (
        <> 
            <h1>Add a Plant</h1>
            
            <div className = "add-plant-form">

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
        </> 
    )
}

export default AddPlantForm;