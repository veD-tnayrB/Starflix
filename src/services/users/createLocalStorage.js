import { storageName } from './index';

export const createLocalStorage = () => {
    if (!localStorage.getItem(storageName)) {
        localStorage.setItem(storageName, '[]');
    }
}