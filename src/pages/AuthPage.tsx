import React from 'react';
import Register from './Register';
import Login from './Login';
import './AuthPage.css';

const AuthPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <Login />
            </div>
            <div className="auth-form">
                <Register />
            </div>
        </div>
    );
};

export default AuthPage;
