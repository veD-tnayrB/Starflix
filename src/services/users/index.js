const registerUser = (name, lastName, userName, password, userID) => {
    const isRegisteredUsersCreated = localStorage.getItem('registeredUsers');
    const currentRegisteredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
    isRegisteredUsersCreated && localStorage.setItem('registeredUsers', 
    [...currentRegisteredUsers, {
        name: name,
        lastName: lastName,
        username: userName,
        password: password,
        userID: userID
    }]);
}

const isTheRegisteredUser = (userName, userID) => {
    const isRegisteredUsersCreated = localStorage.getItem('registeredUsers');
    const registeredUsers = isRegisteredUsersCreated && JSON.parse(localStorage.getItem('registeredUsers'));
    return registeredUsers.some(user => user.name === userName && user.id === userID);
}

const getAllUsersData = () => {
    const isRegisteredUsersCreated = localStorage.getItem('registeredUsers');
    const registeredUsers = isRegisteredUsersCreated && JSON.parse(localStorage.getItem('registeredUsers'));

    return registeredUsers;
}

const getUserData = (userName, userID) => {
    const isRegisteredUsersCreated = localStorage.getItem('registeredUsers');
    const registeredUsers = isRegisteredUsersCreated && JSON.parse(localStorage.getItem('registeredUsers'));
    return registeredUsers.find(user => user.id === userID && user.username === userName);
}

export { registerUser, isTheRegisteredUser, getAllUsersData, getUserData };