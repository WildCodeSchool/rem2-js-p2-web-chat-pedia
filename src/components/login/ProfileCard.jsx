import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css'

const ProfileCard = (props) => {
  const {userLoggedData, setUserLoggedData} = props;

  return <div className='login-container'>
    <h1>Profile</h1>
    <div className='user-container'>
      <img src={userLoggedData.avatar} alt={userLoggedData.username} className='avatar-logo'/>
      <div className='user-description'>
        <p>{userLoggedData.username}</p>
        <p>Date de naissance : {userLoggedData.birthday}</p>
        <p>profile : {userLoggedData.role}</p>
        <div className='profile-avatar'>
          <a href={userLoggedData.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i></a>
          <a href={userLoggedData.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github" ></i></a>
        </div>
      </div>
    </div>
        <p>Tu pourras prochainement contribuer <Link to="/depot">ici</Link></p>

  </div>;
};

export default ProfileCard;
