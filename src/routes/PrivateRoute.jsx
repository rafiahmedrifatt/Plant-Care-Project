import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loader from '../components/loader/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Loader />
    }

    if (user && user.email) {
        return <div>{children}</div>
    } else {
        return <Navigate to="/login" state={location.pathname} ></Navigate>
    }
};

export default PrivateRoute;