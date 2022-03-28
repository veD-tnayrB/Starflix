import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

const useAuth = () => {
    const {currentUser} = useContext(UserContext);
    return currentUser.username !== '' && currentUser.sessionID !== '';
}

export default useAuth;