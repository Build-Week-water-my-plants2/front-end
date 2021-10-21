import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Login (props) {

    // destruct the props first
    const {
        values,
        submit,
        change,
        login, 
        loginedUserInfo,
        // disabled,
        errors,
      } = props
      
    // navigate us to <website base URL>/plantlist

    // console.log('loginStatus in Login.JS:', loginedUserInfo);
    const history = useHistory();
    // history = []
    const routeToSite = () => {        
        //history.push("/login");
    }

    const onChange = evt => {
        const {name, value} = evt.target;
        change(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    console.log('errors: ', errors);
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
                        <div>{errors.username}</div>
          
                        <label> 
                            <input 
                                type="text" 
                                name="password" 
                                placeholder="Password" 
                                onChange={onChange} 
                                value={values.password} 
                                /> 
                        </label>    
                        <div>{errors.password}</div>                    
                    </div>
                    {/* <button> <Link to='/password'>Continue</Link> </button> */}
                    
                    <div className='submit'>
                            <button id='loginBtn' onClick={routeToSite}>Log in</button>
                    </div>                           
                </div> 
            </div>
        </form>
    );
}