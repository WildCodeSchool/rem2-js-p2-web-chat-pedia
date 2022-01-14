import {useEffect, useState} from 'react';
import GenerateCard from './GenerateCard';
import "./GetCards.css"

function GetCards() {
  const [cards, setCards] = useState([]);
  
  useEffect(()=> {
    fetch("https://a.nacapi.com/AssetsDevList")
    .then(response => response.json())
    .then(data => setCards(data))
    .catch(console.error)
  }, [] );

  return (
    <div className="GetCards">
      {
      cards &&
      cards.map((card) => (
        <div key= {card.id}>
          <GenerateCard card={card}/>
        </div>
      ))
      }
        
    </div>
  );
}

export default GetCards;