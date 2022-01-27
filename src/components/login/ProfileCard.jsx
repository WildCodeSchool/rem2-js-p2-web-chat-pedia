import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css'

const ProfileCard = (props) => {
  const {userLoggedData, setUserLoggedData} = props;

  return <div >
            <h1>Profil</h1>
            <div className='ProfileCard'>
              <div className="avatar-logo" style={{ backgroundImage: `url(${userLoggedData.avatar})` }}>
              </div>
              <div className='user-description'>
                <h4 className="user-title">{userLoggedData.username}</h4>
                <div className="user-info">
                  <p><span class="material-icons">cake</span>{userLoggedData.birthday}</p>
                  <p><span class="material-icons">assignment_ind</span> {userLoggedData.role}</p>
                </div>
              </div>
              <div className='profile-bottom'>
                <span>
                  <a href={userLoggedData.linkedin} target="_blank" rel="noopener noreferrer" className='socials'><i className="fa fa-linkedin" ></i></a>
                  <a href={userLoggedData.github} target="_blank" rel="noopener noreferrer" className='socials'><i className="fa fa-github" ></i></a>
                </span>
                <p></p>
                <Link to="/depot"><button className="link-button">Contribuer</button></Link>
              </div>
            </div>

        </div>;
};

export default ProfileCard;
