import React, {useEffect, useState} from 'react';
import * as yup from "yup";
import Schema from "../validation/Schema"
import axiosWithAuth from "./axiosWithAuth";
import { useHistory } from "react-router-dom";


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
export default function EditForm(props){
    const { plant, isToggled} = props
    const {push} = useHistory();
    const [editFormValues, setEditFormValues] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [errors, setErrors]=useState(initialFormErrors);


    const edit_plant = (newPlant) => {
        
        axiosWithAuth().put(`https://web46-watermyplants2.herokuapp.com/api/plants/put/:id`,newPlant)
            .then(res => { 
                setEditFormValues(initialFormValues)
            })
            .catch(err => {
                console.error(err);
            })
    }

    const validate = (name, value) => {
        yup.reach(Schema, name)
            .validate(value)
            .then(() => setErrors({...errors, [name]:""}) )
            .catch(err => setErrors({errors, [name]: err.errors[0]}))
    }

    const change= (name, value) =>{
        setEditFormValues({ ...editFormValues, [name]: value });
        validate(name, value);

    }

    const form_submit = () => {
        const new_plant = {
            nickname: editFormValues.nickname.trim(),
            species: editFormValues.species.trim(),
            h2oFrequency: editFormValues.h2oFrequency.trim(),
            image: editFormValues.image.trim()
        }
        edit_plant(new_plant);
    }

    useEffect(() => {
        Schema.isValid(editFormValues).then(valid => setDisabled(!valid))
    },[editFormValues])


    const onSubmit = evt => {
        evt.preventDefault();
        form_submit();
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        change(name, value);
    }

    return(
       
        <form className='plant-form-container' onSubmit={onSubmit} >
            <div className='form-inputs submit'>
                <h2>Edit New Plant</h2>
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
                        value={editFormValues.nickname}
                        onChange={onChange}
                        name='nickname'
                        type='text'
                        placeholder={`Give a new nickname to ${plant.nickname} `}
                    />
                </label>
                <label>Species &nbsp;
                    <input
                        value={editFormValues.species}
                        onChange={onChange}
                        name='species'
                        type='text'
                        placeholder={`Edit species of ${plant.nickname}`}
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
                        value={editFormValues.image}
                    />
                </label><br/>
                <button disabled={disabled} className="save-plant">Save New Plant</button>
            </div>
        </form>
        
    )
}