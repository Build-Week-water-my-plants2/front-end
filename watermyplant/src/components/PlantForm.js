import React, {useEffect, useState} from 'react';
import * as yup from "yup";
// import "./PlantForm.css";
import axiosWithAuth from "./axiosWithAuth";
import Schema from "../validation/Schema"



const initialDisabled = true;
const initialFormValues = {
    nickname: "",
    species: "",
    h2oFrequency: "",
    image:""
}
const initialFormErrors={
    nickname:"",
    species:"",
    h2oFrequency:"",
    image:""
}
export default function PlantForm(props){
    const { plants, plant, setPlantValues} = props

    const [formValues, setFormValues] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [errors, setErrors]=useState(initialFormErrors);


    const postNewPlant = newPlant => {

        axiosWithAuth().post(`https://watermyplantsweb46.herokuapp.com/api/plants`, newPlant)
            .then(res=> {
                setPlantValues([res.data, ...plants])
                console.log(plants)
            })
            .catch(err => {
                console.error(err)
            })
            .finally( () =>{
                setFormValues(initialFormValues)
            })
    }

    const validate = (name, value) => {
        yup.reach(Schema, name)
            .validate(value)
            .then(() => setErrors({...errors, [name]:""}) )
            .catch(err => setErrors({errors, [name]: err.errors[0]}))
    }

    const change= (name, value) =>{
        setFormValues({ ...formValues, [name]: value });
        validate(name, value);

    }

    const formSubmit = () => {
        const newPlant = {
            nickname: formValues.nickname.trim(),
            species: formValues.species.trim(),
            h2oFrequency: formValues.h2oFrequency.trim(),
            image: formValues.image.trim()
        }
        postNewPlant(newPlant);
    }

    useEffect(() => {
        Schema.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])


    const onSubmit = evt => {
        evt.preventDefault();
        formSubmit();
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        change(name, value);
    }

    return(
        <div id="plantform">
            <form className='plant-form-container' onSubmit={onSubmit} >
                <div className='form-inputs submit'>
                    <h2>Add New Plant</h2>
                    <div className='errors'>
                        <div>{errors.nickname}</div>
                        <div>{errors.species}</div>
                        <div>{errors.h2oFrequency}</div>
                        <div>{errors.image}</div>
                    </div>
                </div>

                <div className='form-group-inputs'>
                    <h3>User Information</h3>
                    <label>Nickname &nbsp;
                        <input
                            value={formValues.nickname}
                            onChange={onChange}
                            name='nickname'
                            type='text'
                            placeholder='Nickname'
                        />
                    </label>
                    <label>Species &nbsp;
                        <input
                            value={formValues.species}
                            onChange={onChange}
                            name='species'
                            type='text'
                            placeholder='Species'
                        />
                    </label>
                    <label>How often do you water this plant? &nbsp;
                        <select name="h2oFrequency" onChange={onChange}>
                        <option value="">--Select One--</option>
                        <option value="Once a day">Once a day</option>
                        <option value="Every other day">Every other day</option>
                        <option value="Once a week">Once a week</option>
                        <option value="Twice a week">Twice a week</option>
                        </select><br/><br/>
                    </label>
                    <label>Image: &nbsp;
                        <input
                            type="text"
                            onChange={onChange}
                            name='image'
                            value={formValues.image}
                        />
                    </label><br/>
                    <button disabled={disabled} className="save-plant">Save New Plant</button>
                </div>
            </form>
        </div>
    )
}