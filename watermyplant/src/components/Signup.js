import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
// import "./Sign_Up.css";

const initialValues = {
    username: "",
    password:"",
    phoneNumber: ""
};



export default function Signup() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://web46-watermyplants2.herokuapp.com/api/users/register', formValues)
        .then((res) => {

            push('./login');
        })
        .catch(err => {
            console.log(err.message);
        })
        .finally(() => {
            setFormValues(formValues)
            console.log(formValues);
        })
    };


    return (
        <>
            <div className="signup-container">
                <form id='signup-form' onSubmit={handleSubmit}>
                    <div className="signup-form-header">
                        <h1>Create an account</h1>
                        <p>Already have an account? <Link id ="login" to="/login">Login here!</Link></p>
                    </div>

                    <div className="signup-input-container">
                        <div className="form-inputs" id="signup-inputs">
                                <label htmlFor="username">Username:</label>
                                <input
                                    value={formValues.username}
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={handleChange}
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    value={formValues.password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                />
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    value={formValues.phoneNumber}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    onChange={handleChange}
                                    />
                            <div className="errors">
                            </div>
                        </div>
                        <button id='signup-button'>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}