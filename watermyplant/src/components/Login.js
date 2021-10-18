import React from 'react'
import { Link } from 'react-router-dom';

export default function Login (props) {
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

    // IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props 
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    return (
        // build the form here
        
        <form className='form container' onSubmit={onSubmit}>
            {/* // temp comments, need delete later */}
            <h2>Hello</h2>   
            <div>Sign in to WatermyPlant 2.0 or <Link to='/signup'> create an account</Link> </div>          
            <div className='form-group inputs'>
            <div>Username or email </div>                
            <label>
            {/* build an `text` of type input for username. Controlled inputs need `value` and `onChange` props.
                Inputs render what they're told - their current value comes from app state.
                At each keystroke, a change handler fires to change app state. */}
                <input
                    type="text"
                    name="username"
                    placeholder="type an username here..."
                    onChange={onChange}
                    value={values.username}
                />
            </label>
            

            </div>
            
        </form>
    );
}