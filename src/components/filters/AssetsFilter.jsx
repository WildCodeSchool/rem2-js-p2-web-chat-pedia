import { useState } from 'react'
import React from 'react'
import './AssetsFilter.css'
import { useNavigate } from 'react-router-dom'


const AssetsFilter = () => {
    const [devClicked, setDevClicked] = useState('')
    const [techClicked, setTechClicked] = useState('')
    const [formatClicked, setFormatClicked] = useState('')
    let navigate = useNavigate();

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
            <div className='animate__animated animate__fadeInRight'>
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
                    <div className='animate__animated animate__fadeInRight'>
                        <div className="filters-box-main">
                            <p>Ok ! Sur quelle techno ?</p>
                            <div className="buttons-stylized">
                                {buttons[0][1].map((button) => <button onClick={() => setTechClicked(`${button}`)}>{button}</button>)}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

                {devClicked === 'back' ?
                    <div className='animate__animated animate__fadeInRight'>
                        <div className="filters-box-main">
                            <p>Ok! Sur quelle techno ?</p>
                            <div className="buttons-stylized">
                                {buttons[1][1].map((button) => <button onClick={() => setTechClicked(`${button}`)}>{button}</button>)}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

                {techClicked !== '' ?
                    <div className='animate__animated animate__fadeInRight'>
                        <div className="filters-box-main">
                            <p>Ca marche ! Avec quel format es-tu le plus à l'aise ?</p>
                            <div className="buttons-stylized">
                                {buttons[2][1].map((button) => <button onClick={() => {setFormatClicked(`${button}`) ; navigate(`/results/${devClicked},${techClicked},${formatClicked}`)}}>
                                    {button}
                                </button>)}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default AssetsFilter
