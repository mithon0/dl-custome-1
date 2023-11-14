import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const {user} = useAuth();
    // console.log(user?.email)
    
    return (
        
        <div className='my-16'>
            
        </div>
    );
};

export default UserProfile;