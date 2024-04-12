import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import { useSelector } from 'react-redux';
 
const PrivateRoute = ({ children, allowedTypes }) => {
    const { loggedIn, userType } = useSelector(state => state.auth);
    if (!loggedIn) {
        return <Navigate to="/login" replace />;
    }
 
    if (!allowedTypes.includes(userType)) {
        return <Navigate to="/" replace />;
    }
 
    return <Outlet />;
};
 
 
export default PrivateRoute;