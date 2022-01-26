import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import SearchBar from '../searchbar/SearchBar';
import "./NavBar.css";

const Navbar = (props) => {
    const {isUserLoggedIn} = props;

    return (
        <div className='Navbar'>
            <div className='navbar-logo-title'>
                <NavLink to="/">
                    <img src={logo} alt="cat logo"/>
                </ NavLink>
                <NavLink to="/" className='title-container'>
                    <h1 className="navbar-title">Wikipawdia</h1>
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
                <NavLink to="chat" className={(navData) =>
                    (navData.isActive ? "navigation-link selected" : "navigation-link")}>
                        <i className="material-icons">chat</i>
                </ NavLink>
                <NavLink to="login" className={(navData) =>
                    (navData.isActive ? "navigation-link selected" : "navigation-link")}>
                        <i className="material-icons">account_circle</i>
                </ NavLink>
            </div>
        </div>
    )
}

export default Navbar
