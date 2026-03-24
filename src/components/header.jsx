import React from 'react';
import '../style/header.css';
import Logo from '../assets/logo.png';
import { LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Head() {
    const navigate = useNavigate();
    const isLogged = localStorage.getItem('token');
    const myUsername = localStorage.getItem('username'); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }

    return (
        <div className="header">
            <div className="auth">
                {isLogged ? (
                    <>
                        <button onClick={() => navigate(`/profile/${myUsername}`)}>
                            <User /> Profilo
                        </button>
                        <button onClick={() => handleLogout()}><LogOut /> Logout</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate('/login')}><LogIn /> Login</button>
                        <button onClick={() => navigate('/register')}><UserPlus /> Register</button>
                    </>
                )}
            </div>
            <a href="https://ximipvp.eu/assets/logo.png" target="_blank" rel="noopener noreferrer">
                <img src={Logo} alt="XimiPVP" draggable="false"/>
            </a>
        </div>
    );
}

export default Head;
