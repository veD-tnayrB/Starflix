import { useEffect, useReducer, createContext } from "react";
import { usersReducer, USERS_ACTIONS } from './usersReducer';

const UsersContext = createContext();


const UsersProvider = ({ children }) => {
    const [users, dispatch] = useReducer(usersReducer, JSON.parse(localStorage.getItem('users')) || []);

    // Save every change to LocalStorage
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));

    }, [users])


    const registerUser = (newUser) => {
        dispatch({ type: USERS_ACTIONS.register, payload: { newUser }});
    }

    const logUser = (user) => {
        dispatch({ type: USERS_ACTIONS.login, payload: { user } });
    }

    const logoutUser = () => {
        dispatch({ type: USERS_ACTIONS.logout });
    }

    return (
        <UsersContext.Provider value={{users, registerUser, logUser, logoutUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export { UsersProvider, UsersContext };