import React from 'react'
// import { Link } from 'react-router-dom'

export default function password (props) {

    // destruct the props first
    const {
        values,
        submit,
        change,
        // disabled,
        // errors,
      } = props

    const onChange = evt => {
        // IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        // b) pull the value of the input from the event object
        // c) use the `update` callback coming in through props
        const {name, value} = evt.target;
        change(name, value);
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
                <p className ='hello'> Hello, Name </p>      
                <div className ='signin'>Change password</div>                          
                <div className='form-group'>                 
                    {/* build an `text` of type input for username. Controlled inputs need `value` and `onChange` props.
                        Inputs render what they're told - their current value comes from app state.
                        At each keystroke, a change handler fires to change app state. */}     
                    <div> 
                        <label> 
                            <input 
                                type="text" 
                                name="oldPassword" 
                                placeholder="Old password" 
                                onChange={onChange} 
                                value={values.oldPassword} 
                                /> 
                        </label> 
                        <label> 
                            <input 
                                type="text" 
                                name="newPassword" 
                                placeholder="New password" 
                                onChange={onChange} 
                                value={values.newPassword} 
                                /> 
                        </label>
                        <label> 
                            <input 
                                type="text" 
                                name="newPasswordConfirm" 
                                placeholder="Confirm new password" 
                                onChange={onChange} 
                                value={values.newPasswordConfirm} 
                                /> 
                        </label> 
                    </div>
                    <div className='submit'> 
                            <button>Update Password</button> <br />                            
                    </div>                                                      
                </div> 
            </div>
        </form>
    );
          

                
}