import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useLoggedUser from 'contexts/loggedUser/useLoggedUser';

const ProtectedRoutes = () => {
    const { loggedUser } = useLoggedUser();

    return (
        <>
            {
                loggedUser.isLogged ? <Outlet /> : <Navigate to="/signup" />
            }
        </>
    )
}

export default ProtectedRoutes;