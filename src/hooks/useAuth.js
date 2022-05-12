import useLoggedUser from 'contexts/loggedUser/useLoggedUser';

const useAuth = () => {
    const { loggedUser } = useLoggedUser();
    return loggedUser.isLogged;
}

export default useAuth;