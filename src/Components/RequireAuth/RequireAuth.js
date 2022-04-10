import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../fierbase.init';

const RequireAuth = ({children}) => {
    const location = useLocation()
    let [user] = useAuthState(auth)
    if(!user){
        return (
            <Navigate to='/signin' state={{from:location}} replace></Navigate>
        )
    }
    return (
       children
    );
};

export default RequireAuth;