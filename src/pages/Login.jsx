import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import LoginCard from '../components/login/LoginCard'
import LostPassword from '../components/login/LostPassword'
import SignUpCard from '../components/login/SignUpCard'
import './Login.css'

const Login = () => {
    const [loginIsVisible, setLoginIsVisible] = useState(true)
    const [signUpIsVisible, setSignUpIsVisible] = useState(false)
    const [lostPasswordIsVisible, setLostPasswordIsVisible] = useState(false)

    return (
        <div className='Login'>
            <div className='login-container'>
                <h1>LoginCard</h1>
                <div><img src={logo} alt="cat logo" className='logo'/></div>
                <div className={loginIsVisible ? "container-on" : "container-off"}>
                    <LoginCard />
                    <button className="light-button" onClick={() => (setLoginIsVisible(!loginIsVisible), setSignUpIsVisible(!signUpIsVisible))}>Créer un compte ?</button>
                    <button className="light-button" onClick={() => (setLoginIsVisible(!loginIsVisible), setLostPasswordIsVisible(!lostPasswordIsVisible))}>Mot de passe oublié ?</button>
                </div>
                <div className={signUpIsVisible ? "container-on" : "container-off"}>
                    <SignUpCard />
                    <button className="light-button" onClick={() => (setLoginIsVisible(!loginIsVisible), setSignUpIsVisible(!signUpIsVisible))}>Retour au login</button>
                </div>
                <div className={lostPasswordIsVisible ? "container-on" : "container-off"}>
                    <LostPassword />
                    <button className="light-button" onClick={() => (setLoginIsVisible(!loginIsVisible), setLostPasswordIsVisible(!lostPasswordIsVisible))}>Retour au login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
