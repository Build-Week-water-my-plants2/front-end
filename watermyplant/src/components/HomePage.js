import React, { useState } from 'react';
import { useHistory, Route } from 'react-router-dom';
import AddPlantForm from './AddPlantForm';
import EditForm from './EditForm';


const HomePage =  () => {
    const [listOfPlants, setListOfPlants] = useState();
    
    const {push} = useHistory();

    const handleClick = () => {
        push('/addPlant')
    }

    return(
        <div>
            <Route path = "/update-plant/:id" render = {props => <EditForm { ...props} listOfPlants = {listOfPlants}/>} />
            <Route path = "/addPlant" component = {AddPlantForm} />
            <button onClick={handleClick}> Add Plant</button>
        </div>
    )
}

export default HomePage;