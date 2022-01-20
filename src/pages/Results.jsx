import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Balise from '../assets/balise.png';
import GenerateCard from '../components/cards/GenerateCard';

const Results = ({ searchTerm }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://a.nacapi.com/AssetsListP2")
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(console.error)
    }, []);

    return (

        <div className='Results'>
            <NavLink to="/" >
                <img src={Balise} alt='return' />
            </ NavLink>
            <div className='results-content'>
                <h1>Résultats de la chat-sse</h1>

                {cards &&
                cards
                    // .filter((searchedCard) =>
                    //     searchedCard.title.includes(searchTerm))
                    .map((resultCard) =>
                        <div key={resultCard.id}>
                            <GenerateCard card={resultCard} />
                        </div>
                    )}
            </div>
        </div>
    )
};

export default Results;
