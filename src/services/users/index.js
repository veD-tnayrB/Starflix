const storageName = 'loggedUsers';

export const createLocalStorage = () => {
    if (!localStorage.getItem(storageName)) {
        localStorage.setItem(storageName, '[]');
    }
}

export const getAllUsers = () => {
    createLocalStorage();
    const currentUsers = JSON.parse(localStorage.getItem(storageName));
    return currentUsers;
}

export const getUser = (userName) => {
    const currentUsers = getAllUsers();
    return currentUsers.find(user => userName === user.userName);
}

export const isExistingUser = ({ userName }) => {
    const currentUsers = getAllUsers();
    return currentUsers.some(user => user.userName === userName);
}

export const saveUser = (user) => {
    const currentUsers = getAllUsers();

    localStorage.setItem(storageName, JSON.stringify(
        [...currentUsers,
            { ...user }
        ]
    ))
}

export const deleteUser = (userName) => {
    const currentUsers = getAllUsers();
    const newUserList = currentUsers.filter(user => userName !== user.userName);
    localStorage.setItem(storageName, newUserList);
}

export const getUserRandomImage = () => {
    return `https://picsum.photos/600`;
}