import { useContext } from 'react';
import { UsersContext } from 'contexts/users/usersContext';

const useUsers = () => {
    return useContext(UsersContext);
}

export default useUsers;