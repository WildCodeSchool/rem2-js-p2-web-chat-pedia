import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import "./NavBar.css";

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div >
            <div className='topline'></div>
            <div className='Navbar'>
                
                <NavLink to="/"><img src={logo} alt="cat logo" className='logo'/></ NavLink>
                <NavLink to="/"className="title-container"><p className="title">Wikipawdia</p></ NavLink>

                
                {/* <input type="text" className={isVisible ? "search-bar-on" : "search-bar"} /> */}


                <div className='navigation'>
                    <div className="search-button" onClick={() => setIsVisible(!isVisible)}><span class="material-icons">search</span></div>
                    <NavLink to="/" className={(navData) => (navData.isActive ? "navigation-link selected" : "navigation-link")}><i className="material-icons">home</i></ NavLink>
                    <NavLink to="depot" className={(navData) => (navData.isActive ? "navigation-link selected" : "navigation-link")}><i className="material-icons">cloud_upload</i></ NavLink>
                    <NavLink to="login" className={(navData) => (navData.isActive ? "navigation-link selected" : "navigation-link")}><i className="material-icons">login</i></ NavLink>
                </div>
            </div>
        
        </div>
    )
}

export default Navbar
