import React from 'react'
import AssetsFilter from '../components/filters/AssetsFilter'
import CatWork from '../assets/cat-work.png'
import './Home.css'
import Slider from '../components/news/Slider';

const Home = () => {
    return (
        <div className='Home'>
            <div className='home-content'>
                <img src={CatWork} alt='chat au travail' className='home-img' />
                <h1 className='welcome-title'>Bienvenue à toi, babe !</h1>
                <p>Pour trouver la ressource dont tu as besoin, utilises au choix :</p>
                <p>- La barre de recherche</p>
                <p>- Les boutons ci-contre</p>
                <div >
                     <Slider /> 
                </div>
            </div>
            <div className='home-content'>
                <AssetsFilter />
            </div>
        </div>
    )
}

export default Home