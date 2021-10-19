import React from 'react'

export default function User (props) {
   
    if (!props) {
        return <h3>Working fetching the user&apos;s details...</h3>
      }
      return (
        <form className='form-wrapper' >        
            <div className = 'container'> 
                {/* <p className ='hello'> Hello UserPage</p>                */}
                    {/* <div className ='signin'>Sign in or <Link to='/signup'> create an account</Link> </div>           */}
                <div className='User_container'> 

                    <h2>id: {props.details.id} </h2>
                    <h2>username: {props.details.username}</h2>
                    <p>Email: {props.details.email}</p>
                    <p>PhoneNumber: {props.details.phoneNumber}</p>
                    <p>Password: {props.details.password}</p>  

                </div>
            </div>
        </form>
      );

}