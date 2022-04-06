export const storageName = 'loggedUsers';

export { createLocalStorage } from './createLocalStorage';
export { getAllUsers } from './getAllUsers';
export { getUser } from './getUser';
export { isExistingUser } from './isExistingUser';
export { saveUser } from './saveUser';
export { deleteUser } from './deleteUser';

export const getUserRandomImage = () => {
    return `https://picsum.photos/600`;
}