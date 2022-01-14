import React from 'react'
import { useState } from 'react'
import './AssetsFilter.css'

const AssetsFilter = () => {
    const [typeDevClicked, setTypeDevClicked] = useState('');
    const [assetFormat, setAssetFormat] = useState(false);
    const [searchedTerms, setSearchedTerms] = useState([]);

    const buttons = [
        [
            "front",
            ["html", "css", "javascript", "scss", "react", "git|github"]
        ],
        [
            "back",
            ["mysql", "express", "git|github"]
        ],
        [
            "format",
            ["site internet", "vidéo", "image", "diaporama"]
        ]
    ]

    return (
        <div className="AssetsFilter">
            <div className="filters-box">
                <p>Hi babe ! Quel dev es-tu ?</p>
                <div className="buttons-stylized">
                    <button onClick={() => {
                        setTypeDevClicked(buttons[0][0]);
                        setAssetFormat(false);
                    }}>
                        {buttons[0][0]}
                    </button>
                    <button onClick={() => {
                        setTypeDevClicked(buttons[1][0]);
                        setAssetFormat(false);
                        setSearchedTerms[0](buttons[1][0]);
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
                            <button onClick={() => setAssetFormat(true)}>
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
                            <button onClick={() => setAssetFormat(true)}>
                                {button}
                            </button>)}
                        </div>
                    </div>
                    :
                    null
                }
                {assetFormat ?
                    <div className="filters-box">
                        <p>
                            Ca marche ! Quel format t'aiderait le plus ?
                        </p>
                        <div className="buttons-stylized">
                        {buttons[2][1].map((button) => <button>{button}</button>)}
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
