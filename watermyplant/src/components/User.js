import React from 'react'

export default function User (details) {
    if (!details) {
        return <h3>Working fetching the user&apos;s details...</h3>
      }
      return (
        <form className='form-wrapper' >        
            <div className = 'container'> 
                {/* <p className ='hello'> Hello UserPage</p>                */}
                    {/* <div className ='signin'>Sign in or <Link to='/signup'> create an account</Link> </div>           */}
                <div className='User_container'> 

                    <h2>{details.username}</h2>
                    <p>Email: {details.email}</p>
                    <p>PhoneNumber: {details.phoneNumber}</p>
                    <p>Password: {details.password}</p>   

                </div>
            </div>
        </form>
      );

}