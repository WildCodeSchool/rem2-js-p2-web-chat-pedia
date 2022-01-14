import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import "./NavBar.css";

const Navbar = () => {

    return (
        <div >
            <div className='topline'></div>
            <div className='Navbar'>
                <NavLink to="/"><img src={logo} alt="cat logo" className='navbar-logo'/></ NavLink>
                <NavLink to="/"className="title-container"><p className="navbar-title">Wikipawdia</p></ NavLink>
                <div className='navigation'>
                    <NavLink to="/" className={(navData) => (navData.isActive ? "navigation-link selected" : "navigation-link")}><i className="material-icons">home</i></ NavLink>
                    <NavLink to="depot" className={(navData) => (navData.isActive ? "navigation-link selected" : "navigation-link")}><i className="material-icons">cloud_upload</i></ NavLink>
                    <NavLink to="login" className={(navData) => (navData.isActive ? "navigation-link selected" : "navigation-link")}><i className="material-icons">login</i></ NavLink>
                </div>
            </div>
        
        </div>
    )
}

export default Navbar
