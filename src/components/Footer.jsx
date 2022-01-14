import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'



const Footer = () => {
    return (
        <div className='Footer'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='contact'><h1>Nous Contacter</h1></div>
            <div className='container-personel'>
                <div className='personel'>
                    <p >Marine Grandcolas</p>
                    <div className='icon-personel'>
                        <a href="https://www.linkedin.com/in/marine-grandcolas/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i></a>
                        <a href="https://github.com/MarineGrandcolas" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" ></i></a>
                    </div>
                </div>
                <div className='personel'>
                    <p>Romain Jugal</p>
                    <div className='icon-personel'>
                        <a href="https://www.linkedin.com/in/romain-jugal-76496b57" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i></a>
                        <a href="https://github.com/RomainJuga" target="_blank"><i className="fa fa-github" rel="noopener noreferrer"></i></a>
                    </div>
                </div>
                <div className='personel'>
                    <p>Yacine Hatem</p>
                    <div className='icon-personel'>
                        <a href="" target="_blank"><i className="fa fa-linkedin" rel="noopener noreferrer" ></i></a>
                        <a href="https://github.com/YacineHATEM" target="_blank"><i className="fa fa-github" rel="noopener noreferrer"></i></a>
                    </div>
                </div>
                <div className='personel'>
                    <p>Florent fevre</p>
                    <div className='icon-personel'>
                        <a href="https://www.linkedin.com/in/florent-fevre/" target="_blank"><i className="fa fa-linkedin" rel="noopener noreferrer"></i></a>
                        <a href="https://github.com/Florent-fevre" target="_blank"><i className="fa fa-github" rel="noopener noreferrer"></i></a>
                    </div>
                </div>
                <div className='personel'>
                    <p>Juliette Rivat</p>
                    <div className='icon-personel'>
                        <a href="" target="_blank"><i className="fa fa-linkedin" rel="noopener noreferrer" ></i></a>
                        <a href="https://github.com/JulietteRivat" target="_blank"><i className="fa fa-github" rel="noopener noreferrer"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Footer;








