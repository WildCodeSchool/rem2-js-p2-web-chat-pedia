import React from 'react'
import { useState, useEffect } from 'react'
import './LoginCard.css'

const LoginCard = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [usersData, setUsersData] = useState([]);
    const {isUserLoggedIn, setIsUserLoggedIn} = props;
    const {userLoggedData, setUserLoggedData} = props;

    useEffect(() => {
        fetch("https://a.nacapi.com/PawdiaUsers")
            .then(response => response.json())
            .then(data => setUsersData(data))
            .catch(console.error)
    }, []);

    const LoginCheck = () => {
        for (let i = 0; i < usersData.length; i++) {
            if ((usersData[i].email === email) && (usersData[i].password === password)) {
                setIsUserLoggedIn(true)
                setUserLoggedData(usersData[i])
            } else { console.log("erreur") }
        }
    }

    console.log(userLoggedData.username)

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='LoginCard'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='login-notification'>{isUserLoggedIn ?
                    <p>Félicitation, vous êtes connecté</p>
                    :
                    <p>Connectez vous</p>}
                </div>

                <div className='input-line'>
                    <label htmlFor="text">
                        <i className="material-icons colored-icons">account_circle</i>
                    </label>
                    <input type="text" id="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-visual' />
                </div>

                <div className='input-line'>
                    <label htmlFor="password">
                        <i className="material-icons colored-icons">lock</i>
                    </label>
                    <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-visual' />
                </div>

                <button className='valid-button' onClick={LoginCheck}>
                    log in
                </button>
            </form>
        </div>
    )
}

export default LoginCard