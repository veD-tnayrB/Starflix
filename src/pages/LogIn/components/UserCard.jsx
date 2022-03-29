import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
    const navigateTo = useNavigate();

    const redirectUser = () => {
        navigateTo(`/log-in/${user.userName}`);
    }

    return (
        <li onClick={redirectUser}>
            <div className="card-container">
                <div 
                 className="image-container"
                >
                </div>

                <span>{user.userName}</span>
            </div>
        </li>
    )
}

export default UserCard