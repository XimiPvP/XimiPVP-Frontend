import React from 'react';
import '../style/header.css';
import { LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const logoUrl = 'https://api.ximi.lol/uploads/logo.png?v=1';

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
            <img src={logoUrl} alt="XimiPVP" draggable="false"/>
        </div>
    );
}

export default Head;
