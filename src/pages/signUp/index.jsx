import React from 'react';
import RegisterForm from './components/registerForm';
import './assets/scss/signup.scss';

const SignUp = () => {
    
    return (
        <main className="sign-up-page">
            <article className="sign-up-card">
                <div className="ilustrative-img">
                </div>
                <RegisterForm />
            </article>
        </main>
    )
}

export default SignUp;