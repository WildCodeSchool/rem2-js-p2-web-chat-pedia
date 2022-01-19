import React from 'react'
import { useState, useEffect } from 'react'
import './LoginCard.css'


const LoginCard = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

    const handleSubmit = (e) => {
       e.preventDefault();
    };

    return (
        <div className='LoginCard'>

            
            <form onSubmit={handleSubmit} className='form-container'>
                <div >
                    <i className="material-icons colored-icons">account_circle</i><input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <i className="material-icons colored-icons">lock</i><input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='valid-button' onClick={() => setIsUserLoggedIn(true)}>login</button>
            </form>
        </div>
    )
}

export default LoginCard