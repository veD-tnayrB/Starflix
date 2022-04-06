import { storageName, getAllUsers } from './index';

export const saveUser = (user) => {
    const currentUsers = getAllUsers();

    localStorage.setItem(storageName, JSON.stringify(
        [...currentUsers,
            { ...user }
        ]
    ))
}