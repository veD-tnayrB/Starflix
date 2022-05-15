import React, { useState, useEffect, createContext } from 'react';
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


    useEffect(() => {
        const user = users.find(user => user.isLogged === true);
        console.log(user)
        setLoggedUser(user || userInitialValue);
    }, [users])
    
    
    return (
        <LoggedUserContext.Provider value={{ loggedUser }}>
            {children}
        </LoggedUserContext.Provider>
    )
}

export { LoggedUserProvider, LoggedUserContext };