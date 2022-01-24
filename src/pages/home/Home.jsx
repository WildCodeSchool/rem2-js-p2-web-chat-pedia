import React from 'react'
import AssetsFilter from '../../components/filters/AssetsFilter'
import CatWork from '../../assets/cat-work.png'
import Slider from '../../components/news/Slider';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <div className='whats-left'>
            <h2>Il reste quoi ?</h2>
            <p>Cards vers results</p>
            <p>Searchbar vers results</p>
            <p>Asynchroniser le tchat</p>
            <p>OnKeyPress SearchBar</p>
            <p>Focus permanent boutons</p>
            </div>
            <div className='home-content-container'>
                <div className='home-content'>
                    <img src={CatWork} alt='chat au travail' className='animate__animated animate__tada'/>
                    <h1 className='welcome-title'>Bienvenue à toi, babe !</h1>
                    <p>Pour trouver une ressource, utilises au choix :</p>
                    <p>- La barre de recherche</p>
                    <p>- Les boutons ci-contre</p>
                </div>
                <div className='home-content'>
                    <AssetsFilter />
                </div>
            </div>
            <div className='slider-news'>
                <Slider />
            </div>
        </div>
    )
}

export default Home