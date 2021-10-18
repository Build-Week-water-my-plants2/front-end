import React, { useState, useHistory } from 'react';
import { Route } from 'react-router-dom';
import AddPlant from './AddPlant';


const HomePage =  () => {
    const [listOfPlants, setListOfPlants] = useState();
    
    return(
        <div>
            <Route path = "/addPlant" component = {AddPlant} />
            <button>Add Plant</button>
        </div>
    )
}