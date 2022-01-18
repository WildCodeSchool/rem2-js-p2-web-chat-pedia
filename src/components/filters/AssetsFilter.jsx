import React from 'react'
import { useState } from 'react'
import GetCards from '../cards/GetCards';
import './AssetsFilter.css'

const AssetsFilter = () => {
    const [typeDevClicked, setTypeDevClicked] = useState('');
    const [techClicked, setTechClicked] = useState(false);
    const [formatSelected, setFormatSelected] = useState(false);
    const [searchedDevType, setSearchedDevType] = useState('');
    const [searchedTags, setSearchedTags] = useState('');
    const [searchedFormat, setSearchedFormat] = useState('');

//     import React from 'react'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';

// const AnimalDetails = () => {
//     const [animalInfos, setAnimalInfos] = useState([]);
//     const [search, setSearch] = useState('');
//     const params = useParams();

//     useEffect(() => {
//         axios
//         .get(`https://a.nacapi.com/zoolive/${params.id}`)
//         .then((res) => {
//             setAnimalInfos(res.data)
//         })
//     }, [])

//     return (
//         <div>
//             <h1>Coucou</h1>
//             {animalInfos.name}
//         </div>
//     )
// }

// export default AnimalDetails


    const buttons = [
        [
            "front",
            ["html", "css", "javascript", "scss", "react", "git|github"]
        ],
        [
            "back",
            ["mysql", "express", "git|github", "BDD"]
        ],
        [
            "format",
            ["site internet", "vidéo", "image", "diaporama"]
        ]
    ]

    return (
        <div className="AssetsFilter">
            <div className="filters-box-main">
                <p>Ton projet porte sur quel type de dev ?</p>
                <div className="buttons-stylized">
                    <button onClick={() => {
                        setTypeDevClicked(buttons[0][0]);
                        setTechClicked(false);
                        setSearchedDevType("front");
                    }}>
                        {buttons[0][0]}
                    </button>

                    <button onClick={() => {
                        setTypeDevClicked(buttons[1][0]);
                        setTechClicked(false);
                        setSearchedDevType("back");
                    }}>
                        {buttons[1][0]}
                    </button>
                </div>
            </div>

            <div className="second-filter">
                {typeDevClicked === "front" ?
                    <div className="filters-box">
                        <p>
                            Ok ! Sur quelle technologie travailles-tu ?
                        </p>
                        <div className="buttons-stylized">
                            {buttons[0][1].map((button) =>
                                <button onClick={() => {
                                    setTechClicked(true);
                                    setSearchedTags("CSS");
                                }}>
                                    {button}
                                </button>)}
                        </div>
                    </div>
                    :
                    null
                }
                {typeDevClicked === 'back' ?
                    <div className="filters-box">
                        <p>
                            Ok ! Sur quelle technologie travailles-tu ?
                        </p>
                        <div className="buttons-stylized">
                            {buttons[1][1].map((button) =>
                                <button onClick={() => {
                                    setTechClicked(true);
                                    setSearchedTags("mysql");
                                }}>
                                    {button}
                                </button>)}
                        </div>
                    </div>
                    :
                    null
                }
                {techClicked ?
                    <div className="filters-box">
                        <p>
                            Ca marche ! Quel format t'aiderait le plus ?
                        </p>
                        <div className="buttons-stylized">
                            {buttons[2][1].map((button) =>
                                <button onClick={() => {
                                    setFormatSelected(true);
                                    setSearchedFormat("Site Internet");
                                }}>
                                    {button}
                                </button>)}
                        </div>
                    </div>
                    :
                    null
                }
            </div>
            {formatSelected ?
                <GetCards devtype={searchedDevType} tags={searchedTags} format={searchedFormat} /> : null
            }
        </div>
    )
}

export default AssetsFilter
