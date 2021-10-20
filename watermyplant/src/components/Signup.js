import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup (props) {
    // destruct the props first

    const { values, update, submit, errorText } = props


    const onChange = evt => {
        // IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        // b) pull the value of the input from the event object
        // c) use the `update` callback coming in through props
        const {name, value} = evt.target;
        update(name, value);

    }
    
    const onSubmit = evt => {
        // IMPLEMENT the submit handler
        // a) don't allow the browser to reload!
        // c) use the `submit` callback coming in through props 
        evt.preventDefault();
        submit();
      }

    return (
        // build the Signup form here
        <form className='form-wrapper' onSubmit={onSubmit}> 
            {/* class .container and .form-group to render login, signup and password page blocks position */}
            <div className = 'container'> 
                <p className ='createAcc'> Create an account </p>

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
                                type='text'
                                name='email'                                
                                placeholder="Email"
                                onChange={onChange}   
                                value={values.email}
                                />
                        </label>

                        <label> 
                            <input 
                                type="text" 
                                name="phoneNumber" 
                                placeholder="Phone Number" 
                                onChange={onChange} 
                                value={values.phoneNumber} 
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
                        <div className = 'plength'>By Creating an account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.</div>

                        <button> <Link to='/password'>Create account</Link> </button>

                    </div>
                </div>
                
            </div>
        </form>
    );
}