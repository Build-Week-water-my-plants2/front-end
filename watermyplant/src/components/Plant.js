import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import { useHistory } from "react-router-dom";
import EditForm from "./EditForm";
// import './Plant.css';


export default function Plant(props) {
    const { push } = useHistory();
    const { plant, plants, set_plant_values} = props;
    const [isToggled, setIsToggled] = useState(false)



    const deletePlant = () => {

        axiosWithAuth().delete(`https://web46-watermyplants2.herokuapp.com/api/plants/${plant.plants_id}`, plant)
            .then(res => {
              push('/PlantList');
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <div className="plant-card">
                <h3>Plant Info</h3>
                <p>Nickname: {plant.nickname}</p>
                <p>Species: {plant.species}</p>
                <p>Water frequency? {plant.h2oFrequency}</p>
                <button id="edit-button" onClick={() => setIsToggled(!isToggled)}>Edit</button>
                <button id="delete-button" onClick={deletePlant}>Delete Plant</button>
                {isToggled && <EditForm plant={plant} isToggled={isToggled} set_plant_values={set_plant_values} plants={plants}/>}
            </div>
        </>
    )
}