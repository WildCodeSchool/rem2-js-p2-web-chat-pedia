import React from 'react'
import {useState, useEffect} from 'react'
import './LostPassword.css'

const LostPassword = () => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-visual'/>
                <button className='valid-button' /*onClick={() => setIsUserLoggedIn(true)}*/>Lost password</button>
            </form>
        </div>
    )
}

export default LostPassword
