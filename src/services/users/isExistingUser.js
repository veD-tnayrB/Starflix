import { storageName, getAllUsers } from './index';

export const isExistingUser = ({ userName }) => {
    const currentUsers = getAllUsers();
    return currentUsers.some(user => user.userName === userName);
}