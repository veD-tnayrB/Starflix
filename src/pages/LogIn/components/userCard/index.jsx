import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ userData }) => {
    const navigateTo = useNavigate();

    const redirectUser = () => {
        navigateTo(userData.userName);
    }

    return (
        <li onClick={redirectUser}>
            <div className="card-container">
                <div className="image-container">
                    <img src={userData.img} className="user-img" />
                </div>

                <span>{userData.userName}</span>
            </div>
        </li>
    )
}

export default UserCard