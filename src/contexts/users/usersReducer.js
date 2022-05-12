import uniqid from 'uniqid';

const USERS_ACTIONS = {
    register: 'register',
    login: 'login',
    logout: 'logout'
}


const usersReducer = (state, action) => {
    switch (action.type) {

        case USERS_ACTIONS.register:
            return (
                [
                    ...state,
                    {
                        ...action.payload.newUser,
                        isLogged: true,
                        id: uniqid
                    }
                ]
            )

        case USERS_ACTIONS.login:
            return (
                state.map(user => {
                    if (user.id === action.payload.user.id) {
                        return {
                            ...user,
                            isLogged: true
                        }
                    }

                    return user;
                })
            )

        case USERS_ACTIONS.logout:
            return (
                state.map(user => {
                    if (user.isLogged) {
                        return {
                            ...user,
                            isLogged: false
                        }
                    }

                    return user;
                })
            )

        default:
            return state;
    }
}


export { usersReducer, USERS_ACTIONS };