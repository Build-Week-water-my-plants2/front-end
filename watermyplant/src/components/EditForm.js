import React, { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const initialPlantForm = {
    id: '',
    nickname: '',
    species: '',
    h2oFrequency: '',
    image: ''
}

const EditForm = () => {
    const [plants, setPlants] = useState(initialPlantForm);
    const {push} = useHistory();

    const changeHandler = event => {
        event.persist()
        setPlants({ ...plants, [event.target.name]: event.target.value })
    }

    // add useEffect 

    
    // add savePlant onSubmit

    return (
        <>

        <h1>Edit Plant</h1>

        <div className = "editForm">
            <form>

                <label> Nickname:
                    <input
                        type = 'text'
                        name = 'nickname'
                        value = {plants.nickname}
                        onChange = {changeHandler}
                    />
                </label>

                <label> Species:
                    <input
                        type = 'text'
                        name = 'species'
                        value = {plants.species}
                        onChange = {changeHandler}
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
                            onChange = {changeHandler}                      
                        />
                </label>

                    <button>Save Changes</button>

            </form>
        </div>
        </>
    )
}

export default EditForm;