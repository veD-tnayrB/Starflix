import { useNavigate, Outlet } from 'react-router-dom';

import UserCard from './components/userCard';
import useUsers from 'contexts/users/useUsers';

import './assets/scss/login.scss';


const LogIn = () => {
    const [users] = useUsers();
    const navigateTo = useNavigate();


    const usersElements = users.map(user => (
        <UserCard 
         key={user.id}
         userData={user}
        />
    ))


    return (  
        <main className="log-in-page">
            <div className="action-container">
                <ol className="user-list">
                    {usersElements}
                </ol>

                <button
                 className="secondary-button"
                 onClick={() => navigateTo("/signup")}
                >
                    Sign Up
                </button>
            </div>
            <Outlet />
        </main>
                
    )
}

export default LogIn;