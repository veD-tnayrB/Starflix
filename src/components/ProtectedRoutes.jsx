import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoutes = () => {
    const isAuth = useAuth();

    return (
        <div>
            {
                isAuth ? <Outlet /> : <Navigate to='/' />
            }
        </div>
    )
}

export default ProtectedRoutes;