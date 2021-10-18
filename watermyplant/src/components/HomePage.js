import React, { useState, useHistory } from 'react';
import { Route } from 'react-router-dom';
import AddPlantForm from './AddPlantForm';


const HomePage =  () => {
    const [listOfPlants, setListOfPlants] = useState();
    
    return(
        <div>
            <Route path = "/addPlant" component = {AddPlantForm} />
            <button>Add Plant</button>
        </div>
    )
}