import React from 'react'
import AssetsFilter from '../components/filters/AssetsFilter'
import CatWork from '../assets/cat-work.png'
import './Home.css'

const Home = () =>  {
    return (
        <div className='Home'>
        <div className='home-content'>
        <img src={CatWork} alt='chat au travail' className='home-img'/>
        <h1 className='welcome-title'>Bienvenue à toi, babe !</h1>
        <p>Pour trouver la ressource dont tu as besoin, utilises au choix :</p>
        <p>- La barre de recherche, pour une requête spécifique</p>
        <p>- Les boutons ci-contre, pour un aperçu global</p>
        </div>
        <div className='home-content-assets'>
        <AssetsFilter />
        </div>
        </div>
    )
}

export default Home