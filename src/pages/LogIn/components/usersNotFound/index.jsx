import React from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from 'components/modal';

import './usersnotfound.scss';

const UsersNotFound = () => {
    const navigateTo = useNavigate();

    return (
        <main className="users-not-found-page">
            <Modal isCanceleable={false}>
                <article>
                    <h1>It seems that there are no users here</h1>

                    <p>
                        To be able to log in you need to register a user first,
                        remember that logged users are saved on the device.
                    </p>

                    <button 
                     className="main-button"
                     onClick={() => navigateTo('/signup')}
                    >
                        Register
                    </button>
                </article>
            </Modal>
        </main>
    )
}

export default UsersNotFound;