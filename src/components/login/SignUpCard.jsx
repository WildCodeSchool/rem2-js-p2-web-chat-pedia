import React from 'react'
import {useState, useEffect} from 'react'
import './SignUpCard.css'

const SignUpCard = () => {

    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
     };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} className='input-visual'/>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-visual'/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-visual'/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-visual'/>
                <button className='valid-button' /*onClick={() => setIsUserLoggedIn(true)}*/>Sign Up</button>
            </form>
            
        </div>
    )
}

export default SignUpCard
