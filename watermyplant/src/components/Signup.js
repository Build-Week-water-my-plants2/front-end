import React from 'react'

export default function Signup (props) {
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
<<<<<<< HEAD

        update(name, value);

=======
        change(name, value);
>>>>>>> 2f5346cf3895458e731803f4f8edea9ed88414f8
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
<<<<<<< HEAD
                <p className ='createAcc'> Create an account </p>  

=======
                <p className ='createAcc'> Create an account </p>
>>>>>>> 2f5346cf3895458e731803f4f8edea9ed88414f8
                <div className='form-group submit'>                     
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
<<<<<<< HEAD

                        <label>
                            <input
                                type='text'
                                name='email'                                
                                placeholder="Email"
                                onChange={onChange}   
                                value={values.email}
                                />
                        </label>

=======
>>>>>>> 2f5346cf3895458e731803f4f8edea9ed88414f8
                        <label> 
                            <input 
                                type="text" 
                                name="password" 
                                placeholder="Password" 
                                onChange={onChange} 
                                value={values.password} 
                                /> 
                        </label>
                        <label> 
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Phone Number" 
                                onChange={onChange} 
                                value={values.phone} 
                                /> 
                        </label>
                        
                        <div className = 'plength'>By Creating an account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.</div>
                        {/* <button> <Link to='/users'>Link to users</Link> </button> */}
                        <div className='submit'>
                            <button>create an account</button>
                        </div>  
                    </div>
                </div>
                
            </div>
        </form>
    );
}