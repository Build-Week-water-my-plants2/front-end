import React, {useEffect} from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function Plant(props) {
    const { push } = useHistory();
    const { plant, plants, set_plant_values} = props;




    const deletePlant = () => {

        axiosWithAuth().delete(`https://web46-watermyplants2.herokuapp.com/api/plants/${plant.plants_id}`, plant)
            .then(res => {
                console.log(res);
              push('/PlantList');
            })
            .catch(err => {
                console.error(err)
            })
    }


    const editPlant = () => {
        console.log(plant)
        axiosWithAuth().put(`https://web46-watermyplants2.herokuapp.com/api/plants/${plant.plants_id}`,plant)
            .then(res => {
                console.log(res.data)
                set_plant_values([res.data, ...plants])
                console.log(plant)
            })
            .catch(err => {
                console.error(err);
            })
    }

    const updateForm = evt => {
        const updatePlant = {
            nickname: evt.nickname,
            species: evt.species,
            h2oFrequency: evt.h2oFrequency,
            image: evt.image
        }
        editPlant()
    }


    return (
        <>
            <div className="plant-card">
                <h3>Plant Info</h3>
                <p>Nickname: {plant.nickname}</p>
                <p>Species: {plant.species}</p>
                <p>Water frequency? {plant.h2oFrequency}</p>
                <button onChange={updateForm}>Edit Plant</button>
                <button onClick={deletePlant}>Delete Plant</button>
            </div>

        </>
    )

}