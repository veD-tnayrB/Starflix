import React, { useState, createContext } from 'react';
const UserContext = createContext();

const initialUserValue = {
    name: '',
    lastName: '',
    userName: '',
    img: '',
    password: '',
    id: ''
}

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(initialUserValue);

    const setLoggedUser = ({ name, lastName, userName, img, password, id }) => {
        setCurrentUser({
            name: name,
            lastName: lastName,
            userName: userName,
            img: img,
            password: password,
            id: id
        })
    }

    const logout = () => {
        setCurrentUser(initialUserValue);
    }

    return (
        <UserContext.Provider value={{currentUser, logout, setLoggedUser}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };