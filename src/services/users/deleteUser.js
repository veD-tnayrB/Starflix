import { storageName, getAllUsers } from './index';

export const deleteUser = (userName) => {
    const currentUsers = getAllUsers();
    const newUserList = currentUsers.filter(user => userName !== user.userName);
    localStorage.setItem(storageName, newUserList);
}