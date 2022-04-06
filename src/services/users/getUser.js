import { storageName, getAllUsers } from './index';

export const getUser = (userName) => {
    const currentUsers = getAllUsers();
    return currentUsers.find(user => userName === user.userName);
}