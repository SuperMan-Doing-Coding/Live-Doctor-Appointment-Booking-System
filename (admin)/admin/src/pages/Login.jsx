import React from 'react'
import {assets} from '../assets/assets.js'
import { useState } from 'react'
import './Login.css';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="login-container">
                <h2 className="login-title">Admin Login</h2>
                <p className="login-state">
                    <span>{state}</span>
                </p>
                <div className="input-group">
                    <label className="input-label">Email</label>
                    <input 
                        type='email' 
                        required 
                        placeholder='Enter your email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="input-field"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Password</label>
                    <input 
                        type='password' 
                        required 
                        placeholder='Enter your password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input-field"
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </div>
        </form>      
    );
}

export default Login;
