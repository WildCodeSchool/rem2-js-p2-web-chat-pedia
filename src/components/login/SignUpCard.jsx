import React from 'react'
import {useState, useEffect} from 'react'
import './SignUpCard.css'

const SignUpCard = () => {

    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='SignUpCard'>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" placeholder="Entrer votre nom de profil" value={userName} onChange={(e) => setUserName(e.target.value)} className='input-visual'/>
                <input type="text" placeholder="Entrer votre adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} className='input-visual'/>
                <input type="password" placeholder="Entrer votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className='input-visual'/>
                <input type="password" placeholder="Entrer de nouveau votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className='input-visual'/>
            </form>
                <button className="light-button">La création de compte sera prochainement disponible</button>
            
        </div>
    )
}

export default SignUpCard
