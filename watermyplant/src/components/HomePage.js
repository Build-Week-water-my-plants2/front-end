import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import AddPlantForm from './AddPlantForm';


const Home =  () => {
    const [listOfPlants, setListOfPlants] = useState();
    
    const {push} = useHistory();

    const handleClick = () => {
        push('/addPlant')
    }
    return(
        <div>
            <Route path = "/addPlant" component = {AddPlantForm} />
            <button onClick={handleClick}> Add Plant</button>
        </div>
    )
}

export default Home