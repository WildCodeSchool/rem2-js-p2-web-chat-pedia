import React from 'react'
import { useState } from 'react'
import CatWork from '../../assets/cat-work.png'
import LoginCard from '../../components/login/LoginCard'
import LostPassword from '../../components/login/LostPassword'
import ProfileCard from '../../components/login/ProfileCard'
import SignUpCard from '../../components/login/SignUpCard'
import './Login.css'

const Login = (props) => {
    const [loginIsVisible, setLoginIsVisible] = useState(true)
    const [signUpIsVisible, setSignUpIsVisible] = useState(false)
    const [lostPasswordIsVisible, setLostPasswordIsVisible] = useState(false)
    const {isUserLoggedIn, setIsUserLoggedIn} = props;
    const {userLoggedData, setUserLoggedData} = props;

    return (
        <div className='Login'>
            {isUserLoggedIn ?
                <div>
                    <ProfileCard userLoggedData={userLoggedData}  setUserLoggedData={setUserLoggedData}/>
                </div>
            :
                <div className='login-container'>
                    <h3>Connectez-vous</h3>
                    <div><img src={CatWork} alt='chat au travail' className='connection-cat'/></div>
                    <div className={loginIsVisible ? "container-on" : "container-off"}>
                        <LoginCard isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} userLoggedData={userLoggedData}  setUserLoggedData={setUserLoggedData}/>
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
            }
        </div>
    )
}

export default Login
