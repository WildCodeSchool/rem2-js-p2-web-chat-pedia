import Balise from '../../assets/balise.png'
import CatHunt from '../../assets/cat-hunt.png'
import CatHunt0 from '../../assets/cat-hunt-zero.png'
import GenerateCard from '../../components/cards/GenerateCard'
import React from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import './Results.css'

const Results = ({ searchCard }) => {
    const [cards, setCards] = useState([])
    let params = useParams()

    useEffect(() => {
        const fetchDataResult = () => {
            fetch(
                `https://a.nacapi.com/AssetsListP2/?tags=${params.query}`
            )
                .then(response => response.json())
                .then(data => setCards(data))
                .catch(console.error)
        };
        fetchDataResult();
    }, [params.query])



    const searchingCards =
        cards &&
            cards
                .filter((searchedCard) =>
                searchedCard.title.includes(searchCard)
                || searchedCard.tags.includes(searchCard)
                || searchedCard.format.includes(searchCard))
                .map((resultCard) => {
                    return (
                        <div key={resultCard.id}>
                            <GenerateCard card={resultCard} />
                        </div>
                    )
                })

    return (
        <div className='Results'>
            <NavLink to="/" >
                <img src={Balise} alt='return' className='go-home-button' />
            </ NavLink>
            {searchingCards.length !== 0 ?
                            <div className='results-cards'>
                                <h1>Résultats de la chat-sse</h1>
                                <div className='animate__animated animate__bounce'>
                                    <img src={CatHunt} alt="results cat" className='results-cards-cat' />
                                </div>
                                {searchingCards.map((resultCard, index) =>
                                    <div key={index}>
                                        <GenerateCard card={resultCard} />
                                    </div>)}
                            </div>
                            :
                            <div className='results-cards'>
                                <h1>Uh oh, rien pour le moment ...</h1>
                                <div className='animate__animated animate__bounce'>
                                    <img src={CatHunt0} alt="no result cat" className="results-cards-cat" />
                                </div>
                                <p>Mais si tu trouves quelque chose à ce sujet, tu peux contribuer <NavLink to='/depot'>ici</NavLink></p>
                            </div>
                        }
        </div>
    )
}

export default Results
