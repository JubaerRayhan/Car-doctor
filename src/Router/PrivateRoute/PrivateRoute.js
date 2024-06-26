import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className='text-4xl'>Loading... </h1>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace> </Navigate>
    
};

export default PrivateRoute;