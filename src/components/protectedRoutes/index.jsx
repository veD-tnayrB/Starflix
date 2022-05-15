import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const ProtectedRoutes = () => {
    const isUserLogged = useAuth();
    console.log('SE EJECUTA PROTECTED ROUTES');
    return (
        <>
            {
                isUserLogged ? <Outlet /> : <Navigate to="/signup" />
            }
        </>
    )
}

export default ProtectedRoutes;