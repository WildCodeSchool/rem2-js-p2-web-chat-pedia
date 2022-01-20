import React from 'react'
import { useState, useEffect } from 'react'
import './LoginCard.css'


const LoginCard = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
    const [usersData, setUsersData] = useState([])

    useEffect(()=> {
    fetch("https://a.nacapi.com/PawdiaUsers")
    .then(response => response.json())
    .then(data => setUsersData(data))
    .catch(console.error)
    }, [] );

    console.log(isUserLoggedIn)

    const LoginCheck = () => {
        for (let i = 0; i < usersData.length; i++) {
            if ( (usersData[i].email === email) && (usersData[i].password === password) ) {
                setIsUserLoggedIn(true)
            } else {console.log("erreur")}
        }
    }

    

    const handleSubmit = (e) => {
    e.preventDefault();
    };

    return (
        <div className='LoginCard'>

            
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='login-notification'>{isUserLoggedIn ? <p>Félicitation, vous êtes connecté</p> : <p>Connectez vous</p>}</div>
                <div >
                    <i className="material-icons colored-icons">account_circle</i><input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-visual'/>
                </div>
                <div>
                    <i className="material-icons colored-icons">lock</i><input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-visual'/>
                </div>
                <button className='valid-button' onClick={LoginCheck}>login</button>
            </form>
        </div>
    )
}

export default LoginCard