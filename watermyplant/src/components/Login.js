import React from 'react'
import { Link } from 'react-router-dom'
// import { useState, useEffect }  from 'react';

export default function Login (props) {

    // destruct the props first
    const {
        values,
        submit,
        change,
        // disabled,
        // errors,
      } = props

    const onChange = evt => {
        const {name, value} = evt.target;
        change(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    return (
        // build the login form here        
        <form className='form-wrapper' onSubmit={onSubmit}> 
            <div className = 'container'> 
                <p className ='hello'> Hello </p>               
                <div className ='signin'>Sign in or <Link to='/signup'> create an account</Link> </div>          
                <div className='form-group'> 
                    {/* build an `text` of type input for username. Controlled inputs need `value` and `onChange` props.
                        Inputs render what they're told - their current value comes from app state.
                        At each keystroke, a change handler fires to change app state. */}     
                    <div> 
                        <label> 
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                onChange={onChange} 
                                value={values.username} 
                                /> 
                        </label> 
                        <label> 
                            <input 
                                type="text" 
                                name="password" 
                                placeholder="Password" 
                                onChange={onChange} 
                                value={values.password} 
                                /> 
                        </label>
                        {/* <label> 
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Phone Number" 
                                onChange={onChange} 
                                value={values.phone} 
                                /> 
                        </label> */}
                    </div>
                    {/* <button> <Link to='/password'>Continue</Link> </button> */}
                    <div className='submit'>
                            <button>Log in</button>
                    </div>                           
                </div> 
            </div>
        </form>
    );
}