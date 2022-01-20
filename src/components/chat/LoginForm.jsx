import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = { 'Project-ID':'1c809c44-de51-423c-8f25-20172c711d83', 'User-Name': username, 'User-Secret': password};
    try {
      await axios.get('https://api.chatengine.io/chats', {headers: authObject });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();

    } catch (error) {
      setError('Oups, identification incorrecte!')
    }
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>TCHAT</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Identifiant' required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Mot de passe' required />
          <div align="center">
            <button type="submit" className='button'>
              <span>Commencer le Tchat</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
       </form>
      </div>
    </div>
  )
};

export default LoginForm;

