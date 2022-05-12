import { useContext } from 'react';
import { LoggedUserContext } from './loggedUserContext';

const useLoggedUser = () => {
    return useContext(LoggedUserContext);
}

export default useLoggedUser;