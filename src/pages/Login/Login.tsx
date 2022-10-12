import './Login.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <div className='hero'>
                <img
                    src={require('../../images/logo.png')}
                    alt='logo'
                    className='logo'
                />
                <img
                    src={require('../../images/pablo-sign-in 1.png')}
                    alt='hero'
                />
            </div>

            <form action=''>
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <div className='email-input'>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                    />
                </div>
                <div className='password-input'>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                    />
                    <div className='show-password'>SHOW</div>
                </div>
                <h3>FORGOT PASSWORD?</h3>
                <button onClick={() => navigate('/users')}>LOG IN</button>
            </form>
        </div>
    );
};

export default Login;
