import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import SearchBar from '../searchbar/SearchBar';
import "./NavBar.css";

const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='navbar-logo-title'>
                <NavLink to="/">
                    <img src={logo} alt="cat logo"/>
                </ NavLink>
                <NavLink to="/" className='title-container'>
                    <p className="navbar-title">Wikipawdia</p>
                </ NavLink>
            </div>
            <div className='searchbar-component'>
            <SearchBar />
            </div>
            <div className='navigation'>
                <NavLink to="/" className={(navData) =>
                    (navData.isActive ? "navigation-link selected" : "navigation-link")}>
                        <i className="material-icons">home</i>
                </ NavLink>
                <NavLink to="depot" className={(navData) =>
                    (navData.isActive ? "navigation-link selected" : "navigation-link")}>
                        <i className="material-icons">cloud_upload</i>
                </ NavLink>
                <NavLink to="login" className={(navData) =>
                    (navData.isActive ? "navigation-link selected" : "navigation-link")}>
                        <i className="material-icons">login</i>
                </ NavLink>
                <NavLink to="chat" className={(navData) =>
                    (navData.isActive ? "navigation-link selected" : "navigation-link")}>
                        <i className="material-icons">chat</i>
                </ NavLink>
            </div>
        </div>
    )
}

export default Navbar
