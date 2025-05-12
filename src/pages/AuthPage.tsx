import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import './AuthPage.css';

interface AuthPageProps {
    handleLoginFlag: (role: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ handleLoginFlag }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(prev => !prev);
    };

    return (
        <div>
            <div>
                {isLogin ? (
                    <Login handleLoginFlag={handleLoginFlag} onToggleForm={toggleForm} />
                ) : (
                    <Register onToggleForm={toggleForm} />
                )}
            </div>
        </div>
    );
};

export default AuthPage;
