import React from 'react'
import AssetsFilter from '../../components/filters/AssetsFilter'
import CatWork from '../../assets/cat-work.png'
import Slider from '../../components/news/Slider';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <div className='home-content-container'>
                <div className='home-content'>
                    <img src={CatWork} alt='chat au travail' className='animate__animated animate__tada'/>
                    <h1 className='welcome-title'>Bienvenue à toi, babe !</h1>
                    <p>Pour trouver une ressource, utilises au choix :</p>
                    <p>- La barre de recherche</p>
                    <p>- Les suggestions ci-contre</p>
                    <p>- Les boutons ci-dessous</p>
                </div>
                <div className='home-content'>
                <Slider />
                </div>
            </div>
            <div className='filters-content'>
            <AssetsFilter />
            </div>
        </div>
    )
}

export default Home