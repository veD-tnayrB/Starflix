import { storageName, createLocalStorage } from './index';

export const getAllUsers = () => {
    createLocalStorage();
    const currentUsers = JSON.parse(localStorage.getItem(storageName));
    return currentUsers;
}