import React, { useState, createContext } from 'react';
const UserContext = createContext();

const initialUserValue = {
    name: '',
    lastName: '',
    userName: '',
    userImage: '',
    password: '',
    id: ''
}

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(initialUserValue);
    console.log(currentUser)


    const setLoggedUser = ({ name, lastName, userName, userImage, password, id }) => {
        setCurrentUser({
            name: name,
            lastName: lastName,
            userName: userName,
            userImage: userImage,
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