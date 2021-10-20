import React from 'react';
import { Link } from 'react-router-dom'

const Users = (props) => {
    console.log('props.users in Users', props);
    return (
        <form className='form-wrapper'> 
            <div className="container">
            <p className ='createAcc'> Users information </p>
                <div className='form-group submit'> 
                    <div> 
                        {props.users.map(user => (
                            <div className="user-wrapper" key={user.uuid}>
                                <h2>{user.name.first}</h2>
                                <Link to={`/users/${user.login.uuid}`}>
                                    <img src={user.picture.medium} alt={user.name} />
                                </Link>
                                <p>Contact: {user.email}</p>
                                <p>Location: {user.location.state}</p>
                            </div>
                        ))}
                    </div>                    
                </div>
            </div>
        </form>
    )
}

export default Users;