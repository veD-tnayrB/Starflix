import React, { useState, createContext, useMemo } from 'react';
import useUsers from 'contexts/users/useUsers';
const LoggedUserContext = createContext();

const userInitialValue = {
    id: '',
    isLogged: false,
    name: '',
    lastName: '',
    userName: '',
    password: '',
    img: ''
}


const LoggedUserProvider = ({ children }) => {
    const { users } = useUsers();
    const [loggedUser, setLoggedUser] = useState(userInitialValue);

    useMemo(() => {
        const user = users.filter(user => user.isLogged === true)[0];
        setLoggedUser(user || userInitialValue);
    }, [users])
    
    
    return (
        <LoggedUserContext.Provider value={{ loggedUser }}>
            {children}
        </LoggedUserContext.Provider>
    )
}

export { LoggedUserProvider, LoggedUserContext };