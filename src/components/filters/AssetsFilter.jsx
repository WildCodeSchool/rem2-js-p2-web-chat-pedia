import GenerateCard from '../cards/GenerateCard'
import React from 'react'
import { useState, useEffect } from 'react'
import './AssetsFilter.css'
import Test from '../../assets/flag-fr.png'
import Test2 from '../../assets/backtotop.png'
import Test3 from '../../assets/flag-eng.png'


const AssetsFilter = () => {
    const [devClicked, setDevClicked] = useState('')
    const [techClicked, setTechClicked] = useState('')
    const [formatClicked, setFormatClicked] = useState('')

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://a.nacapi.com/AssetsListP2")
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(console.error)
    }, []);

    const buttons = [
        [
            'front',
            ['html', 'CSS', 'Javascript', 'Node', 'React', 'Git', 'Github']
        ],
        [
            'back',
            ['BDD', 'Express', 'MySQL', 'Git', 'Github']
        ],
        [
            'format',
            ['Diaporama', 'Image', 'Site Internet', 'Vidéo']
        ]
    ]

    const resetFilters = () => {
        setTechClicked('');
        setFormatClicked('');
    }

    return (
        <div className="AssetsFilter">
            <div className="filters-box-main">
                <p>Ton projet porte sur quel type de dev ?</p>
                <div className="buttons-stylized">
                    <button onClick={() => { setDevClicked(`${buttons[0][0]}`); resetFilters() }}>
                        {buttons[0][0]}
                    </button>

                    <button onClick={() => { setDevClicked(`${buttons[1][0]}`); resetFilters() }}>{buttons[1][0]}</button>
                </div>
            </div>

            {devClicked === 'front' ?
                <div className="filters-box-main">
                    <p>Ok ! Sur quelle techno ?</p>
                    <div className="buttons-stylized">
                        {buttons[0][1].map((button) => <button onClick={() => setTechClicked(`${button}`)}>{button}</button>)}
                    </div>
                </div>
                :
                null
            }

            {devClicked === 'back' ?
                <div className="filters-box-main">
                    <p>Ok! Sur quelle techno ?</p>
                    <div className="buttons-stylized">
                        {buttons[1][1].map((button) => <button onClick={() => setTechClicked(`${button}`)}>{button}</button>)}
                    </div>
                </div>
                :
                null
            }

            {techClicked !== '' ?
                <div className="filters-box-main">
                    <p>Ca marche ! Avec quel format es-tu le plus à l'aise ?</p>
                    <div className="buttons-stylized">
                        {buttons[2][1].map((button) => <button onClick={() => setFormatClicked(`${button}`)}>
                            {button}
                        </button>)}
                    </div>
                </div>
                :
                null
            }

            {formatClicked !== "" ?
                <div className="display-cards-flex">
                    {
                        cards &&
                        cards
                            .filter((searchedCard) =>
                                searchedCard.devtype.includes(devClicked)
                                && searchedCard.tags.includes(techClicked)
                                && searchedCard.format.includes(formatClicked))
                            .map((resultCard) =>
                                <div key={resultCard.id}>
                                    <GenerateCard card={resultCard} />
                                </div>
                            )
                    }
                </div>
                :
                null
            }

        </div>
    )
}

export default AssetsFilter
