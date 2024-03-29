import React from "react";
import FlagFR from "../../assets/flag-fr.png"
import FlagENG from "../../assets/flag-eng.png"
import './GenerateCard.css'

function GenerateCard({ card }) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    return (
        <div className="GenerateCard" >
            <div className="flex-cards-visual" style={{ backgroundImage: `url(${card.image})` }}>
            </div>

            <div className="flex-cards-description">
                <h4 className="card-title">{card.title}</h4>
                <div className="format-stylized">
                    {(() => {
                        if (card.format.includes("Image")) {
                            return <span><i class="material-icons">image</i>{card.format}</span>
                        }
                        else if (card.format.includes("Internet")) {
                            return <span><i class="material-icons">web</i>{card.format}</span>
                        }
                        else if (card.format.includes("Vidéo")) {
                            return <span><i class="material-icons">ondemand_video</i>{card.format}</span>
                        }
                        else if (card.format.includes("Diaporama")) {
                            return <span><i class="material-icons">aspect_ratio</i>{card.format}</span>
                        }
                    }
                    )()}
                </div>

                <p>{card.description}</p>
            </div>

            <div className="card-visual-row">
                {card.language.includes("Anglais") ?
                    <span>
                        <img src={FlagENG} alt={card.language} />
                    </span>
                    :
                    <span>
                        <img src={FlagFR} alt={card.language} />
                    </span>
                }

                <span>
                    <i class="material-icons">remove_red_eye</i>
                    <i>{getRandomInt(90) + 50}</i>
                </span>
                <span>
                    <i class="material-icons">comment</i><i>{getRandomInt(50)}</i>
                </span>
                <button><a className="asset-link" href={card.link} target="_blank" rel="noreferrer noopener">Link</a></button>
            </div>
        </div>
    )
}
export default GenerateCard;