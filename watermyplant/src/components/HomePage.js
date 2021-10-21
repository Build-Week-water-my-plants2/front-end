import React from 'react'
// import { Link } from 'react-router-dom'

export default function HomePage (props) {
    // destruct the props first
    const { value, update, submit, errorText } = props

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
        // build the login form here   
           
        <form className='form-wrapper' onSubmit={onSubmit}> 
        
            <div className = 'container'> 
                <p className ='hello'> Hello HomePage</p>               
                {/* <div className ='signin'>Sign in or <Link to='/signup'> create an account</Link> </div>           */}
                <div className='form-group'> 
                    {/* build an `text` of type input for username. Controlled inputs need `value` and `onChange` props.
                        Inputs render what they're told - their current value comes from app state.
                        At each keystroke, a change handler fires to change app state. */}     
                    <div> 
                        {/* <label> 
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username or Email" 
                                onChange={onChange} 
                                value={values.username} 
                                /> 
                        </label>  */}
                    </div>
                    {/* <button> <Link to='/password'>Continue</Link> </button> */}
                    <div>
                        {/* <label> 
                            <input 
                                type="checkbox" 
                                name="staySignedIn" 
                                
                                onChange={onChange} 
                                checked={values.staySignedIn} 
                            /> <p> Stay signed in </p>
                        </label> */}
                    </div>                                       
                </div> 
            </div>
        </form>
    );
}